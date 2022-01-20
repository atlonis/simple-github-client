import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/client';

import AppBackground from '../../components/AppBackground';
import SearchInput from '../../components/SearchInput';
import RepoList from './components/RepoList';
import Spinner from '../../components/Spinner';

import GET_REPOSITORIES from '../../services/graphql/getRepositories';
import styles from './styles';

const Main = props => {
  const [searchInputText, setSearchInputText] = useState('');
  const [cursor, setCursor] = useState(null);
  const [isShowSpinner, setIsShowSpinner] = useState(true);
  const [repos, setRepos] = useState([]);
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: {
      repoName: searchInputText,
      cursor,
    },
    onCompleted: response => {
      if (cursor) {
        setRepos(prevState => [...prevState, ...response.search.nodes]);
      } else {
        setRepos(response?.search.nodes || []);
      }
    },
    skip: !searchInputText,
  });

  const onListEndReached = () => {
    setIsShowSpinner(false);
    if (data?.search.pageInfo.hasNextPage) {
      setCursor(data.search.pageInfo.endCursor);
    }
  };

  const onSearchInputChange = useCallback(
    inputValue => {
      setSearchInputText(inputValue);
      setIsShowSpinner(true);
      if (cursor) {
        setCursor(null);
      }
    },
    [cursor],
  );

  return (
    <AppBackground>
      <SearchInput onChangeText={onSearchInputChange} />
      {isShowSpinner && loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <View>
              <Text style={styles.errorTextStyle}>{error.message}</Text>
            </View>
          ) : (
            <RepoList
              data={repos}
              onListEndReached={onListEndReached}
              repositoryCount={data?.search.repositoryCount}
            />
          )}
        </>
      )}
    </AppBackground>
  );
};

export default Main;

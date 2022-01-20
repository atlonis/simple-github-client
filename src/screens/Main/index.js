import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import LottieView from 'lottie-react-native';

import AppBackground from '../../components/AppBackground';
import SearchInput from '../../components/SearchInput';
import RepoList from './components/RepoList';
import Spinner from '../../components/Spinner';

import GET_REPOSITORIES from '../../services/graphql/getRepositories';
import styles from './styles';

const Main = props => {
  const [searchInputText, changeSearchInputText] = useState('');

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: {
      repoName: searchInputText,
    },
    skip: !searchInputText,
  });

  return (
    <AppBackground>
      <SearchInput changeSearchInputText={changeSearchInputText} />
      {data && (
        <Text style={styles.infoTextStyle}>
          Repos found: {data.search.repositoryCount}
        </Text>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <View>
              <Text style={styles.infoTextStyle}>{error.message}</Text>
            </View>
          ) : (
            <RepoList data={data && data.search.nodes} />
          )}
        </>
      )}
    </AppBackground>
  );
};

export default Main;

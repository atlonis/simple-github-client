import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import AppBackground from '../../components/AppBackground';
import SearchInput from '../../components/SearchInput';
import RepoList from './components/RepoList';

import GET_REPOSITORIES from '../../services/graphql/getRepositories';

const Main = props => {
  const [searchInputText, changeSearchInputText] = useState('');

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: {
      repoName: searchInputText,
    },
  });

  return (
    <AppBackground>
      <SearchInput changeSearchInputText={changeSearchInputText} />
      <RepoList data={data && data.search.nodes} />
    </AppBackground>
  );
};

export default Main;

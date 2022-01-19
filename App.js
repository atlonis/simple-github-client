import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GITHUB_GRAPHQL_URI } from '@env';

import AppNavigator from './src/navigation/AppNavigator';

const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;

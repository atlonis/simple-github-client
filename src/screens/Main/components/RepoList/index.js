import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem';
import ListHeader from '../ListHeader';

const RepoList = ({ data, onListEndReached, repositoryCount }) => {
  return (
    <FlatList
      data={data}
      onEndReachedThreshold={2}
      keyExtractor={(item, index) => index}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <ListHeader
          repositoryCount={repositoryCount}
          itemsCount={data.length}
        />
      }
      onEndReached={onListEndReached}
      renderItem={ListItem}
    />
  );
};

export default RepoList;

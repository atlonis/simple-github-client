import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const { headerStyle, headerTextStyle } = styles;

const ListHeader = ({ itemsCount, repositoryCount }) => {
  return (
    <View style={headerStyle}>
      <Text style={headerTextStyle}>
        Repos count: {repositoryCount || '😳'}
        {'\n'}
        Items in the list: {itemsCount}
      </Text>
    </View>
  );
};

export default ListHeader;

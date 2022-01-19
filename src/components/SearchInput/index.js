import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const { container, input, searchIcon } = styles;

const SearchInput = ({ changeSearchInputText }) => {
  return (
    <View style={container}>
      <Icon style={searchIcon} name="ios-search" size={16} color="#fffffe" />
      <TextInput
        style={input}
        placeholder="Search"
        placeholderTextColor="#b8c1ec"
        onChangeText={changeSearchInputText}
      />
    </View>
  );
};

export default SearchInput;

import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FlexView from '../../../../components/FlexView';

import styles from './styles';

const {
  container,
  logoStyle,
  buttonStyle,
  secondaryTextStyle,
  buttonTextStyle,
  nameTextStyle,
  descriptionTextStyle,
  repoInfoContainer,
} = styles;

const ListItem = ({
  item: {
    owner: { login },
    name,
    forkCount,
    description,
    stargazerCount,
    url,
    watchers: { totalCount },
    openGraphImageUrl,
  },
  index,
}) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Your device can't open url`);
    }
  };

  return (
    <View style={container}>
      <FlexView align="rowStartCenter">
        <Image
          style={logoStyle}
          source={{
            uri: openGraphImageUrl,
          }}
        />
        <Text style={secondaryTextStyle}>{login}</Text>
      </FlexView>
      <Text style={nameTextStyle}>{name}</Text>
      <Text style={descriptionTextStyle}>{description}</Text>
      <FlexView align="rowStartCenter">
        <FlexView style={repoInfoContainer} align="rowStartTop">
          <Icon name="ios-star" size={16} color="#fffffe" />
          <Text style={secondaryTextStyle}>{stargazerCount}</Text>
        </FlexView>
        <FlexView style={repoInfoContainer} align="rowStartTop">
          <Icon name="ios-eye" size={16} color="#fffffe" />
          <Text style={secondaryTextStyle}>{totalCount}</Text>
        </FlexView>
        <FlexView style={repoInfoContainer} align="rowStartTop">
          <Icon name="git-network-outline" size={16} color="#fffffe" />
          <Text style={secondaryTextStyle}>{forkCount}</Text>
        </FlexView>
        <TouchableOpacity onPress={handlePress} style={buttonStyle}>
          <Text style={buttonTextStyle}>Open in browser</Text>
        </TouchableOpacity>
      </FlexView>
    </View>
  );
};

export default ListItem;

import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const FlexView = ({ children, style, align, withFlex }) => {
  return (
    <View style={[style, withFlex && styles.container, align && styles[align]]}>
      {children}
    </View>
  );
};

export default FlexView;

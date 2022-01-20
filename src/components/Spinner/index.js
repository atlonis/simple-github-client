import React from 'react';
import LottieView from 'lottie-react-native';

import spinnerAnimation from '../../assets/animations/spinner.json';

const Spinner = () => {
  return <LottieView source={spinnerAnimation} speed={3} autoPlay />;
};

export default Spinner;

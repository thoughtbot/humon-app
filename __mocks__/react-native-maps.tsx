import React from 'react';
import {View} from 'react-native';

interface Props {
  testID: string;
  children: React.ReactNode;
}

const MapView = ({testID, children}: Props): JSX.Element => {
  return <View {...{testID}}>{children}</View>;
};

export default MapView;

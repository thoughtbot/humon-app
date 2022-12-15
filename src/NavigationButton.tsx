import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  onPress: () => void;
  title: string;
}

const NavigationButton = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
  },
});

export default NavigationButton;

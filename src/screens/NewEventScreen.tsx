import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const NewEventScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>New Event</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
});

export default NewEventScreen;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MapView testID="mapView" style={styles.mapContainer} />
      </SafeAreaView>
    </NavigationContainer>
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

export default App;

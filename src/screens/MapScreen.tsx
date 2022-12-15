import React from 'react';
import MapView from 'react-native-maps';
import {SafeAreaView, StyleSheet} from 'react-native';

const MapScreen = () => (
  <SafeAreaView style={styles.container}>
    <MapView testID="mapView" style={styles.mapContainer} />
  </SafeAreaView>
);

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

export default MapScreen;

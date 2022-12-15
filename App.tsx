import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import {SafeAreaView, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const MapScreen = () => (
  <SafeAreaView style={styles.container}>
    <MapView testID="mapView" style={styles.mapContainer} />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Humon',
            headerStyle: {
              backgroundColor: 'rgb(0, 179, 153)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
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

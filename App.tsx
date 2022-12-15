import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from './src/screens/MapScreen';
import NewEventScreen from './src/screens/NewEventScreen';
import NavigationButton from './src/NavigationButton';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(0, 179, 153)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={({navigation}) => ({
          title: 'Humon',
          headerLeft: () => {
            return (
              <NavigationButton
                title="+"
                onPress={() => navigation.navigate('NewEvent')}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="NewEvent"
        component={NewEventScreen}
        options={{
          title: 'New Event',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

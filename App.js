import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddEvents from './screens/AddEvents';
import Login from './screens/Login';

const App = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Login'}>
        <Screen name="Login" component={Login} />
        <Screen name="AddEvents" component={AddEvents} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;

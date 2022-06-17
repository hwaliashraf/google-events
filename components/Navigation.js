import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef, navigate} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import AddEvents from '../screens/AddEvents';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function onAuthStateChanged(user) {
    if (user) {
      setLoggedIn(true);
      navigate('AddEvents');
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
    } else {
      setLoggedIn(false);
      navigate('Login');
      await AsyncStorage.removeItem('userInfo');
    }
  }
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{headerShown: false}}>
        {!loggedIn ? (
          <Screen name="Login" component={Login} />
        ) : (
          <Screen name="AddEvents" component={AddEvents} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

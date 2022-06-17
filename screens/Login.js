import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import Container from '../components/Container';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '../constants';

const Login = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken, user} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
      if (user?.id) {
        await AsyncStorage.setItem('userInfo', JSON.stringify(user));
        navigation.navigate('AddEvents');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <View style={styles.loginContainer}>
        <GoogleSigninButton
          onPress={signIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          style={styles.loginBtn}
        />
      </View>
    </Container>
  );
};

export default Login;

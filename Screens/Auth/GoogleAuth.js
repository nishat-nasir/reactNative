import React from 'react';
import {Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '577201226409-d55rar4vbukj68mp4b6910fem69cg4bh.apps.googleusercontent.com',
});

function GoogleAuth() {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('mytoken' + idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
}

export default GoogleAuth;

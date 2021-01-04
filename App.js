import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import SignUp from './Screens/Auth/Signup';
import Login from './Screens/Auth/Login';
import GoogleAuth from './Screens/Auth/GoogleAuth';
import {firebase} from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      setUser(false);
    } else {
      setUser(true);
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            options={{headerShown: false, headerTitleAlign: 'center'}}
            name="Home"
            component={Home}
          />
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerTitleAlign: 'center', title: 'Sign Up'}}
              name="Signup"
              component={SignUp}
            />

            <Stack.Screen
              options={{headerTitleAlign: 'center', title: 'Google Sign Up'}}
              name="GoogleAuth"
              component={GoogleAuth}
            />
            <Stack.Screen
              options={{headerShown: false, headerTitleAlign: 'center'}}
              name="Home"
              component={Home}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

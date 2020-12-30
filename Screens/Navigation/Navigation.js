import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GoogleSignup from '../Auth/GoogleSignup';
import Home from '../Home';
import Login from '../Auth/Login';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerTitleAlign: 'center', title: 'Sign Up'}}
        name="GoogleSignup"
        component={GoogleSignup}
      />
      <AuthStack.Screen
        options={{headerShown: false, headerTitleAlign: 'center'}}
        name="Home"
        component={Home}
      />
    </AuthStack.Navigator>
  );
};

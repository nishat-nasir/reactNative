import React from 'react';
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
import {AuthStackScreen} from './Screens/Navigation/Navigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Card, Searchbar} from 'react-native-paper';

const Home = () => {
  return (
    <View>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Content
          title={
            <Text style={{fontSize: 34, fontWeight: 'bold'}}> Welcome </Text>
          }
          style={{alignItems: 'center'}}
        />
      </Appbar.Header>
    </View>
  );
};

export default Home;

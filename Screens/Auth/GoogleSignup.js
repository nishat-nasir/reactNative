import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Formik} from 'formik';

const GoogleSignup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{firstName: '', lastName: '', phoneNumber: ''}}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.inputView}
              placeholder="First Name"
              onChangeText={props.handleChange('firstName')}
              value={props.values.title}
            />
            <TextInput
              style={styles.inputView}
              placeholder="Last Name"
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />

            <TextInput
              style={styles.inputView}
              placeholder="Phone Number"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.signupBtn}
              onPress={() => {
                props.handleSubmit;
                navigation.push('Home');
              }}>
              <Text style={styles.signupText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  inputView: {
    width: 300,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  signupBtn: {
    backgroundColor: '#205b96',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
  },
});

export default GoogleSignup;

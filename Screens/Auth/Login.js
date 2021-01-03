import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bruh App</Text>
      <View style={styles.logInputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#ababab"
          defaultValue={email}
          onChangeText={(name) => setEmail(name)}
        />
      </View>
      <View style={styles.passInputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#ababab"
          defaultValue={password}
          onChangeText={(pass) => setPassword(pass)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupBtn}>
        <Text>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push('GoogleAuth')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 50,
  },
  logInputView: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
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
  passInputView: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
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
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 10,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#205b96',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupBtn: {
    marginTop: 25,
    flexDirection: 'row',
  },
  signupText: {
    textDecorationLine: 'underline',
  },
});

export default Login;

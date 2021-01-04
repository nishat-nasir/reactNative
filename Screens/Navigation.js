import {createStackNavigator} from '@react-navigation/stack';
import GoogleAuth from './Auth/GoogleAuth';
import Login from './Auth/Login';
import Home from './Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={GoogleAuth} />
    </Stack.Navigator>
  );
}

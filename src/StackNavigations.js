// Import React library
import * as React from 'react';

// Import all screens for navigation
import Otpscreen from './Otpscreen';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Passwordchanged from './Passwordchanged';
import Signup from './Signup';
import Signin from './Signin';
import BottomNavigator from './BottomNavigator';
import Myaddress from './Myaddress';
import Addaddress from './Addaddress';
import Checkout from './Checkout';
import Background from './Background';
import Homepage from './Homepage';

// Import NavigationContainer which wraps the entire app for navigation
import { NavigationContainer } from '@react-navigation/native';

// Import createNativeStackNavigator for stack-based navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create a Stack Navigator object
const Stack = createNativeStackNavigator();

// Main App component that holds the stack navigator
export default function StackNavigator() {
  return (
    // NavigationContainer wraps the whole app to enable navigation
    <NavigationContainer>

      {/* Stack Navigator holds all the screens */}
      <Stack.Navigator>

        {/* Signup screen */}
        {/* headerShown: false => hides the default header */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        {/* OTP verification screen */}
        <Stack.Screen
          name="Otpscreen"
          component={Otpscreen}
          options={{ headerShown: false }}
        />

        {/* Forgot Password screen */}
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{ headerShown: false }}
        />

        {/* Signin screen */}
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />

        {/* Reset Password screen */}
        <Stack.Screen
          name="Resetpassword"
          component={Resetpassword}
          options={{ headerShown: false }}
        />

        {/* Password Changed confirmation screen */}
        <Stack.Screen
          name="Passwordchanged"
          component={Passwordchanged}
          options={{ headerShown: false }}
        />

        {/* My Address screen */}
        <Stack.Screen
          name='Myaddress'
          component={Myaddress}
          options={{ headerShown: false }}
        />

        {/* Add Address screen */}
        <Stack.Screen
          name='Addaddress'
          component={Addaddress}
          options={{ headerShown: false }}
        />

        {/* Checkout screen */}
        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{ headerShown: false }}
        />

        {/* Background / Landing screen */}
        <Stack.Screen
          name="Background"
          component={Background}
          options={{ headerShown: false }}
        />

        {/* Homepage screen */}
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />

        {/* Bottom Navigator which contains tabs */}
        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
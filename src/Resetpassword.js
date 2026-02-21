import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { SafeAreaView } from 'react-native-safe-area-context';

const Resetpassword = ({ navigation, route }) => {
  const email = route?.params?.email;
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [error, setError] = useState('');
  let [color, setColor] = useState('green');
  let updatepassword = async () => {
    if (!email) {
      setError('Email not found');
      setColor('red');
      return;
    }
    try {
      let response = await fetch(
        'https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/resetPassword',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password: password,
            confirmPassword: confirmPassword,
            logoutFromAllDevices: true,
          }),
        },
      );

      let data = await response.json();
      console.log('Reset Password Response:', data);

      if (response.ok) {
        setError(data.message);
        setColor('green');
        navigation.navigate('Passwordchanged');
      } else {
        setError(data.message);
        setColor('red');
      }
    } catch (err) {
  console.log('CATCH ERROR 👉', err);
  setError(err.message);
  setColor('red');
}
  };
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#f9f1f1', }}>    
    

      <View style={styles.main}>
        <Text style={styles.title}>Password Reset</Text>
        {/* Password input field */}
        <View style={styles.main1}>
          {/* Lock icon */}
          <Feather name="lock" size={20} color="#626262" />

          {/* Password input */}
          <TextInput
            placeholder=" Enter your new password "
            name="password"
            value={password}
            onChangeText={txt => setPassword(txt)}
            style={styles.input}
          />

          {/* Eye icon (future show/hide password) */}
          <Feather name="eye" size={20} style={{ marginLeft: 'auto' }} />
        </View>
        {error ? (
          <Text
            style={{
              marginTop: height(1.5),
              textAlign: 'left',
              color: color,
              fontSize: totalSize(1.4),
            }}
          >
            {error}
          </Text>
        ) : null}
        <View style={styles.main1}>
          {/* Lock icon */}
          <Feather name="lock" size={20} color="#626262" />

          {/* Confirm password input */}
          <TextInput
            placeholder="Re-enter your new password"
            name="confirmPassword"
            value={confirmPassword}
            onChangeText={txt => setConfirmPassword(txt)}
            style={styles.input}
          />

          {/* Eye icon */}
          <Feather name="eye" size={20} style={{ marginLeft: 'auto' }} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updatepassword()}
        >
          <Text style={styles.text}>Reset Password</Text>
        </TouchableOpacity>
      </View>
   </SafeAreaView> 
  );
};

export default Resetpassword;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: width(7.73),
  },
  title: {
    fontSize: totalSize(4.02), // ≈36px
    fontWeight: '700',
    lineHeight: totalSize(4.81), // ≈43px
    color: '#000',
    textAlign: 'center',
    marginTop: height(5),
  },

  main1: {
    flexDirection: 'row',
    borderWidth: totalSize(0.11),
    height: height(6.5),
    width: width(84.53),
    alignItems: 'center',
    marginTop: height(3.97),
    paddingLeft: width(2.93),
    backgroundColor: '#F3F3F3',
    borderColor: '#A8A8A9',
    borderRadius: totalSize(1),
    paddingHorizontal: width(4.53),
  },
  // TextInput style
  input: {
    fontSize: totalSize(1.34),
    color: '#676767',
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  // Button style
  button: {
    width: width(84.53),
    height: height(6.78),
    backgroundColor: '#F83758',
    borderRadius: totalSize(0.67),
    justifyContent: 'center',
    marginTop: height(4.67),
  },

  // Button text style
  text: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

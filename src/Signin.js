// React Native ke basic components import ho rahe hain
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Schema2 } from './Schema2';

// React aur useState hook import
import React, { useState } from 'react';

// Responsive design ke liye dimensions
import { width, height, totalSize } from 'react-native-dimension';

// Icons ke liye Feather vector icons
import Feather from 'react-native-vector-icons/Feather';

// Form handle karne ke liye Formik
import { useFormik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

// Local storage se data lene ke liye AsyncStorage

// Signin screen component
const Signin = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false); // For password field

  // Custom error state (username aur password ke liye)

  // Formik configuration
  let {
    values, // Input ki values
    handleChange, // Text change handler
    handleBlur, // Blur handler
    handleSubmit, // Submit handler
    touched,
    errors, // Field touch hui ya nahi
  } = useFormik({
    // Initial values
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schema2,
    // Submit par getdata function chalega
    onSubmit: values => {
      let putdata = async () => {
        let url =
          'https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/login';
        let response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            deviceToken: '',
          }),
        });
        let data1 = await response.json();
        if (response.ok) {
          navigation.navigate('Background');
        } else if (data1?.message) {
          Alert.alert('Error', data1.message); // Show backend error
        } else if (data1?.errors?.length > 0) {
          Alert.alert('Error', data1.errors[0].msg); // Validation errors
        } else {
          Alert.alert('Error', 'Something went wrong');
        }
      };

      putdata();
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }} // Vertical scroll bar hide karega
      >
        {/* Main container */}
        <View style={styles.main}>
          {/* Screen heading */}
          <Text
            style={{
              fontSize: totalSize(4.02),
              lineHeight: totalSize(4.8),
              fontWeight: '700',
              marginTop: height(2.34),
            }}
          >
            Welcome {'\n'} Back!
          </Text>

          {/* Username input container */}
          <View style={styles.main1}>
            {/* User icon */}
            <Feather name="user" size={20} />

            {/* Username input */}
            <TextInput
              placeholder="Enter your email"
              value={values.email}
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.input}
            />
          </View>

          {/* Username error message */}
          {touched.email ? (
            <Text style={{ color: 'red', marginTop: 5 }}>{errors.email}</Text>
          ) : null}

          {/* Password input container */}
          <View style={styles.main1}>
            {/* Lock icon */}
            <Feather name="lock" size={20} />
            {/* Password input */}
            <TextInput
              placeholder="password"
              value={values.password}
              name="password"
              secureTextEntry={!showPassword} // toggle functionality
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.input}
            />
            {/* Eye icon toggles password visibility */}
            <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'} // change icon accordingly
                size={20}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>{' '}
          </View>
          <Text
            onPress={() => {
              navigation.navigate('Forgotpassword');
            }}
            style={{
              color: 'red',
              textAlign: 'right',
              marginTop: height(1.11),
              fontSize: totalSize(1.47),
              fontWeight: '400',
            }}
          >
            {' '}
            Forgot Password?
          </Text>
          {/* Password error message */}
          {touched.password ? (
            <Text style={{ color: 'red', marginTop: 5 }}>
              {errors.password}
            </Text>
          ) : null}

          {/* Login button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          {/* Social login text */}
          <Text
            style={{
              textAlign: 'center',
              marginTop: height(9.24),
              fontWeight: '500',
              fontFamily: 'Montserrat',
              fontSize: totalSize(1.34),
            }}
          >
            - OR Continue with -
          </Text>

          {/* Social login icons container */}
          <View style={styles.Image}>
            {/* Google login */}
            <TouchableOpacity>
              <Image
                source={require('./assets/Google.png')}
                style={{
                  width: width(14.4),
                  height: height(6.7),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>

            {/* Apple login */}
            <TouchableOpacity>
              <Image
                source={require('./assets/Apple.png')}
                style={{
                  width: width(14.4),
                  height: height(6.7),
                  resizeMode: 'contain',
                  marginLeft: width(1.5),
                }}
              />
            </TouchableOpacity>

            {/* Facebook login */}
            <TouchableOpacity>
              <Image
                source={require('./assets/Fb.png')}
                style={{
                  width: width(14.4),
                  height: height(6.7),
                  resizeMode: 'contain',
                  marginLeft: width(1.5),
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Signup navigation text */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: totalSize(1.56),
              fontWeight: '400',
              fontFamily: 'Montserrat',
              marginTop: height(3.45),
            }}
          >
            Create An Account
            {/* Signup screen navigation */}
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{
                textDecorationLine: 'underline',
                color: 'red',
                marginLeft: width(1.33),
                fontSize: totalSize(1.56),
              }}
            >
              
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

// Stylesheet
const styles = StyleSheet.create({
  // Main container
  main: {
    paddingHorizontal: width(8.53),
    flex: 1,
  },

  // Input field container
  main1: {
    width: width(84.53),
    height: height(6.5),
    flexDirection: 'row',
    borderWidth: totalSize(0.11),
    borderRadius: totalSize(1.12),
    backgroundColor: '#F3F3F3',
    borderColor: '#A8A8A9',
    alignItems: 'center',
    paddingHorizontal: width(4.53),
    marginTop: height(4.43),
  },

  // TextInput style
  input: {
    fontSize: totalSize(1.34),
    color: '#676767',
    marginLeft: width(2.93),
    flex: 1,
  },

  // Login button
  button: {
    width: width(84.53),
    height: height(6.78),
    backgroundColor: '#F83758',
    borderRadius: totalSize(0.67),
    justifyContent: 'center',
    marginTop: height(4.67),
  },

  // Button text
  text: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },

  // Social icons container
  Image: {
    flexDirection: 'row',
    marginTop: height(2.46),
    justifyContent: 'center',
  },
});

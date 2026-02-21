// React Native ke basic components import ho rahe hain
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

// React aur hooks import
import React, { useState } from 'react';

// Responsive layout ke liye screen dimensions
import { width, height, totalSize } from 'react-native-dimension';

// Icons ke liye Feather vector icons
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { SafeAreaView } from 'react-native-safe-area-context';
// Form handling ke liye Formik
import { useFormik } from 'formik';

// Form validation schema
import { Schema } from './Schema';

// Signup screen component
const Signup = ({ navigation }) => {
  
const [showPassword, setShowPassword] = useState(false); // For password field
const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password
  // Formik se form ka data aur handlers le rahe hain
  let {
    values, // Input fields ki values
    handleChange, // Text change handle karta hai
    handleBlur, // Input blur handle karta hai
    touched, // Field touch hui ya nahi
    errors, // Validation errors
    handleSubmit, // Form submit function
  } = useFormik({
    // Form ki initial values
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    // Validation rules
    validationSchema: Schema,

    // Submit hone par Storedata function chalega
    onSubmit: async values => {
      const url =
        'https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/signup';

      console.log('Form Values:', values); // Debug

      try {
        const payload = {
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          deviceToken: '',
        };
        console.log('payload:', payload);
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log('Response:', data);
        if (response.ok) {
          navigation.navigate('Signin');
        } else {
          if (data?.message) {
            // 🔹 Email already in use
            Alert.alert('Error', data.message);
          } else if (data?.errors?.length > 0) {
            // 🔹 Validation error (express-validator)
            Alert.alert('Error', data.errors[0].msg);
          } else {
            Alert.alert('Error', 'Something went wrong');
          }
        }
        
      } catch (e) {
        console.error('Something went wrong:', e);
        Alert.alert('Error', 'Something went wrong. Check console.');
      }
    },
  });

  return (
    // Root container
<SafeAreaView style={{ flex: 1,backgroundColor: '#f9f1f1', }}>    
<ScrollView   showsVerticalScrollIndicator={false} style={{flex:1}} // Vertical scroll bar hide karega
    >
      {/* Main content */}
      <View style={styles.main}>
        {/* Titl>e wrapper */}
        <View style={styles.titleWrapper}>
          {/* Screen heading */}
          <Text style={styles.title}>Welcome{'\n'}Back!</Text>
        </View>

        <View style={styles.main1}>
          {/* User icon */}
          <Feather name="user" size={20} color="#626262" />

          {/* Username input */}
          <TextInput
            placeholder="Enter your name  "
            name="name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            style={styles.input}
          />
        </View>
        {/* Username validation error */}
        {errors.name && touched.name ? (
          <Text style={{ color: 'red' }}>{errors.name}</Text>
        ) : null}

        {/* Username input field */}
        <View style={styles.main1}>
          {/* User icon */}
          <Fontisto name="email" size={20} color="#626262" />

          {/* Username input */}
          <TextInput
            placeholder="Enter your email address "
            name="email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            style={styles.input}
          />
        </View>

        {/* email validation error */}
        {errors.email && touched.email ? (
          <Text style={{ color: 'red' }}>{errors.email}</Text>
        ) : null}

        {/* Password input field */}
        <View style={styles.main1}>
          {/* Lock icon */}
          <Feather name="lock" size={20} color="#626262" />

          {/* Password input */}
          <TextInput
            placeholder="Password"
            name="password"
            value={values.password}
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
  </TouchableOpacity>

        </View>

        {/* Password validation error */}
        {errors.password && touched.password ? (
          <Text style={{ color: 'red' }}>{errors.password}</Text>
        ) : null}

        {/* Confirm password input field */}
        <View style={styles.main1}>
          {/* Lock icon */}
          <Feather name="lock" size={20} color="#626262" />

          {/* Confirm password input */}
          <TextInput
            placeholder="Confirm  Password"
            name="confirmPassword"
              
              secureTextEntry={!showConfirmPassword} // toggle functionality

            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            style={styles.input}
          />

 <TouchableOpacity onPress={() => setShowConfirmPassword(prev => !prev)}>
    <Feather
      name={showConfirmPassword ? 'eye-off' : 'eye'}
      size={20}
      style={{ marginLeft: 'auto' }}
    />
  </TouchableOpacity>        </View>

        {/* Confirm password validation error */}
        {errors.confirmPassword && touched.confirmPassword ? (
          <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
        ) : null}

        {/* Terms & conditions text */}
        <Text
          style={{
            marginTop: height(2.34),
            paddingLeft: width(0.26),
            fontSize: totalSize(1.34),
            color: '#676767',
          }}
        >
          By clicking the Register button, you agree {'\n'}to the public offer
        </Text>

        {/* Create account button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>

        {/* Social login separator */}
        <Text
          style={{
            fontSize: totalSize(1.34),
            textAlign: 'center',
            color: '#575757',
            marginTop: height(4.92),
          }}
        >
          - OR Continue with -
        </Text>

        {/* Social login icons container */}
        <View style={styles.imgContainer}>
          {/* Google login icon */}
          <TouchableOpacity>
            <Image
              source={require('./assets/Google.png')}
              style={{
                marginLeft: width(2.67),
                width: width(14.4),
                height: height(6.7),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          {/* Apple login icon */}
          <TouchableOpacity>
            <Image
              source={require('./assets/Apple.png')}
              style={{
                marginLeft: width(2.67),
                width: width(14.4),
                height: height(6.7),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          {/* Facebook login icon */}
          <TouchableOpacity>
            <Image
              source={require('./assets/Fb.png')}
              style={{
                marginLeft: width(2.67),
                width: width(14.4),
                height: height(6.7),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Already have account text */}
        <Text
          style={{
            marginTop: height(3.44),
            fontSize: totalSize(2),
            textAlign: 'center',
          }}
        >
          I Already Have an Account {/* Navigate to Signin screen */}
          <Text
            onPress={() => navigation.navigate('Signin')}
            style={{
              textDecorationLine: 'underline',
              color: 'red',
              fontSize: totalSize(1.55),
            }}
          >
            Login
          </Text>
        </Text>
      </View>
      </ScrollView>
   </SafeAreaView> 
  );
};

export default Signup;

// Styles definition
const styles = StyleSheet.create({
  // Main container style
  main: {
    flex: 1,
    paddingHorizontal: width(7.73),
  },

 

  // Title wrapper
  titleWrapper: {
    marginTop: height(2.33),
    width: '100%',
  },

  // Title text style
  title: {
    fontSize: totalSize(4.02), // ≈36px
    fontWeight: '700',
    lineHeight: totalSize(4.81), // ≈43px
    color: '#000',
  },

  // Input container style
  main1: {
    flexDirection: 'row',
    borderWidth: totalSize(0.11),
    height: height(6.5),
    width: width(84.53),
    alignItems: 'center',
    marginTop: height(1.97),
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
    flex:1
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

  // Social icons container
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2.46),
  },
});

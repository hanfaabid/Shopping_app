import { View, Text,StyleSheet ,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { width, height, totalSize } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Schema3 } from './Schema3';
import { SafeAreaView } from 'react-native-safe-area-context';

const Forgotpassword = ({navigation}) => {
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
        
          email: '',
        },
        validationSchema:Schema3,
        
onSubmit: async (values) => {
  try {
    const response = await fetch('https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/forgotPassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: values.email })
    });

    const data = await response.json();

    if(response.ok){
      navigation.navigate('Otpscreen',{ email: values.email });
    } else if(data?.errors?.length > 0){
      Alert.alert('Error', data.errors[0].msg);
    } else {
      Alert.alert('Error', data.message);
    }

  } catch(error) {
    Alert.alert('Error', 'Network error. Please try again.');
  }
}

        }
         
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>

      <View style={styles.main}>
      <Text style={styles.text}>Password Recovery</Text>
      <Text style={{ marginTop: totalSize(0.98),lineHeight: totalSize(2.45), color:'#676767' }}>Enter your email address below and we'll send you{'\n'}instructions to reset your password.</Text>
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
              {errors.email&& touched.email?(<Text style={{ color: 'red' }}>{errors.email}</Text>):null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text1}>Get OTP</Text>
                      </TouchableOpacity>
</View>
    </SafeAreaView>
  )
}

export default Forgotpassword
const styles=StyleSheet.create({
    // Main container style
  main: {
    flex: 1,
    paddingHorizontal: width(6.73),
  },

  text:{
    textAlign:'center',
        fontSize: totalSize(3.02), // ≈36px
    fontWeight: '700',
    color: '#000',
    marginTop: height(3.33),
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
  text1: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },

})
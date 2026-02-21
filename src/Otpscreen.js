import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';

const Otpscreen = ({ navigation, route }) => {
  // Get email passed from previous screen

  const email = route?.params?.email;
  // State for showing OTP success/error message

  const [otpMessage, setOtpMessage] = useState('');
  const [otpMessageColor, setOtpMessageColor] = useState('green');
  // References for each OTP input box (to control focus)

  let box1 = useRef();
  let box2 = useRef();

  let box3 = useRef();

  let box4 = useRef();

  let box5 = useRef();

  let box6 = useRef();
  let [data1, setData1] = useState('');
  let [data2, setData2] = useState('');

  let [data3, setData3] = useState('');
  let [data4, setData4] = useState('');

  let [data5, setData5] = useState('');

  let [data6, setData6] = useState('');
  // Change border style when input is focused

  const onFocusStyle = ref => {
    ref.current?.setNativeProps({
      style: {
        borderColor: '#6C4CF1',
        borderWidth: 2,
      },
    });
  };
  // Reset border style when input loses focus

  const onBlurStyle = ref => {
    ref.current?.setNativeProps({
      style: {
        borderColor: '#676767',
        borderWidth: totalSize(0.12),
      },
    });
  };
  // Function to verify OTP

  let addotp = async () => {
    // Combine all 6 digits into one OTP string

    const otp = data1 + data2 + data3 + data4 + data5 + data6;
    // Clear previous message

    setOtpMessage('');

    if (otp.length !== 6) {
      Alert.alert('Please enter complete OTP');
      return;
    }
    try {
      // Send OTP verification request to backend

      let response = await fetch(
        'https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/verifyOTP',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        },
      );
      let data = await response.json();
      // If OTP is correct

      if (response.ok) {
        setOtpMessage(data.message);
        setOtpMessageColor('green');
        // Navigate to Reset Password screen

        navigation.navigate('Resetpassword', { email });
      } else {
        // If OTP is incorrect

        setOtpMessage(data.message);
        setOtpMessageColor('red');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong');
    }
  };
  // Function to resend OTP

  let resetotp = async () => {
    // Check if email exists

    if (!email) {
      Alert.alert('Error', 'Email not found');
      return;
    }
    // Call resend OTP API

    try {
      let response = await fetch(
        'https://lunabackend-3ae7a02e8ec4.herokuapp.com/api/auth/resendForgotOTP',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
          }),
        },
      );
      let data = await response.json();
      // Show success or error message

      if (data?.message) {
        setOtpMessage(data.message);
        setOtpMessageColor(response.ok ? 'green' : 'red');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong');
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      <View style={styles.main}>
        {/* Screen Title */}

        <Text style={styles.title}>Verification Code</Text>
        {/* Description Text */}

        <Text
          style={{
            textAlign: 'center',
            marginTop: height(1.48),
            lineHeight: totalSize(2.45),
            color: '#676767',
          }}
        >
          We have sent the verification code to your{'\n'} email address
        </Text>
        {/* OTP Input Boxes */}

        <View style={styles.otpcontainer}>
          {/* OTP Box 1 */}

          <TextInput
            ref={box1}
            keyboardType="numeric"
            maxLength={1}
            value={data1}
            style={styles.input}
            onFocus={() => onFocusStyle(box1)}
            onBlur={() => onBlurStyle(box1)}
            onChangeText={txt => {
              setData1(txt);
              if (txt.length >= 1) {
                box2.current.focus();
              }
            }}
          />
          {/* OTP Box 2 */}

          <TextInput
            ref={box2}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => onFocusStyle(box2)}
            onBlur={() => onBlurStyle(box2)}
            style={styles.input}
            value={data2}
            onChangeText={txt => {
              setData2(txt);
              if (txt.length >= 1) {
                box3.current.focus();
              } else if (txt.length < 1) {
                box1.current.focus();
              }
            }}
          />
          {/* OTP Box 3 */}

          <TextInput
            ref={box3}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => onFocusStyle(box3)}
            onBlur={() => onBlurStyle(box3)}
            style={styles.input}
            value={data3}
            onChangeText={txt => {
              setData3(txt);
              if (txt.length >= 1) {
                box4.current.focus();
              } else if (txt.length < 1) {
                box2.current.focus();
              }
            }}
          />
          {/* OTP Box 4 */}

          <TextInput
            ref={box4}
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            onFocus={() => onFocusStyle(box4)}
            onBlur={() => onBlurStyle(box4)}
            value={data4}
            onChangeText={txt => {
              setData4(txt);
              if (txt.length >= 1) {
                box5.current.focus();
              } else if (txt.length < 1) {
                box3.current.focus();
              }
            }}
          />
          {/* OTP Box 5 */}

          <TextInput
            ref={box5}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => onFocusStyle(box5)}
            onBlur={() => onBlurStyle(box5)}
            style={styles.input}
            value={data5}
            onChangeText={txt => {
              setData5(txt);
              if (txt.length >= 1) {
                box6.current.focus();
              } else if (txt.length < 1) {
                box4.current.focus();
              }
            }}
          />
          {/* OTP Box 6 */}

          <TextInput
            ref={box6}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => onFocusStyle(box6)}
            onBlur={() => onBlurStyle(box6)}
            style={styles.input}
            value={data6}
            onChangeText={txt => {
              setData6(txt);
              if (txt.length < 1) {
                box5.current.focus();
              }
            }}
          />
        </View>
        {/* Show OTP success or error message */}

        {otpMessage ? (
          <Text
            style={{
              marginTop: height(1.5),
              textAlign: 'left',
              color: otpMessageColor,
              fontSize: totalSize(1.4),
            }}
          >
            {otpMessage}
          </Text>
        ) : null}
        {/* Verify Button */}

        <TouchableOpacity style={styles.button} onPress={() => addotp()}>
          <Text style={styles.text}>Verify</Text>
        </TouchableOpacity>
        {/* Resend OTP Section */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: height(1.48),
          }}
        >
          <Text style={{ color: '#676767', lineHeight: totalSize(2.45) }}>
            Didn't get it?
          </Text>
          <TouchableOpacity onPress={resetotp}>
            <Text
              style={{
                marginLeft: width(1),
                color: 'red',
                lineHeight: totalSize(2.45),
              }}
            >
              RESEND
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otpscreen;
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
    marginTop: height(10),
    textAlign: 'center',
  },
  otpcontainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: height(4.31),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: width(10.13),
    height: width(10.13), // square box
    borderRadius: totalSize(0.98),
    borderWidth: totalSize(0.12),
    textAlign: 'center', // horizontal center
    //   textAlignVertical: 'center', // ✅ vertical center (ANDROID)
    fontSize: totalSize(2.45),
    padding: 0,
    borderColor: '#676767',
  },
  // Button style
  button: {
    width: width(84.53),
    height: height(6.78),
    backgroundColor: '#F83758',
    borderRadius: totalSize(0.67),
    justifyContent: 'center',
    marginTop: height(7.67),
  },

  // Button text style
  text: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

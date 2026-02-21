import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import Myaddress from './Myaddress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { AddAddress, RemoveAddress } from './redux/Sliceproduct/Slice';
import { SafeAreaView } from 'react-native-safe-area-context';

const Addaddress = ({ navigation }) => {
  let [city, setCity] = useState('');
  let [building, setBuilding] = useState('');
  let [pin, setPin] = useState('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      <TouchableOpacity
        style={{
          height: width(13.33),
          width: width(13.33),
          borderWidth: totalSize(0.11),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: totalSize(2.8), // ✅ 25/894.41*100
          borderColor: '#C8C8C8',
          marginLeft: width(2.67),
        }}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={30} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: height(1.23) }}>
        <View style={styles.main1}>
          <FontAwesome5 name="city" size={12} />

          {/* Username input */}
          <TextInput
            placeholder="Enter your city name   "
            value={city}
            onChangeText={txt => setCity(txt)}
            style={styles.input}
            placeholderTextColor={'#000000'}
          />
        </View>

        <View style={styles.main1}>
          <FontAwesome5 name="building" size={20} />
          {/* Username input */}

          <TextInput
            placeholder="Enter building name  "
            value={building}
            onChangeText={txt => setBuilding(txt)}
            style={styles.input}
            placeholderTextColor={'#000000'}
          />
        </View>
        <View style={styles.main1}>
          <Feather name="map-pin" size={22} />
          <TextInput
            placeholder="Enter pincode"
            placeholderTextColor={'#000000'}
            value={pin}
            onChangeText={txt => setPin(txt.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            inputMode="numeric"
            maxLength={6}
            style={[styles.input, { flex: 1 }]}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (city !== '' && building !== '' && pin !== '') {
              dispatch(
                AddAddress({ city: city, building: building, pin: pin }),
              );

              navigation.goBack(); // ✅ correct
            } else {
              alert('Please fill all fields');
            }
          }}
        >
          <Text style={styles.text}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Addaddress;
const styles = StyleSheet.create({
  input: {
    fontSize: totalSize(1.34),
    color: '#000000',
    fontFamily: 'Montserrat',
    fontWeight: '400',
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

// Import required components from React Native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// Import React
import React from 'react';

// Import responsive dimension helpers
import { width, height, totalSize } from 'react-native-dimension';

// Import Feather icons (not used here but imported)
import Feather from 'react-native-vector-icons/Feather';

// Import Redux hooks
import { useDispatch, useSelector } from 'react-redux';

// Import Redux actions
import { AddAddress, RemoveAddress } from './redux/Sliceproduct/Slice';

// Import SafeAreaView for safe screen layout
import { SafeAreaView } from 'react-native-safe-area-context';

// My Address Screen Component
const Myaddress = ({ navigation }) => {
  // Get address list from Redux store
  let Detail = useSelector(state => state.cart.addressList);

  // Dispatch function to trigger Redux actions
  let dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      {/* Header Section */}
      <View style={styles.profile}>
        {/* Screen Title - Go back on press */}
        <Text
          style={{
            fontWeight: '700',
            fontFamily: 'Montserrat',
            fontSize: totalSize(1.79),
            color: '#000000',
          }}
          onPress={() => navigation.goBack()}
        >
          My Address
        </Text>

        {/* Add Address Button */}
        <TouchableOpacity
          style={{
            borderWidth: totalSize(0.11),
            borderRadius: totalSize(0.7),
            padding: totalSize(0.5),
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#C8C8C8',
          }}
          onPress={() => navigation.navigate('Addaddress')}
        >
          <Text style={{ color: '#000000', fontSize: totalSize(1.5) }}>
            Add address
          </Text>
        </TouchableOpacity>
      </View>

     <FlatList
  data={Detail}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingVertical: height(2),
          paddingHorizontal: width(4),
          borderRadius: totalSize(1.5),
          marginVertical: height(0.8),
          elevation: 3, // subtle shadow for Android
          shadowColor: '#000', // iOS shadow
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: totalSize(1),
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: totalSize(1.8),
              fontWeight: '700',
              color: '#222',
              marginBottom: height(0.3),
            }}
          >
            City: {item.city}
          </Text>

          <Text
            style={{
              fontSize: totalSize(1.5),
              fontWeight: '600',
              color: '#555',
              marginBottom: height(0.3),
            }}
          >
            Building: {item.building}
          </Text>

          <Text
            style={{
              fontSize: totalSize(1.5),
              fontWeight: '600',
              color: '#555',
            }}
          >
            Pin: {item.pin}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#F83758',
            borderRadius: totalSize(1),
            width: width(30),
            height: height(6),
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: width(3),
          }}
          onPress={() => dispatch(() => RemoveAddress(index))}
        >
          <Text
            style={{
              fontSize: totalSize(1.4),
              color: '#fff',
              fontWeight: '600',
            }}
          >
            Delete Address
          </Text>
        </TouchableOpacity>
      </View>
    );
  }}

      />
    </SafeAreaView>
  );
};

export default Myaddress;

// Styles
const styles = StyleSheet.create({
  // Header container styling
  profile: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Space between title & button
    marginHorizontal: width(4.8),
    marginTop: height(1),
  },
});

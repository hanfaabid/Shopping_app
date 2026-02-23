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

      {/* Address List */}
      <FlatList
        data={Detail} // Address data from Redux
        keyExtractor={(item, index) => index.toString()} // Unique key
        renderItem={({ item, index }) => {
          return (
            // Single Address Item Container
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderTopWidth: totalSize(0.11),
                borderBottomWidth: totalSize(0.11),
                alignItems: 'center',
              }}
            >
              {/* Address Details */}
              <View style={{ flex: 1 }}>
                {/* City */}
                <Text
                  style={{
                    marginLeft: width(2.67),
                    fontSize: totalSize(1.34),
                    fontWeight: 'bold',
                  }}
                >
                 City: {item.city}
                </Text>

                {/* Building */}
                <Text
                  style={{
                    fontSize: totalSize(1.79),
                    marginLeft: width(2.67),
                    fontWeight: 'bold',
                  }}
                >
                 Building: {item.building}
                </Text>

                {/* PIN Code */}
                <Text
                  style={{
                    fontSize: totalSize(1.79),
                    marginLeft: width(2.67),
                    fontWeight: 'bold',
                  }}
                >
                 Pin: {item.pin}
                </Text>
              </View>

              {/* Delete Address Button */}
              <TouchableOpacity
                style={{
                  borderWidth: totalSize(0.11),
                  borderRadius: totalSize(0.9),
                  width: width(26.67),
                  height: height(6.16),
                  marginRight: width(2.67),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#C8C8C8',
                }}
                onPress={() => dispatch(()=>RemoveAddress(index))}
              >
                <Text style={{ fontSize: totalSize(1.34) }}>
                  Delete address
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

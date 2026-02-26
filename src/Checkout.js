import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const Checkout = () => {
  // Get cart items from Redux
  const collectdata = useSelector(state => state.cart.cartItemList);

  // Get saved addresses from Redux
  let Detail = useSelector(state => state.cart.addressList);

  // Local state to store selected address
  let [address, setAddress] = useState('');

  // Function to calculate total amount of cart items
  let Amount = () => {
    let total = 0;
    collectdata.forEach(item => {
      total += item.price; // Sum up price of each item
    });
    return total; // Return total amount
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      <FlatList
        data={collectdata} // Data for FlatList
        showsVerticalScrollIndicator={false} // Hide scrollbar
        keyExtractor={(item, index) => index.toString()} // Unique key
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Product Image */}
            <Image
              source={item.image}
              resizeMode="contain"
              style={{
                width: '100%',
                height: height(25),
                borderRadius: totalSize(0.89),
              }}
            />

            {/* Product Title */}
            <Text style={styles.title}>{item.title}</Text>

            {/* Product Description */}
            <Text numberOfLines={2} style={styles.des}>
              {item.des}
            </Text>

            {/* Product Price */}
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        )}
        // Footer component contains Total and Address section
      />

      {/* 🔥 Bottom Summary Section */}
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.subtotal}>Subtotal</Text>
          <Text style={styles.subtotal}> ₹{Amount()}</Text>
        </View>
        <View style={styles.divider} />

        {/* Delivery Address Header */}
        <Text
          style={{
            alignSelf: 'center',
            fontSize: totalSize(2),
            fontWeight: 'bold',
          }}
        >
          Delivery Address
        </Text>
        {/* Render list of addresses */}
        {Detail.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: height(12.73),
              backgroundColor: '#f6f1f2',
              borderRadius: totalSize(2),
              paddingHorizontal: height(2),
              marginBottom:height(1)
            }}
          >
            <View>
              {/* Address Details */}
              <Text
                style={{
                  fontSize: totalSize(1.64),
                  fontWeight: 'bold',
                  color: '#000000',
                  marginLeft: width(2),
                }}
              >
                Address :
              </Text>
              <Text
                style={{
                  fontSize: totalSize(1.34),
                  fontWeight: 'bold',
                  color: '#000000',
                  marginLeft: width(2),
                }}
              >
                City: {item.city}
              </Text>
              <Text
                style={{
                  fontSize: totalSize(1.79),
                  fontWeight: 'bold',
                  color: '#000000',
                  marginLeft: width(2),
                }}
              >
                Building: {item.building}
              </Text>
              <Text
                style={{
                  fontSize: totalSize(1.79),
                  fontWeight: 'bold',
                  color: '#000000',
                  marginLeft: width(2),
                }}
              >
                Pin: {item.pin}
              </Text>
            </View>

            {/* Button to select this address */}
            <TouchableOpacity
              style={{
                height: height(4.93),
                width: width(26.67),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F83758',
                borderRadius: totalSize(1),
              }}
              onPress={() =>
                setAddress(
                  `City: ${item.city}, Building: ${item.building}, Pin: ${item.pin}`,
                )
              }
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: totalSize(1.5),
                }}
              >
                Select Address
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        {/* Display selected address or message if none */}
        {address !== '' && (
          <View style={styles.selectedAddressCard}>
            <Text style={styles.selectedTitle}>Selected Address</Text>

            <Text style={styles.selectedText}>{address}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: height(3.69),
    backgroundColor: 'orange',
  },
  card: {
    backgroundColor: '#FFFFFF', // Orange se white karo
    marginBottom: height(1.97), // Space between cards
    borderRadius: totalSize(0.89),
    marginHorizontal: width(3),
    elevation: 10, // Android shadow
    width: width(67),
  },

  img5: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: totalSize(1.79),
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: 'red',
    marginTop: height(0.99),
    marginLeft: width(2.13),
    color: '#000000',
  },
  des: {
    lineHeight: totalSize(1.79),
    fontSize: width(2.67),
    fontWeight: '400',
    fontFamily: 'Montserrat',
    marginLeft: width(2.4),
    color: '#000000',
    marginRight: width(2.13),
  },
  price: {
    lineHeight: totalSize(1.79),
    marginLeft: width(2.13),
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontSize: totalSize(1.34),
    color: '#000000',
  },

 bottomContainer: {
  backgroundColor: '#FD6E87',
  padding: width(5), // responsive padding
  borderTopLeftRadius: totalSize(4),
  borderTopRightRadius: totalSize(4),
  elevation: 15, // Android shadow
  justifyContent: 'flex-end',
},

row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: height(1),
},

subtotal: {
  fontSize: totalSize(2), // scalable font size
  fontWeight: 'bold',
},

divider: {
  height: totalSize(0.2),
  backgroundColor: '#ccc',
  marginVertical: height(2),
},

button: {
  marginTop: height(2),
  backgroundColor: '#000',
  paddingVertical: height(2),
  borderRadius: totalSize(3),
  alignItems: 'center',
},

buttonText: {
  color: '#fff',
  fontSize: totalSize(1.8),
  fontWeight: '600',
},

selectedAddressCard: {
  backgroundColor: '#F3F3F3',
  padding: width(4),
  borderRadius: totalSize(2),
  marginTop: height(2),
  borderWidth: totalSize(0.2),
  borderColor: '#E0E0E0',
},

selectedTitle: {
  fontSize: totalSize(1.6),
  fontWeight: '600',
  color: '#888',
  marginBottom: height(0.5),
},

selectedText: {
  fontSize: totalSize(1.8),
  fontWeight: '600',
  color: '#000',
},
});

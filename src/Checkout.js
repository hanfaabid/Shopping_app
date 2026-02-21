import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
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
        ListFooterComponent={
          <>
            {/* Total Section */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: width(2.67),
                width: '100%', // Full width of screen
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Total</Text>
              <Text
                style={{
                  color: '#F83758',
                  fontWeight: 'bold',
                  fontSize: totalSize(1.79),
                }}
              >
                ₹{Amount()} {/* Display total amount */}
              </Text>
            </View>

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
                  width: width(100), // Full width
                  height: height(12.73),
                  backgroundColor: 'pink',
                  borderRadius: totalSize(2),
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
                      `City: ${item.city}, Building: ${item.building}, Pin: ${item.pin}`
                    )
                  }
                >
                  <Text>Select Address</Text>
                </TouchableOpacity>
              </View>
              
            ))}
              {/* Display selected address or message if none */}
      <Text style={{ textAlign: 'center', margin: totalSize(2), color: '#000000' }}>
        {address === '' ? 'Please select address' : address}
      </Text>
          </>
        }
        
      />

    
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
});

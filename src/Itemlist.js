import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart, Removefromcart } from './redux/Sliceproduct/Slice';
import { SafeAreaView } from 'react-native-safe-area-context';

const Itemlist = ({navigation}) => {
  // Get all items currently in the cart from Redux store
  const collectdata = useSelector(state => state.cart.cartItemList);
  const dispatch = useDispatch();

  // Function to check if a specific item is already in the cart
  const isItemInCart = id => {
    return collectdata.some(item => item.id === id);
  };

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: 'pink', alignItems: 'center' }}>    
     
      {/* Check if cart has items */}
      {collectdata.length>0 ? (
        // Display list of items using FlatList
        <FlatList
          data={collectdata} // Data source
          showsVerticalScrollIndicator={false} // Hide vertical scrollbar
          keyExtractor={(item, index) => index.toString()} // Unique key for each item
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              {/* Item image */}
              <Image
                source={item.image}
                resizeMode="contain" // Ensures image maintains aspect ratio
                style={{
                  width: '100%',
                  height: height(25),
                  borderRadius: totalSize(0.89),
                }}
              />

              {/* Item title */}
              <Text style={styles.title}>{item.title}</Text>

              {/* Item description (max 2 lines) */}
              <Text numberOfLines={2} style={styles.des}>
                {item.des}
              </Text>

              {/* Item price */}
              <Text style={styles.price}>₹{item.price}</Text>

              {/* Add/Remove button */}
              <TouchableOpacity
                onPress={() =>
                  isItemInCart(item.id)
                    ? dispatch(Removefromcart(item.id)) // Remove item if already in cart
                    : dispatch(Addtocart(item)) // Add item to cart if not in cart
                }
                style={{
                  backgroundColor: isItemInCart(item.id) ? 'red' : 'green',
                  margin: 8,
                  padding: 6,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  {isItemInCart(item.id) ? 'Remove from Cart' : 'Add to Cart'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        // Show message if cart is empty
        <View style={{flex:1,justifyContent:'center'}}>
          <Text>There is no item</Text>
        </View>
      )}

      {/* Checkout button, only show if there are items in cart */}
      {collectdata.length>0 ? (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Checkout')}>
          <Text style={styles.text}>Checkout</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView> 
  );
};

export default Itemlist;

// Stylesheet for component
const styles = StyleSheet.create({
  // Card container for each item
  card: {
    backgroundColor: '#FFFFFF', // White background for card
    marginBottom: height(1.97), // Space between cards
    borderRadius: totalSize(0.89), // Rounded corners
    marginHorizontal: width(3), // Horizontal margin around card
    elevation: 10, // Shadow for Android
    width: width(67), // Card width as percentage of screen
  },

  // Image resize style (not currently used in main code)
  img5: {
    resizeMode: 'contain',
  },

  // Item title text
  title: {
    fontSize: totalSize(1.79), // Font size relative to screen
    fontFamily: 'Montserrat',
    fontWeight: 500,
    marginTop: height(0.99),
    marginLeft: width(2.13),
    color: '#000000', // Text color black
  },

  // Item description text
  des: {
    lineHeight: totalSize(1.79),
    fontSize: width(2.67),
    fontWeight: '400',
    fontFamily: 'Montserrat',
    marginLeft: width(2.4),
    color: '#000000',
    marginRight: width(2.13),
  },

  // Item price text
  price: {
    lineHeight: totalSize(1.79),
    marginLeft: width(2.13),
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontSize: totalSize(1.34),
    color: '#000000',
  },

  // Checkout button container
  button: {
    width: width(84.53),
    height: height(6.78),
    backgroundColor: '#F83758', // Pinkish-red
    borderRadius: totalSize(0.67),
    justifyContent: 'center',
    marginBottom: height(1.67),
  },

  // Checkout button text
  text: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

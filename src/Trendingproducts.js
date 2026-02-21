
// Import required components from React Native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

// Import responsive dimension helpers
import { width, height, totalSize } from 'react-native-dimension';

// Import React and useState hook
import React, { useState } from 'react';

// Import Masonry layout list
import MasonryList from '@react-native-seoul/masonry-list';

// Import Redux hooks
import { useSelector, useDispatch } from 'react-redux';

// Import cart actions
import { Addtocart, Removefromcart } from './redux/Sliceproduct/Slice';

// Import SafeAreaView for safe screen rendering
import { SafeAreaView } from 'react-native-safe-area-context';

const Trendingproducts = () => {
  // Get cart data from Redux store
  const userdata = useSelector(state => state.cart.cartItemList);

  // Initialize dispatch function
  const dispatch = useDispatch();

  // Function to check if item already exists in cart
  const isItemInCart = id => {
    return userdata.some(item => item.id === id);
  };

  // State for search input
  let [search, setSearch] = useState('');

  // Static product list data
  let products = [
    {
      id: 1,
      image: require('./assets/coot.png'),
      title: 'Black Winter...',
      des: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 499,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
    // Other product objects...
     {
      id: 2,
      image: require('./assets/shirt.png'),
      title: 'Mens Starry',
      des: `Mens Starry Sky Printed Shirt                                                                                                                                                                                                       
100% Cotton Fabric`,
      price: 399,
      imgheight: height(24.13),
      ratingCount: 56890,
    },
    {
      id: 3,
      image: require('./assets/stylish.png'),
      title: 'Black Dress',
      des: `Solid Black Dress for Women, Sexy Chain Shorts Ladi...`,
      price: 2000,
      imgheight: height(24.13),
      ratingCount: 56890,
      height: height(37.56), // 305/812 * 100 = 37.56%
    },
    {
      id: 4,
      image: require('./assets/frock.png'),
      title: 'Pink Embroide...',
      des: `EARTHEN Rose Pink Embroidered Tiered Max...`,
      price: 1900,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
    {
      id: 5,
      image: require('./assets/frock1.png'),
      title: 'Flare Dress',
      des: `Antheaa Black & Rust Orange Floral Print Tiered Midi F...`,
      price: 1990,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
    {
      id: 6,
      image: require('./assets/ladi.png'),
      title: 'Flare Dress',
      des: `Blue cotton denim dress Look 2 Printed cotton dr...`,
      price: 999,
      imgheight: height(24.13),
      ratingCount: 56890,
    },
    {
      id: 7,
      image: require('./assets/sho.png'),
      title: 'Flare Dress',
      des: `The classic Air Jordan 12 to create a shoe that's fres...`,
      price: 4999,
      imgheight: height(24.14),
      ratingCount: 56890,
    },
    {
      id: 8,
      image: require('./assets/mobile.png'),
      title: 'Flare Dress',
      des: `6 GB RAM | 64 GB ROM | Expandable Upto 256...`,
      price: 3499,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
    {
      id: 9,
      image: require('./assets/pack.png'),
      title: 'Flare Dress',
      des: `Sony PS4 Console, 1TB Slim with 3 Games: Gran Turis...`,
      price: 1999,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
    {
      id: 10,
      image: require('./assets/jk.png'),
      title: 'Flare Dress',
      des: `This warm and comfortable jacket is great for learni...`,
      price: 2999,
      imgheight: height(24.14),
      ratingCount: 56890,
    },
    {
      id: 11,
      image: require('./assets/camera.png'),
      title: 'Flare Dress',
      des: `D7200 Digital Camera (Nikon) In New Area...`,
      price: 26999,
      imgheight: height(24.14),
      ratingCount: 56890,
    },
    {
      id: 12,
      image: require('./assets/sh.png'),
      title: 'Flare Dress',
      des: `George Walker Derby Brown Formal Shoes`,
      price: 999,
      imgheight: height(16.75),
      ratingCount: 56890,
    },
  ];

  // Function to render each product card
  let renderdata = ({ item }) => (
    <View style={styles.card}>
      {/* Product Image */}
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: item.imgheight,
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

      {/* Add / Remove from Cart Button */}
      <TouchableOpacity
        onPress={() =>
          isItemInCart(item.id)
            ? dispatch(Removefromcart(item.id))
            : dispatch(Addtocart(item))
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
  );

  return (
    // SafeAreaView ensures content stays within safe screen boundaries
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      {/* Top Navigation Bar */}
      <View style={styles.nav}>
        <Image source={require('./assets/Vector.png')} style={styles.img} />
        <Image source={require('./assets/logo.png')} style={styles.img1} />
        <Image source={require('./assets/profile.png')} style={styles.img2} />
      </View>

      {/* Main Content Container */}
      <View style={{ flex: 1 }}>
        {/* Masonry Grid Product List */}
        <MasonryList
          data={products}
          // Header section above product grid
          ListHeaderComponent={
            <View style={styles.main}>
              {/* Search Input Section */}
              <View style={styles.input1}>
                <Image
                  source={require('./assets/search.png')}
                  style={styles.img3}
                />

                <TextInput
                  value={search}
                  placeholder="Search any Product.."
                  onChangeText={text => setSearch(text)}
                  style={styles.input}
                />

                <Image
                  source={require('./assets/speaker.png')}
                  style={styles.img4}
                />
              </View>

              {/* Sort and Filter Buttons */}
              <View style={styles.btn}>
                <Text style={styles.Text}>All Featured</Text>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.btnText}>Sort</Text>
                  <Image
                    source={require('./assets/arrows.png')}
                    style={styles.img5}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.btnText}>Filter</Text>
                  <Image
                    source={require('./assets/filter.png')}
                    style={styles.img6}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
          // Unique key for each item
          keyExtractor={item => item.id.toString()}
          // Hide vertical scroll indicator
          showsVerticalScrollIndicator={false}
          // Render each product
          renderItem={renderdata}
          // Horizontal padding for grid
          contentContainerStyle={{
            paddingHorizontal: width(2),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Trendingproducts;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    width: width(100),
    height: height(6.9),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width(4.27),

    paddingVertical: height(0.99),
  },
  img: {
    height: width(3.2),
    resizeMode: 'contain',

    width: width(4.8),
  },
  img1: {
    height: width(8.27),
    width: width(29.6),
    resizeMode: 'contain',
  },
  img2: {
    height: width(10.67),
    width: width(10.67),
    resizeMode: 'contain',
  },
  input1: {
    width: width(91.47),
    height: height(4.93),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: totalSize(0.67),
    paddingHorizontal: width(4.27),
    marginTop: height(1.97),
  },
  input: {
    color: '#BBBBBB',
    fontSize: totalSize(1.57),
    fontWeight: '400',
    flex: 1,
    marginLeft: width(2.67),
    fontFamily: 'Montserrat',
  },
  img3: {
    width: width(4),
    height: width(4),
  },
  img4: {
    width: width(3.73),
    height: height(2.34),
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(1.97),
    alignItems: 'center',
    marginBottom: height(1.97),
  },

  btnText: {
    color: 'black', // agar background light hai to black, agar dark hai to white use karo
    fontSize: totalSize(1.8),
    fontWeight: '600',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  Text: {
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontSize: totalSize(2.01),
    color: '#000000',
    flex: 1,
    marginLeft: width(2.2),
  },

  card: {
    backgroundColor: '#FFFFFF', // Orange se white karo
    marginBottom: height(1.97), // Space between cards
    borderRadius: totalSize(0.89),
    marginHorizontal: width(2.13),
    elevation: 10, // Android shadow
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
  button: {
    width: width(16.27),
    height: height(2.96),
    backgroundColor: '#FFFFFF',
    borderRadius: totalSize(0.67),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: width(3.2),
  },
  button1: {
    width: width(17.87),
    height: height(2.96),
    backgroundColor: '#FFFFFF',
    borderRadius: totalSize(0.67),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: width(2.2),
  },
  img5: {
    width: width(4.27), // 16/375*100
    height: height(1.97), // 16/812*100
  },
  img6: {
    width: width(4.27), // 16/375*100
    height: height(1.97), // 16/812*100
  },
});

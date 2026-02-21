import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = () => {
  // State to store search input value
  let [search, setSearch] = useState('');

  // Categories list with images
  const categories = [
    { name: 'Beauty', image: require('./assets/beauty.png') },
    { name: 'Fashion', image: require('./assets/fashion.png') },
    { name: 'Kids', image: require('./assets/kids.png') },
    { name: 'Mens', image: require('./assets/mens.png') },
    { name: 'Womens', image: require('./assets/womens.png') },
  ];

  // List of products with all details
  let products = [
    {
      id: 1,
      image: require('./assets/girl.png'),
      title: 'Women Printed Kurta',
      des: 'Neque porro quisquam est qui dolorem ipsum quia',
      price: 1500,
      oldprice: 2499,
      discount: 40,
      ratingCount: 56890,
    },
    {
      id: 2,
      image: require('./assets/girl.png'),
      title: 'Women Printed Kurta',
      des: `Neque porro quisquam est qui ${'/n'} dolorem ipsum quia`,
      price: 1500,
      oldprice: 2499,
      discount: 40,
      ratingCount: 56890,
    },
  ];

  // Function to render each product in FlatList
  const imgdata = ({ item }) => {
    return (
      <View style={styles.card1}>
        <Image source={item.image} style={styles.bimage} /> {/* Product image */}
        <Text style={styles.title}>{item.title}</Text> {/* Product title */}
        <Text style={styles.des}>{item.des}</Text> {/* Product description */}
        <Text style={styles.price}>₹{item.price}</Text> {/* Current price */}
        <View style={styles.prices}>
          <Text style={styles.oldprice}>₹{item.oldprice}</Text> {/* Old price */}
          <Text style={styles.discount}>{item.discount}%Off</Text> {/* Discount */}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>
      {/* Top Navigation Bar */}
      <View style={styles.nav}>
        <Image source={require('./assets/Vector.png')} style={styles.img} /> {/* Menu icon */}
        <Image source={require('./assets/logo.png')} style={styles.img1} /> {/* Logo */}
        <Image source={require('./assets/profile.png')} style={styles.img2} /> {/* Profile icon */}
      </View>

      {/* Main content scrollable area */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>

          {/* Search Bar */}
          <View style={styles.input1}>
            <Image source={require('./assets/search.png')} style={styles.img3} /> {/* Search icon */}
            <TextInput
              value={search}
              placeholder="Search any Product.."
              onChangeText={(txt) => setSearch(txt)} // Update search state
              style={styles.input}
            />
            <Image source={require('./assets/speaker.png')} style={styles.img4} /> {/* Voice search */}
          </View>

          {/* Featured products heading with Sort and Filter buttons */}
          <View style={styles.btn}>
            <Text style={styles.Text}>All Featured</Text>

            {/* Sort Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Sort</Text>
              <Image source={require('./assets/arrows.png')} style={styles.img5} />
            </TouchableOpacity>

            {/* Filter Button */}
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.btnText}>Filter</Text>
              <Image source={require('./assets/filter.png')} style={styles.img6} />
            </TouchableOpacity>
          </View>

          {/* Categories Icons Row */}
          <View style={styles.container}>
            {categories.map((data, index) => (
              <TouchableOpacity key={index} style={styles.icon}>
                <Image source={data.image} style={styles.imgs} />
                <Text style={styles.imgstxt}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Promotional Banner with "Shop Now" */}
          <ImageBackground
            source={require('./assets/background.png')}
            style={styles.bc}
            imageStyle={styles.bgimage}
          >
            <Text style={styles.offertxt}>50-40% OFF</Text>
            <Text style={styles.offertxt1}>
              Now in (product){'\n'} All colours
            </Text>
            <TouchableOpacity style={styles.imgbtn}>
              <Text style={styles.imgtext}>Shop Now</Text>
              <Image source={require('./assets/Arrow.png')} style={styles.imgs1} />
            </TouchableOpacity>
          </ImageBackground>

          {/* Deal of the Day section with timer */}
          <View style={styles.btncontainer}>
            <View>
              <Text style={styles.deal}>Deal of the Day</Text>
              <View style={styles.timercontainer}>
                <Image source={require('./assets/timer.png')} style={styles.timer} />
                <Text style={styles.remain}>22h 55m 20s remaining</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.imgbtn1}>
              <Text style={styles.imgtext}>Shop Now</Text>
              <Image source={require('./assets/Arrow.png')} style={styles.imgs1} />
            </TouchableOpacity>
          </View>

          {/* Horizontal FlatList of products */}
          <View style={{ backgroundColor: '#FFFFFF', marginTop: height(1.97) }}>
            <FlatList
              data={products}
              keyExtractor={(item, id) => id.toString()}
              renderItem={imgdata}
              horizontal={true} // Scroll horizontally
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Special Offers section with text and image */}
          <View style={styles.offerContainer}>
            <Image source={require('./assets/offer.png')} style={styles.offer} />
            <View style={styles.special}>
              <View style={styles.omgcontainer}>
                <Text style={{
                    fontSize: totalSize(1.76),
                    fontWeight: '500',
                    fontFamily: 'Montserrat',
                    color: '#000000',
                  }}>
                  Special Offers
                </Text>
                <Image source={require('./assets/mog.png')} style={styles.mog} />
              </View>
              <Text style={{
                  fontSize: totalSize(1.32),
                  fontWeight: '300',
                  fontFamily: 'Montserrat',
                  color: '#000000',
                }}>
                We make sure you get the{'\n'} offer you need at best prices
              </Text>
            </View>
          </View>

          {/* Promo section with shoes */}
          <View style={styles.imgContainer}>
            <View style={styles.imgContainer1}>
              <Image source={require('./assets/stick.png')} style={styles.stick} />
              <Image source={require('./assets/dots.png')} style={styles.dots} />
              <Image source={require('./assets/sandel.png')} style={styles.sandel} />
            </View>
            <View style={styles.txt1}>
              <Text style={styles.flat}>Flat and Heels</Text>
              <Text style={styles.stand}>Stand a chance to get rewarded</Text>
              <TouchableOpacity style={styles.imgbtn2}>
                <Text style={styles.imgtext1}>Visit now </Text>
                <Image source={require('./assets/Arrow.png')} style={styles.imgs1} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Trending Products section with last date */}
          <View style={styles.btncontainer1}>
            <View>
              <Text style={styles.deal}>Trending Products</Text>
              <View style={styles.timercontainer}>
                <Image source={require('./assets/cliender.png')} style={styles.timer1} />
                <Text style={styles.remain}>Last Date 29/02/22</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.imgbtn1}>
              <Text style={styles.imgtext}>View all</Text>
              <Image source={require('./assets/Arrow.png')} style={styles.imgs1} />
            </TouchableOpacity>
          </View>

          {/* Hot Section / New Arrivals */}
          <View style={styles.hotContainer}>
            <Image source={require('./assets/hot.png')} style={styles.hots} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{
                    fontSize: totalSize(2.46),
                    fontWeight: '500',
                    fontFamily: 'Montserrat',
                    marginLeft: width(2.13),
                    color: '#000000',
                  }}>
                  New Arrivals
                </Text>
                <Text style={{
                    fontSize: totalSize(1.97),
                    fontFamily: 'Montserrat',
                    marginLeft: width(2.13),
                    fontWeight: '400',
                    color: '#000000',
                  }}>
                  Summer’ 25 Collections
                </Text>
              </View>
              <View style={{ marginRight: width(3.2) }}>
                <TouchableOpacity style={styles.imgbtn3}>
                  <Text style={styles.imgtext1}>Visit now </Text>
                  <Image source={require('./assets/Arrow.png')} style={styles.imgs1} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Homepage;


const styles = StyleSheet.create({
 
  main: {
    paddingHorizontal: width(4.27),
    flex: 1,
    backgroundColor: '#f9f1f1',
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
  },
  button: {
    width: width(16.27),
    height: height(2.96),
    backgroundColor: '#FFFFFF',
    borderRadius: totalSize(0.67),
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

  },
  button1: {
    width: width(17.87),
    height: height(2.96),
    backgroundColor: '#FFFFFF',
    borderRadius: totalSize(0.67),
    marginLeft: width(3.2),
   flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

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
    marginLeft: width(3.6),
    color: '#000000',
    flex: 1,
  },
  container: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: height(10.71),
  },
  imgs: {
    height: height(6.16), // 50px height from Figma
    width: width(13.33), // 50px width from Figma
    resizeMode: 'contain',
  },
  icon: {
    alignItems: 'center',
  },
  bc: {
    width: width(91.47),
    height: height(23.28),
    borderRadius: totalSize(3.2),
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    paddingLeft: width(3.73),
    paddingBottom: height(4.93),
    marginTop: height(1.97),
  },
  bgimage: {
    resizeMode: 'cover',
    borderRadius: totalSize(3.2),
  },
  imgbtn: {
    width: width(26.67),
    height: height(3.94),
    alignItems: 'center', // 👈 horizontal center
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: totalSize(0.67),
    borderColor: '#FFFFFF',
  },
  imgs1: {
    width: width(4.27), // 16px ✅
    height: height(1.97), // 16px ✅
    resizeMode: 'contain',
  },
  offertxt: {
    fontSize: totalSize(2.2), // 20px ✅
    marginBottom: height(0.99), // 8px ✅
    color: '#FFFFFF',
  },
  offertxt1: {
    fontSize: totalSize(1.32),
    lineHeight: totalSize(2),
    color: '#FFFFFF',
    marginBottom: height(1.48),
  },
  imgtext: {
    fontSize: totalSize(1.32),
    fontWeight: '600',
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    marginRight: width(1.33),
  },
  btncontainer: {
    width: width(91.47), // 343px ✅
    height: height(7.39), // 60px ✅
    backgroundColor: '#4392F9',
    marginTop: height(1.97), // 16px ✅
    justifyContent: 'space-between',
    borderRadius: totalSize(0.88), // ≈ 8px ✅
    flexDirection: 'row',
    paddingRight: width(3.2), // 12px ✅
    paddingLeft: width(2.13), // 8px ✅
    alignItems: 'center',
  },
  timer: {
    width: width(3.47), // 13px ✅
    height: height(1.6), // 13px ✅
    marginRight: width(1.07),
    resizeMode: 'contain',
  },
  timercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deal: {
    fontSize: totalSize(1.76), // 16px
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    marginBottom: height(0.99), // 8px ✅
  },
  remain: {
    fontSize: totalSize(1.32), // ≈ 12px ✅
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  imgbtn1: {
    width: width(23.73), // 89px ✅
    height: height(3.45), // 28px ✅
    alignItems: 'center', // 👈 horizontal center
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderRadius: totalSize(0.44), // ≈ 4px ✅
  },

  card1: {
    width: width(45.33), // 170px ✅
    height: height(29.68), // 241px ✅
    backgroundColor: '#FFFFFF',

    marginRight: width(3.2), // 12px ✅

    borderRadius: totalSize(0.67), // ≈ 6px ✅
  },
  bimage: {
    width: width(45.33), // 170px ✅
    height: height(15.27), // 124px ✅
    borderRadius: totalSize(0.67), // ≈ 6px ✅
  },
  title: {
    fontSize: totalSize(1.32), // 12px ✅
    marginTop: height(0.99), // 8px ✅
    color: '#000000',
    fontFamily: 'Montserrat',
    fontWeight: '500',

    lineHeight: totalSize(1.76), // 16px ✅

    marginLeft: width(1.07), // 4px ✅
  },
  des: {
    fontSize: totalSize(1.32), // 12px ✅
    lineHeight: totalSize(1.76), // 16px ✅
    marginLeft: width(1.07), // 4px ✅
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  price: {
    fontSize: totalSize(1.32), // 12px
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginLeft: width(1.07), // 4px ✅
    color: '#000000',
  },
  prices: {
    flexDirection: 'row',
    marginLeft: width(1.07), // 4px
  },
  oldprice: {
    fontSize: totalSize(1.1), // 10px
    color: '#808488',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: totalSize(1.1), // 10px
    marginLeft: width(1.07), // 4px

    color: '#FE735C',
  },
  offerContainer: {
    width: width(91.47), // 343px ✅
    height: height(10.34), // 84px ✅
    backgroundColor: '#FFFFFF',
    marginTop: height(1.97), // 16px
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width(2.13), // 8px ✅
  },
  offer: {
    width: width(20), // 75px ✅
    height: height(7.39), // 60px ✅
    resizeMode: 'contain',
  },
  special: {
    marginLeft: width(6.4), // 24px ✅
  },
  mog: {
    width: width(5.33), // 20px ✅
    height: height(2.46), // 20px ✅
    marginLeft: width(2),
    resizeMode: 'contain',
  },
  omgcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    width: width(91.47), // 343px ✅
    height: height(21.18), // 172px ✅
    backgroundColor: '#E7E7EB4D',
    marginTop: height(2.96), // 24px ✅
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stick: {
    width: width(2.93), // 11px ✅
    height: height(21.06), // 171px ✅
  },
  dots: {
    position: 'absolute',
    top: height(1), // thora neeche
    width: width(20.53), // 77px ✅
    height: height(19.21), // 156px ✅
    justifyContent: 'flex-start',
  },
  imgContainer1: {
    height: height(21.18), // 172px ✅
    position: 'relative', // ⭐ MOST IMPORTANT
    width: width(40), // 150px ✅
  },
  sandel: {
    width: width(38.4), // 144px ✅
    height: height(13.3), // 108px ✅
    position: 'absolute',
    marginLeft: width(3),
    marginTop: height(3.55), // 24px ✅
  },
  flat: {
    fontSize: totalSize(1.76), // ≈ 16px ✅
    fontWeight: '500',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    lineHeight: totalSize(2.2), // 20px
    color: '#232327',
  },
  stand: {
    fontSize: totalSize(1.1), // 10px
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Montserrat',
    marginBottom: height(1.23), // 10px
    color: '#232327',
  },
  txt1: {
    height: height(8.99), // 73px ✅
    marginRight: width(3.2), // 12px
  },
  imgbtn2: {
    width: width(24.53), // 92px
    height: height(2.96), // 24px
    backgroundColor: '#F83758',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: totalSize(0.44), // ≈ 4px ✅
    marginLeft: 'auto',
  },
  imgtext1: {
    fontSize: totalSize(1.32), // ≈ 12px ✅
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginRight: width(1.33),
  },
  imgs2: {
    width: width(4.27), // 16px ✅
    height: height(1.97), // 16px ✅
    resizeMode: 'contain',
  },
  hotContainer: {
    width: width(91.47), // 343px se responsive
    height: height(33.25), // 270px se responsive
    backgroundColor: '#FFFFFF',
    marginTop: height(1.97), // 16/812 * 100 = 1.97%
  },
  hots: {
    width: width(91.47), // 343px
    height: height(25.12), // 204px
  },
  imgbtn3: {
    width: width(23.73), // 89/375 * 100 = 23.73%
    height: height(3.45), // 28/812 * 100 = 3.45%
    backgroundColor: '#F83758',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: totalSize(0.44), // ≈ 4px ✅
  },
  btncontainer1: {
    width: width(91.47), // 343px ✅
    height: height(7.39), // 60px ✅
    backgroundColor: '#FD6E87',
    marginTop: height(1.97), // 16px ✅
    justifyContent: 'space-between',
    borderRadius: totalSize(0.88), // ≈ 8px ✅
    flexDirection: 'row',
    paddingRight: width(3.2), // 12px ✅
    paddingLeft: width(2.13), // 8px ✅
    alignItems: 'center',
  },
  timer1: {
    width: width(4.27), // 16/375*100
    height: width(4.27), // Same - square ke liye width() use karo
    marginRight: width(1.07),
    resizeMode: 'contain',
  },
  img5:{
    width: width(4.27),    // 16/375*100
height: height(1.97),  // 16/812*100
  },
  img6:{
    width: width(4.27),    // 16/375*100
height: height(1.97),  // 16/812*100
  }
});

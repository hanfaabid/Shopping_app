// Import required components from React Native
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import React
import React from 'react';

// Import responsive dimension helpers
import { width, height, totalSize } from 'react-native-dimension';

// Import Feather icon library
import Feather from 'react-native-vector-icons/Feather';

// Import SafeAreaView to handle safe screen areas
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }) => {
  return (

    // SafeAreaView ensures content does not overlap with status bar or notch
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f1f1' }}>

      {/* Top header section (Profile title + Settings icon) */}
      <View style={styles.profile}>
        <Text
          style={{
            fontWeight: '700',
            fontFamily: 'Montserrat',
            fontSize: totalSize(1.79),
          }}
        >
          Profile
        </Text>

        {/* Settings button */}
        <TouchableOpacity>
          <Feather name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile image section */}
      <View style={{ alignSelf: 'center', marginTop: height(5) }}>
        <Image
          source={require('./assets/profile.png')}
          style={styles.img}
        />
      </View>

      {/* Menu options section */}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

        {/* My Address option */}
        <TouchableOpacity
          style={{
            width: '90%',
            height: height(6.16),
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: height(1.23),
            justifyContent: 'center',
          }}
        >
          {/* Navigate to Myaddress screen on press */}
          <Text
            style={styles.txt}
            onPress={() => navigation.navigate('Myaddress')}
          >
            My Address
          </Text>
        </TouchableOpacity>

        {/* My Order option */}
        <TouchableOpacity
          style={{
            width: '90%',
            height: height(6.16),
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: height(1.23),
            justifyContent: 'center',
          }}
        >
          <Text style={styles.txt}>My Order</Text>
        </TouchableOpacity>

        {/* Offers option */}
        <TouchableOpacity
          style={{
            width: '90%',
            height: height(6.16),
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            marginTop: height(1.23),
            justifyContent: 'center',
          }}
        >
          <Text style={styles.txt}>Offers</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Profile;

// Stylesheet
const styles = StyleSheet.create({

  // Header container styling
  profile: {
    flexDirection: 'row',              // Align title and icon horizontally
    justifyContent: 'space-between',   // Space between title and icon
    marginHorizontal: width(4.8),      // Horizontal margin
  },

  // Profile image styling
  img: {
    width: width(25.6),
    height: width(25.6),  // Square shape (same width & height)
  },

  // Menu text styling
  txt: {
    fontSize: totalSize(1.34),
    fontWeight: '400',
    fontFamily: 'Montserrat',
    color: '#000000',
  },
});

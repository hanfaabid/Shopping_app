import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Importing screen components
import Homepage from './Homepage'
import Trendingproducts from './Trendingproducts'
import Shoppage from './Shoppage'
import Profile from './Profile'
import Itemlist from './Itemlist'

// Importing icon library
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

// Importing dimension helpers
import { width, height, totalSize } from 'react-native-dimension';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Function to get icon for each tab
const getTabBarIcon = (routename, focused, size, color) => {
  let iconname;
  if (routename === 'Home') {
    iconname = 'home'; // Home icon
  } else if (routename === 'Wishlist') {
    iconname = 'heart'; // Wishlist icon
  } else if (routename === 'shopping-cart') {
    iconname = 'shopping-cart'; // Shopping cart icon
  } else if (routename === 'Setting') {
    iconname = 'settings'; // Settings icon
  }

  // Return the icon component
  return <Feather name={iconname} size={size} color={color} />;
}

const BottomNavigator = () => {
  // Get the number of items in the cart from Redux state
  const cartCount = useSelector(
    state => state.cart.cartItemList.length
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Set icon for each tab
        tabBarIcon: ({ focused, size, color }) =>
          getTabBarIcon(route.name, focused, size, color),
        tabBarActiveTintColor: 'red', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarStyle: {
          width: width(100),    // Full width
          height: height(9.36), // Height relative to screen
          backgroundColor: '#FFFFFF', // Tab bar background
        },
      })}
    >
      {/* Home tab */}
      <Tab.Screen
        name='Home'
        component={Homepage}
        options={{ headerShown: false }} // Hide header
      />

      {/* Wishlist tab */}
      <Tab.Screen
        name='Wishlist'
        component={Trendingproducts}
        options={{ headerShown: false }}
      />

      {/* Shopping cart tab */}
      <Tab.Screen
        name='shopping-cart'
        component={Itemlist}
        options={{
          headerShown: false,
          // Show badge only if cartCount > 0
          tabBarBadge: cartCount > 0 ? cartCount : null,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            color: 'white',
            fontSize: 12,
          },
        }}
      />

      {/* Settings tab */}
      <Tab.Screen
        name='Setting'
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator
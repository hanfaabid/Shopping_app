import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import { width, height, totalSize } from 'react-native-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';

const Background = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#f9f1f1', }}>    
    
    <ImageBackground
      source={require('./assets/back.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          You want{'\n'}Authentic, here{'\n'}you go!
        </Text>
        <Text style={{fontSize: totalSize(1.57),marginBottom: height(5.42),     fontWeight:'400',fontFamily:'Montserrat',color:'#F2F2F2',textAlign:'center'}}>Find it here, buy it now!</Text>
           <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('Home')}>
                  <Text style={styles.text1}>Get Started</Text>
                </TouchableOpacity>
      </View>
    </ImageBackground>
        </SafeAreaView>
    
  )
}

export default Background

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
  },

  text: {
   color: '#FFFFFF',
fontSize: totalSize(3.80),    // ✅ 34/894.41*100
fontWeight: '600',
fontFamily: 'Montserrat',
textAlign: 'center',
marginBottom: height(1.72),   // 14/812*100
  },
   // Button style
    button: {
      width: width(84.53),
      height: height(6.78),
      backgroundColor: '#F83758',
      borderRadius: totalSize(0.67),
      justifyContent: 'center',
      marginBottom:34
    },
  
    // Button text style
    text1: {
      fontSize: totalSize(2.23),
      textAlign: 'center',
      color: '#FFFFFF',
    },
})

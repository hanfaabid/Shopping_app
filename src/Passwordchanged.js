import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { width, height, totalSize } from 'react-native-dimension';
import { SafeAreaView } from 'react-native-safe-area-context';

const Passwordchanged = ({navigation}) => {
    let changed=()=>{
        navigation.navigate('Signin')
    }
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#f9f1f1', }}>    
  
    <View style={styles.main}>
              <Text style={styles.title}>Reset Successfully!</Text>
               <TouchableOpacity style={styles.button} onPress={()=>changed()}>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>

    </View>
   </SafeAreaView> 
  )
}

export default Passwordchanged
const styles=StyleSheet.create({
      // Main container style
  main: {
    flex: 1,
    paddingHorizontal: width(7.73),
  },

 
 // Title text style
  title: {
    fontSize: totalSize(4.02), // ≈36px
    fontWeight: '700',
    lineHeight: totalSize(4.81), // ≈43px
    color: '#000',
  },
    // Button style
  button: {
    width: width(84.53),
    height: height(6.78),
    backgroundColor: '#F83758',
    borderRadius: totalSize(0.67),
    justifyContent: 'center',
    marginTop: height(4.67),
  },

  // Button text style
  text: {
    fontSize: totalSize(2.23),
    textAlign: 'center',
    color: '#FFFFFF',
  },
})
// // React library import kar rahe hain
// import * as React from 'react';
// import Otpscreen from './src/Otpscreen';

// // Signup aur Signin screens import kar rahe hain
// import Forgotpassword from './src/Forgotpassword';
// import Resetpassword from './src/Resetpassword';
// import Passwordchanged from './src/Passwordchanged';

// import Signup from './src/Signup';
// import Signin from './src/Signin';

// // Navigation container import (navigation ke liye zaroori)
// import { NavigationContainer } from '@react-navigation/native';

// // Stack navigator create karne ke liye import

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Stack navigator ka object bana rahe hain
// const Stack = createNativeStackNavigator();

// // Main App component
// export default function App() {
//   return (
//     // NavigationContainer poori app ko wrap karta hai
//     <NavigationContainer>

//       {/* Stack Navigator jahan screens define hoti hain */}
//       <Stack.Navigator>

//         {/* Signup screen
//             headerShown:false ka matlab header show nahi hoga */}
             
//                  <Stack.Screen
//           name="Signup"
//           component={Signup}
//           options={{ headerShown: false }}
//         />
//                      <Stack.Screen
//           name="Otpscreen"
//           component={Otpscreen}
//           options={{ headerShown: false }}
//         /> 
//                 <Stack.Screen
//           name="Forgotpassword"
//           component={Forgotpassword}
//           options={{ headerShown: false }}
//         />
    

//         {/* Signin screen
//             yahan bhi header hide kiya gaya hai */}
//         <Stack.Screen
//           name="Signin"
//           component={Signin}
//           options={{ headerShown: false }}
//         /> 
//            <Stack.Screen
//           name="Resetpassword"
//           component={Resetpassword}
//           options={{ headerShown: false }}
//         />
//           <Stack.Screen
//           name="Passwordchanged"
//           component={Passwordchanged}
//           options={{ headerShown: false }}
//         />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store';
import StackNavigations from './src/StackNavigations'; // correct import

const App = () => {
  return (
    <Provider store={Store}>
  <StackNavigations />
  
   </Provider>
  );
};

export default App;

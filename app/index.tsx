import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageScreen from './screens/LanguageScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import SignInScreen from './screens/SignInScreen';
import SignInUpScreen from './screens/SignInUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import WhoAreYouScreen from './screens/WhoAreYouScreen';
import TopicsOfInterestScreen from './screens/TopicsOfInterestScreen';
import NotificationReminderScreen from './screens/NotificationReminderScreen';

const Stack = createStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator initialRouteName='LanguageScreen'>
        <Stack.Screen name="Language" component={LanguageScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignInUpScreen" component={SignInUpScreen} options={{headerShown:false}} />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="WhoAreYouScreen" component={WhoAreYouScreen} options={{headerShown:false}} />
        <Stack.Screen name="TopicsOfInterestScreen" component={TopicsOfInterestScreen} options={{headerShown:false}} />
        <Stack.Screen name="NotificationReminderScreen" component={NotificationReminderScreen} options={{headerShown:false}} />


      </Stack.Navigator>
  );
}




// import React, { Component } from "react";
// import SignInScreen from "./screens/SignInScreen";
// import LanguageScreen from "./screens/LanguageScreen";
// import SignUpScreen from "./screens/SignUpScreen";
// import OtpVerificationScreen from "./screens/OtpVerificationScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import WhoAreYouScreen from "./screens/WhoAreYouScreen";
// import TopicsOfInterestScreen from "./screens/TopicsOfInterestScreen";
// import SignInUpScreen from "./screens/SignInUpScreen";
// import OtpCheckScreen from "./screens/OtpCheckScreen";
// export default class index extends Component {
//   render() {
//     return (
//       // <LanguageScreen/>
//       // <SignInScreen/>
//       // <SignUpScreen/>
//       // <OtpVerificationScreen/>
//       // <WelcomeScreen/>
//       // <WhoAreYouScreen/>
//       // <SignInUpScreen/>
//       <OtpCheckScreen/>
//       // <TopicsOfInterestScreen/>
//     );
//   }
// }



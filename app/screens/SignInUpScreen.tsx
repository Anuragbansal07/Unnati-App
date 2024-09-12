// import {
//   Text,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import React, { Component } from "react";
// const { width, height } = Dimensions.get("window");
// import { LinearGradient } from "expo-linear-gradient";

// export default class SignInUpScreen extends Component {
//   handleLogin = () => {
//     // Handle the login action here
//     this.props.navigation.navigate('SignInScreen');
//     console.log("Login button pressed");
//   };
  
//   handleCreateAnAccount = () => {
//     // Handle the login action here
//     this.props.navigation.navigate('SignUpScreen');
//     console.log("createAccount button pressed");
//   };

//   render() {
//     // Retrieve the selected language from route params
//     const { language } = this.props.route.params;

//     // Set text based on the selected language
//     const text = language === 'hi' ? {
//       login: "लॉग इन करें",
//       createAccount: "खाता बनाएं",
//     } : {
//       login: "Log In",
//       createAccount: "Create an account",
//     };

//     return (
//       <View style={styles.container}>
//         {/* Login Button */}
//         <TouchableOpacity style={styles.logIn} onPress={this.handleLogin}>
//           <Text style={styles.logInside}>{text.login}</Text>
//         </TouchableOpacity>

//         {/* Create Account Button */}
//         <TouchableOpacity
//           style={styles.logIn}
//           onPress={this.handleCreateAnAccount}
//         >
//           <Text style={styles.logInside}>{text.createAccount}</Text>
//         </TouchableOpacity>

//         {/* Gradient Line */}
//         <LinearGradient
//           colors={["#999999", "#003366", "#999999"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.line}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#f5f55",
//     height: height * (227 / 777),
//     width: width * (295 / 393),
//     left: width * (49 / 393),
//     top: height * (290 / 777),
//   },
//   logIn: {
//     marginTop: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     height: height * (35 / 777),
//     width: width * (295 / 393),
//     backgroundColor: "#003366",
//     borderRadius: 8,
//   },
//   logInside: {
//     fontWeight: "600",
//     fontSize: 16,
//     // lineHeight: 19.36,
//     color: "#f5f5f5",
//   },
//   line: {
//     height: 1,
//     marginTop: height * (50 / 777),
//     width: width * (295 / 393),
//   },
// });
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { Component } from "react";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";

export default class SignInUpScreen extends Component {
  handleLogin = () => {
    const { language } = this.props.route.params;
    // Pass the language parameter when navigating to SignInScreen
    this.props.navigation.navigate('SignInScreen', { language });
    console.log("Login button pressed");
  };
  
  handleCreateAnAccount = () => {
    const { language } = this.props.route.params;
    // Pass the language parameter when navigating to SignUpScreen
    this.props.navigation.navigate('SignUpScreen', { language });
    console.log("createAccount button pressed");
  };

  render() {
    const { language } = this.props.route.params;
    const text = language === 'hi' ? {
      login: "लॉग इन करें",
      createAccount: "नया खाता बनाएं",
    } : {
      login: "Log In",
      createAccount: "Create an account",
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.logIn} onPress={this.handleLogin}>
          <Text style={styles.logInside}>{text.login}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logIn} onPress={this.handleCreateAnAccount}>
          <Text style={styles.logInside}>{text.createAccount}</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#999999", "#003366", "#999999"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.line}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f55",
    height: height * (227 / 777),
    width: width * (295 / 393),
    left: width * (49 / 393),
    top: height * (290 / 777),
  },
  logIn: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    height: height * (35 / 777),
    width: width * (295 / 393),
    backgroundColor: "#003366",
    borderRadius: 8,
  },
  logInside: {
    fontWeight: "600",
    fontSize: 16,
    color: "#f5f5f5",
  },
  line: {
    height: 1,
    marginTop: height * (50 / 777),
    width: width * (295 / 393),
  },
});

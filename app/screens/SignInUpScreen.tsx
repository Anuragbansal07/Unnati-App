import {Text,StyleSheet,View,TouchableOpacity,Dimensions,} from "react-native";
import React, { Component } from "react";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";

export default class SignInUpScreen extends Component {
  handleLogin = () => {
    const { language } = this.props.route.params;
    this.props.navigation.navigate('SignInScreen', { language });
    console.log("Login button pressed");
  };
  
  handleCreateAnAccount = () => {
    const { language } = this.props.route.params;
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
      <View style = {styles.outsideContainer}>
        
        <View style={styles.container}>

          <TouchableOpacity style={styles.blueContainer} onPress={this.handleLogin}>
            <Text style={styles.blueContainerText}>{text.login}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueContainer} onPress={this.handleCreateAnAccount}>
            <Text style={styles.blueContainerText}>{text.createAccount}</Text>
          </TouchableOpacity>

          <LinearGradient colors={["#999999", "#003366", "#999999"]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.line} />

        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  outsideContainer : {
    flex : 1,
    backgroundColor : '#f5f5f5'
  },
  container: {
    backgroundColor: "#f5f5f5",
    height: height * (227 / 777),
    width: width * (295 / 393),
    left: width * (49 / 393),
    top: height * (313 / 777),
  },
  blueContainer: {
    marginTop: height*(12/777),
    alignItems: "center",
    justifyContent: "center",
    height: height * (35 / 777),
    width: width * (295 / 393),
    backgroundColor: "#003366",
    borderRadius: 8,
  },
  blueContainerText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#f5f5f5",
  },
  line: {
    height: height*(1/777),
    marginTop: height * (50 / 777),
    width: width * (295 / 393),
  },
});

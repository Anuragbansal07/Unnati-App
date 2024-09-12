import { Text, StyleSheet, View, Dimensions, TextInput} from "react-native";
import React, { Component } from "react";
import {GestureHandlerRootView,TouchableOpacity} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phoneNumber: "",
      showError1: false,
      showError2: false,
      isLoginDisabled: true,
    };
  }

  handleLogin = () => {
    const { username, phoneNumber } = this.state;
    const { language } = this.props.route.params;

    if (username === "Anurag Bansal") {
      if (phoneNumber !== "7814770014") {
        this.setState({ showError2: true });
        setTimeout(() => this.setState({ showError2: false }), 5000);
      } else {
        this.props.navigation.navigate("OtpVerificationScreen", { language ,username});
      }
    } else {
      this.setState({ showError1: true });
      setTimeout(() => this.setState({ showError1: false }), 5000);
    }
  };

  handlePhoneNumberChange = (text) => {
    const { username, phoneNumber } = this.state;

    this.setState({
      phoneNumber: text,
      isLoginDisabled: text.length !== 10,
    });
  };

  handleForgotPassword = ()=>{

  }

  render() {
    const { language } = this.props.route.params;
    const { username, phoneNumber, showError1, showError2, isLoginDisabled } = this.state;

    const text =
      language === "hi"
        ? {
            username: "नाम",
            phoneNumber: "फोन नंबर",
            login: "लॉग इन करें",
            forgotPassword: "Password भूल गए?",
            errorMessage: "नाम और फोन नंबर मेल नहीं खाते।",
            errorMessage2: "फ़ोन नंबर दर्ज नहीं है",
          }
        : {
            username: "Username",
            phoneNumber: "Phone number",
            login: "Log In",
            forgotPassword: "Forgot Password?",
            errorMessage: "Username and phone number doesn't match.",
            errorMessage2: "Phone number not registered.",
          };

    return (
      <View style={styles.outsideContainer}>

        <View style={styles.container}>

          <View style={[styles.inputContainer1, showError1 && styles.errorInput]}>
            <Text style={[styles.label, showError1 && styles.errorLabel]}>
              {text.username}
            </Text>
            <TextInput style={styles.textInput} value={username} 
                onChangeText={(text) => this.setState({ username: text })} />
          </View>

          {showError1 && (
            <Text style={styles.errorText}>{text.errorMessage}</Text>
          )}

          <View style={[styles.inputContainer2, showError2 && styles.errorInput]}>
            <Text style={styles.label}>{text.phoneNumber}</Text>
            <TextInput style={styles.textInput} keyboardType="phone-pad" value={phoneNumber}
              onChangeText={this.handlePhoneNumberChange} />
          </View>

          {showError2 && (
            <Text style={styles.errorText}>{text.errorMessage2}</Text>
          )}

          <TouchableOpacity style={styles.forgotPass} onPress={this.handleForgotPassword}>
            <Text style={styles.pass}>{text.forgotPassword}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.loginContainer, isLoginDisabled && styles.disabledButton]}
            onPress={this.handleLogin} disabled={isLoginDisabled}>
            <Text style={styles.login}>{text.login}</Text>
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
    backgroundColor : '#f5f5f5',
  },
  container: {
    backgroundColor: "#f5f5f5",
    height: height * (312 / 777),
    width: width * (348 / 393),
    left: width * (23 / 393),
    top: height * (241 / 777),
  },
  inputContainer1: {
    backgroundColor: "#f3f1f1",
    height: height * (61 / 777),
    width: width * (348 / 393),
    borderRadius: 9,
    borderColor: "#474747",
    borderWidth: 1,
    paddingHorizontal: width*(10/393),
  },
  inputContainer2: {
    marginTop: height*(16/777),
    backgroundColor: "#f3f1f1",
    height: height * (61 / 777),
    width: width * (348 / 393),
    borderRadius: 9,
    borderColor: "#474747",
    borderWidth: 1,
    paddingHorizontal: width*(10/393),
  },
  textInput: {
    backgroundColor: "#f3f1f1",
    borderRadius: 5,
    fontSize: 16,
  },
  label: {
    fontSize: 13,
    color: "#000",
    marginTop: height*(5/777),
  },
  errorLabel: {
    color: "#bc1f13",
  },
  forgotPass: {
    height: height * (18 / 777),
    width: width * (348 / 393),
    marginTop: height * (12 / 777),
    alignItems: "flex-end",
  },
  pass: {
    color: "#008080",
    fontSize: 12,
  },
  loginContainer: {
    marginTop: height*(36/777),
    alignItems: "center",
    justifyContent: "center",
    height: height * (35 / 777),
    width: width * (348 / 393),
    backgroundColor: "#003366",
    borderRadius: 9,
  },
  login: {
    fontWeight: "700",
    fontSize: 16,
    color: "#f5f5f5",
  },
  line: {
    height: height*(1/777),
    marginTop: height * (37 / 777),
    width: width * (348 / 393),
  },
  errorText: {
    marginTop: height*(8/777),
    fontWeight: "500",
    color: "#bc1f13",
    fontSize: 12,
  },
  errorInput: {
    borderColor: "#fc9780",
    color: "#fcede9",
  },
  disabledButton: {
    backgroundColor: "#d3d3d3",
  },
});

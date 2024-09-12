import { Text, StyleSheet, View, Dimensions, TextInput } from "react-native";
import React, { Component } from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Checkbox from 'expo-checkbox';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get("window");

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phoneNumber: "",
      isChecked: false,
    };
  }

  // Method to check if the "Send OTP" button should be enabled
  isButtonDisabled = () => {
    const { username, phoneNumber, isChecked } = this.state;
    return username.trim() === "" || phoneNumber.trim() === "" || !isChecked;
  }

  handleOTP = async () => {
    const { phoneNumber } = this.state;
    const { language } = this.props.route.params;

    if (this.isButtonDisabled()) {
      console.log('Please fill all the fields and accept the terms.');
      return;
    }

    try {
      // const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      this.props.navigation.navigate('OtpVerificationScreen',{language});
      console.log('OTP sent to:', phoneNumber);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  handleTermsConditions = () => {
    // Handle the terms and conditions action here
    console.log('Terms and conditions pressed');
  };

  handlePrivacyPolicy = () => {
    // Handle the privacy policy action here
    console.log('View privacy policy');
  };

  render() {
    const { language } = this.props.route.params;
    const text = language === 'hi' ? {
      username: "नाम",
      phoneNumber: "फोन नंबर",
      otp: "OTP भेजें",
      terms: "नियम और शर्तें",
      privacy: "गोपनीयता नीति से सहमत हैं।",
      and: "और",
      clicking: "चेकबॉक्स आइकन पर क्लिक करके आप हमारे",
    } : {
      username: "Username",
      phoneNumber: "Phone number",
      otp: "Send OTP",
      and: "and",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      clicking: "By clicking on checkbox icon you agreeing to our ",
    };

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{text.username}</Text>
            <TextInput
              style={styles.textInput}
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{text.phoneNumber}</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
              value={this.state.phoneNumber}
              onChangeText={(text) => this.setState({ phoneNumber: text })}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={this.state.isChecked}
              onValueChange={(newValue) => this.setState({ isChecked: newValue })}
              color={this.state.isChecked ? "#008080" : undefined}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>{text.clicking}</Text>
            <TouchableOpacity onPress={this.handleTermsConditions}>
              <Text style={styles.newTerms}>{text.terms}</Text>
            </TouchableOpacity>
            <Text style={styles.checkboxText}> {text.and} </Text>
            <TouchableOpacity onPress={this.handlePrivacyPolicy}>
              <Text style={styles.newPolicy}>{text.privacy}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.otp, this.isButtonDisabled() && styles.disabledButton]}
            onPress={this.handleOTP}
            disabled={this.isButtonDisabled()}
          >
            <Text style={styles.otplabel}>{text.otp}</Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f1f1",
    height: height * (312 / 777),
    width: width * (348 / 393),
    left: width * (23 / 393),
    top: height * (241 / 777),
  },
  inputContainer: {
    backgroundColor: "#f3f1f1",
    height: height * (61 / 777),
    width: width * (348 / 393),
    borderRadius: 9,
    borderColor: "#474747",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: "#000",
    marginTop: 5,
  },
  textInput: {
    marginTop: 5,
    backgroundColor: "#f3f1f1",
    borderRadius: 5,
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: height * (28 / 777),
    width: width * (351 / 393),
  },
  checkboxText: {
    fontSize: 12,
  },
  newTerms: {
    color: '#008080',
    fontSize: 12,
    marginLeft: 23,
  },
  newPolicy: {
    color: '#008080',
    fontSize: 12,
  },
  checkbox: {
    marginRight: 8,
    alignSelf: 'center',
    height: 14,
    width: 13,
    borderRadius: 2,
    borderWidth: 0.5,
  },
  otp: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * (35 / 777),
    width: width * (351 / 393),
    backgroundColor: '#003366',
    borderWidth: 1,
    borderRadius: 9,
  },
  otplabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f5f5f5',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    borderColor: '#999999',
  },
});

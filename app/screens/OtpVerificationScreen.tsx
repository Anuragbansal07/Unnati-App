import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TextInput } from "react-native";
import React, { Component } from "react";

const { width, height } = Dimensions.get("window");

export default class OtpVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ["", "", "", "", "", ""],
      showError: false,
      isButtonDisabled: true,
    };
  }

  handleLogin = () => {
    const otpEntered = this.state.otp.join("");
    if (otpEntered === "123456") {
      const { language,username } = this.props.route.params;
      this.props.navigation.navigate('WelcomeScreen', { language,username });
    } else {
      this.setState({ showError: true });
      setTimeout(() => this.setState({ showError: false }), 3000);
    }
  }

  handleOTPChange = (text, index) => {
    let newOtp = [...this.state.otp];
    newOtp[index] = text;
    this.setState({ otp: newOtp, showError: false }, () => {
      if (text.length === 1 && index < 5) {
        this[`textInput${index + 1}`].focus();
      }

      if (text === "" && index > 0) {
        this[`textInput${index - 1}`].focus();
      }

      if (newOtp.join("").length === 6) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  };

  render() {
    const { language } = this.props.route.params;
    const { showError, isButtonDisabled } = this.state;

    const text = language === 'hi' ? {
      securityText: "SMS में भेजा गया OTP डालें",
      resendOtp: "OTP दोबारा भेजें",
      errorMessage: "OTP गलत है",
    } : {
      securityText: "Enter 6 digit high security code",
      resendOtp: "Resend OTP",
      errorMessage: "Incorrect OTP",
    };

    return (
      <View style={styles.outsideContainer}>

        <View style={styles.container}>
          
          <Text style={[styles.code, showError && styles.errorCode]}>{text.securityText}</Text>

          {showError && (
            <Text style={styles.errorText}>{text.errorMessage}</Text>
          )}

          <View style={styles.otpContainer}>
            {this.state.otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={digit}
                onChangeText={(text) => this.handleOTPChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(input) => {
                  this[`textInput${index}`] = input;
                }}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.resend} onPress={() => console.log("Resend OTP pressed")}>
            <Text style={styles.resendOtp}>{text.resendOtp}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.verify, isButtonDisabled && styles.disabledButton]}
            onPress={this.handleLogin} disabled={isButtonDisabled}>
            <Text style={styles.verifyInside}>Verify</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    height: height * (119 / 777),
    width: width * (250 / 393),
    top: height * (249 / 777),
    left: width * (72 / 393),
    backgroundColor: "#f5f5f5",
  },
  code: {
    height: height * (18 / 777),
    width: width * (250 / 393),
    fontWeight: "700",
    fontSize: 16,
    color: "#333333",
    marginBottom: height * (28 / 777)
  },
  errorCode: {
    color: '#bc1f13',
  },
  errorText: {
    height: height * (18 / 777),
    width: width * (250 / 393),
    marginBottom: height * (8 / 777),
    fontWeight: "400",
    color: "#bc1f13",
    fontSize: 14,
  },
  otpContainer: {
    height: height * (44 / 777),
    width: width * (250 / 393),
    flexDirection: "row",
  },
  otpInput: {
    height: height * (44 / 777),
    width: width * (31 / 393),
    backgroundColor: "#f5f5f5",
    borderColor: "#5b5b5b",
    borderBottomWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    marginLeft: width * (8 / 393),
  },
  resend: {
    marginTop: height * (30 / 777),
  },
  resendOtp: {
    color: "#008080",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  },
  verify: {
    marginTop: height * (71 / 777),
    alignItems: 'center',
    justifyContent: 'center',
    height: height * (35 / 777),
    width: width * (250 / 393),
    backgroundColor: '#003366',
    borderWidth: 1,
    borderRadius: 9,
  },
  verifyInside: {
    fontWeight: '700',
    fontSize: 16,
    color: '#f5f5f5',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    borderColor: '#999999',
  }
});

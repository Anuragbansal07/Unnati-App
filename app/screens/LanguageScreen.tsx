import { Text, StyleSheet, View, Dimensions ,Image} from 'react-native';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default class LanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: null,
      open: false,
      items: [
        { label: 'हिन्दी', value: 'hi' },
        { label: 'English', value: 'en' },
      ],
    };
  }

  handleContinue = () => {
    const { selectedLanguage } = this.state;

    if (selectedLanguage) {
      this.props.navigation.navigate('SignInUpScreen', { language: selectedLanguage });
    } else {
      alert("No language selected");
    }
  };

  setOpen = (open) => {
    this.setState({
      open,
    });
  };

  setValue = (callback) => {
    this.setState((state) => ({
      selectedLanguage: callback(state.selectedLanguage),
    }));
  };

  setItems = (callback) => {
    this.setState((state) => ({
      items: callback(state.items),
    }));
  };

  render() {
    return (
      <GestureHandlerRootView style={{flex:1}}> 
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Text style={styles.language1}>भाषा चुने</Text>
            <Text style={styles.language2}>Select Language</Text>

            <DropDownPicker
              open={this.state.open}
              value={this.state.selectedLanguage}
              items={this.state.items}
              setOpen={this.setOpen}
              setValue={this.setValue}
              setItems={this.setItems}
              placeholder="--Select Language--"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              placeholderStyle={styles.placeholderStyle}
              textStyle={styles.labelStyle} 
            />

            <View style={{ marginTop: this.state.open ? 110 : 40 }}>
              <TouchableOpacity style={styles.continue} onPress={this.handleContinue}>
                <View style={styles.continueContainer}>
                  <Text style={styles.continueInside}>Continue </Text>
                  <Image source={require('../../assets/images/Arrow_right.png')} style={styles.image}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView> 
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  container: {
    width: width * (350 / 393),
    left: width * (21 / 393),
    height : height*(189/777),
    top : height * (296/777),
    backgroundColor: '#f5f5f5',
  },
  language1: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26.6,
  },
  language2: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24.2,
    marginBottom: 20,
  },
  dropdown: {
    height: height * (44 / 777),
    width: width * (350 / 393),
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
  },
  dropdownContainer: {
    width: width * (350 / 393),
    height : height*(85/777),
    borderWidth: 1,
    borderColor: '#333',
    marginBottom : 0,
  },
  placeholderStyle : {
    fontSize : 14,
    fontWeight : '600',
    lineHeight : 16.94,
    color : '#474747'
  },
  labelStyle: {
    color: '#333',
    height : height * (19/777),
    width : width * (316/393),      // Text color for dropdown values
    fontSize: 14,       // Font size for dropdown values
    fontWeight: '400',
    // fontFamily : "Inter",
    lineHeight : 18.62, // Font weight for dropdown values
    // paddingHorizontal: 10,  // Padding inside each dropdown item
  },
  continue: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop : 0,
    height: height * (40 / 777),
    width: width * (350 / 393),
    backgroundColor: '#003366',
    borderWidth: 1,
    borderRadius: 8,
  },
  continueContainer : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
  },
  continueInside: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.36,
    color: '#f5f5f5',
  },
  image : {
    width : 24,
    height : 24,
  },

});


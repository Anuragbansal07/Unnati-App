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
              <TouchableOpacity style={styles.continueContainer} onPress={this.handleContinue}>
                  <Text style={styles.continueInside}>Continue </Text>
                  <Image source={require('../../assets/images/Arrow_right.png')} style={styles.image}/>
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
    top : height * (350/777),
    backgroundColor: '#f5f5f5',
  },
  language1: {
    fontWeight: '400',
    fontSize: 20,
    color : '#333'
  },
  language2: {
    fontWeight: '600',
    fontSize: 20,
    color : '#333',
    marginBottom: height*(32/777),
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
    color : '#474747'
  },
  labelStyle: {
    color: '#333',
    height : height * (19/777),
    width : width * (316/393),    
    fontSize: 14,       
    fontWeight: '400',
  },
  continueContainer : {
    height: height * (40 / 777),
    width: width * (350 / 393),
    backgroundColor: '#003366',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
  },
  continueInside: {
    fontWeight: '700',
    fontSize: 16,
    color: '#f5f5f5',
  },
  image : {
    width : width*(24/393),
    height : width*(24/393),
  },

});


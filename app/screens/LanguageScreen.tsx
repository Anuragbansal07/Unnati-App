// import { Text, StyleSheet, View, Dimensions } from 'react-native';
// import React, { Component } from 'react';
// import RNPickerSelect from 'react-native-picker-select';
// import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/FontAwesome';
// const { width, height } = Dimensions.get("window");
// import { firebase } from '@react-native-firebase/auth';
// export default class LanguageScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedLanguage: null,
//     };
//   }
//   handleContinue = () => {
//     const { selectedLanguage } = this.state;

//     if (selectedLanguage) {
//       // Navigate to SignUpScreen with the selected language
//       // console.log(firebase.apps);
//       this.props.navigation.navigate('SignUpScreen', { language: selectedLanguage });
//     } else {
//       // Handle the case when no language is selected, e.g., show an alert
//       console.log('No language selected');
//     }
//   };

//   handleLanguageChange = (value) => {
//     this.setState({ selectedLanguage: value });
//     console.log('Selected language:', value);
//   };

//   render() {
//     const languageOptions = [
//       { label: 'English', value: 'en' },
//       { label: 'Spanish', value: 'es' },
//       { label: 'French', value: 'fr' },
//       // Add more languages as needed
//     ];

//     return (
//         <GestureHandlerRootView style={{flex:1}}> 
//       <View style={styles.outerContainer}>
//         <View style={styles.container}>
//           <Text style={styles.language1}>भाषा चुने</Text>
//           <Text style={styles.language2}>Select Language</Text>

//           <RNPickerSelect
//             placeholder={{ label: '--Select Language--', value: null }}
//             onValueChange={this.handleLanguageChange}
//             items={languageOptions}
//             style={pickerSelectStyles}
//             value={this.state.selectedLanguage}
//           />
//           <TouchableOpacity style={styles.continue} onPress={this.handleContinue}>
//           <View style={styles.continueContainer}>
//             <Text style={styles.continueInside}>Continue </Text>
//             <Icon name="arrow-right" size={17} color="#fff" style={styles.icon} />
//           </View>
//           </TouchableOpacity>

//         </View>
//       </View>
//          </GestureHandlerRootView> 

//         // }
//     );
//   }
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     backgroundColor: '#f5f5f5',
//     flex: 1,
//   },
//   container: {
//     height: height * (189 / 777),
//     width: width * (350 / 393),
//     top: height * (296 / 777),
//     left: width * (21 / 393),
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//   },
//   language1: {
//     fontWeight: '400',
//     fontSize: 20,
//     lineHeight: 26.6,
//     height: height * (27 / 777),
//   },
//   language2: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     lineHeight: 24.2,
//     height: height * (24 / 777),
//     marginBottom: 20,
//   },
//   continue: {
//     marginTop: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: height * (40 / 777),
//     width: width * (330 / 393),
//     backgroundColor: '#003366',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   continueInside: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     lineHeight: 19.36,
//     color: '#f5f5f5',
//   },
//   continueContainer : {
//     flex : 1,
//     flexDirection : 'row',
//     alignItems : 'center',
//     justifyContent : 'center',
//   },
//   icon : {
//     width : 24,
//     height : 24,
//     alignItems : 'center',
//     justifyContent : 'center',
//     marginLeft : 5,
//     paddingVertical : 3,
//   }
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     color: '#000',
//     paddingRight: 30,
//   },
//   inputAndroid: {
//     height : height*(44/777),
//     width : width*(350/393),
//     fontSize: 16,
//     // paddingHorizontal: 10,
//     // paddingVertical: 8,
//     borderWidth: 5,

//     borderColor: 'red',
//     borderRadius: 5,
//     color: '#fff',
//     // paddingRight: 30,
//   },
// });



import { Text, StyleSheet, View, Dimensions ,Image} from 'react-native';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window");

export default class LanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: null,
      open: false, // Controls dropdown open/close
      items: [
        { label: 'हिन्दी', value: 'hi' },
        { label: 'English', value: 'en' },
        // Add more languages as needed
      ],
    };
  }

  handleContinue = () => {
    const { selectedLanguage } = this.state;

    if (selectedLanguage) {
      // Navigate to SignUpScreen with the selected language
      this.props.navigation.navigate('SignInUpScreen', { language: selectedLanguage });
    } else {
      alert("No language selected");
      // console.log('No language selected');
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

            {/* Automatically moves the Continue button down when the dropdown expands */}
            <View style={{ marginTop: this.state.open ? 110 : 40 }}>
              <TouchableOpacity style={styles.continue} onPress={this.handleContinue}>
                <View style={styles.continueContainer}>
                  <Text style={styles.continueInside}>Continue </Text>
                  <Image source={require('../../assets/images/Arrow_right.png')} style={styles.image}/>
                  {/* <Icon name="arrow-right" size={17} color="#fff" style={styles.icon} /> */}
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
    // alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    // justifyContent: 'center',
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

    // paddingHorizontal : 10,
    // paddingVertical : 16,
    // alignItems : 'stretch',
    // color : "#474747",
  },
  dropdownContainer: {
    width: width * (350 / 393),
    height : height*(85/777),
    borderWidth: 1,
    borderColor: '#333',
    marginBottom : 0,
    // paddingHorizontal : 10,
    // paddingVertical : 17,
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
  // icon : {
  //   width : 24,
  //   height : 24,
  //   alignItems : 'center',
  //   justifyContent : 'center',
  //   marginLeft : 5,
  //   paddingVertical : 3,
  // },

});


import { Text, StyleSheet, View ,Dimensions,TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");


export default class WelcomeScreen extends Component {
  handleContinue =()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('WhoAreYouScreen',{language});

  }
  handleNext = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('WhoAreYouScreen',{language});

  }
  render() {
    const { navigation } = this.props;
    const { language  ,username} = this.props.route.params;
    console.log(username);
    const text = language === 'hi' ? {
      welcome: "आपका स्वागत है,",
      understandText : "हमें आपके बारे में समझने में मदद करें",
      continue : "जारी रखे",
    } : {
      welcome : "Welcome, ",
      phoneNumber: "Phone number",
      understandText : "Help us understand about you",
      continue : "Continue"
    };

    return (
      <View> 

          <View style={styles.header}>
            
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/Expand_left.png')} style={styles.backButton}/>
            </TouchableOpacity>
          
            <Text style={styles.pageIndicator}>1/3</Text>
            
            <TouchableOpacity onPress={this.handleNext}>
              <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
          
          </View>
      
          <View style={styles.container}>
            
            <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
            
            <Text style={styles.welcome}>{text.welcome}</Text>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.text}>{text.understandText}</Text>

            <TouchableOpacity style={styles.continueContainer} onPress={this.handleContinue}>
              <Text style={styles.continueText}>{text.continue} </Text>
              <Image source={require('../../assets/images/Arrow_right.png')} style={styles.image}/>
            </TouchableOpacity>
          
          </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width : width*(353/393),
    height : height*(24/777),
    top : height*(19/777),
    left : width*(20/393),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    height : height*(24/777),
    width : width*(24/393),
  },
  pageIndicator: {
    position: 'absolute',
    left: width / 2 - 30, 
    height : height*(19/777),
    width : width*(27/293),
    fontSize: 16,
    color: "#5B5B5B",
    fontWeight : '400',
  },
  nextButton: {
    fontSize: 16,
    color: "#5B5B5B",
    fontWeight : '400',
    paddingHorizontal : width*(10/393),
  },
  container : {
      height : height*(389/777),
      width : width*(346/393),
      top : height*(150/777),
      left : width*(24/393),
    },
  logo : {
    height : height*(179/777),
    width : width*(179/393),
    left : width*(83.5/393),
  },
  welcome : {
    marginTop : height*(52/777),
    color : '#333',
    fontSize : 36,
    fontWeight : '700',
  },
  username : {
    fontWeight : '500',
    fontSize : 20,
    color : '#003366',
  },
  text : {
    fontWeight : '500',
    fontSize : 16,
    marginTop : height*(28/777),
    color : '#333',
  },
  continueContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop: height*(20/777),
    height: height * (40 / 777),
    width: width * (346 / 393),
    backgroundColor: '#003366',
    borderRadius: 8,
  },
  continueText : {
    fontWeight: '700',
    fontSize: 16,
    color: '#f5f5f5',
  },
  image : {
    width : width*(24/393),
    height : height*(24/777),
  },
        
})
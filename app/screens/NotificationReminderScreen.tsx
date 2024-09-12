import { Text, StyleSheet, View ,Dimensions,Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");


export default class NotificationReminderScreen extends Component {

    handleNotification = () => {
        // Handle the submit action
        // this.props.navigation.navigate("NotificationReminderScreen");
        console.log("Notification button clicked");
    };

    handleSkip = () => {
        // Handle the submit action
        // this.props.navigation.navigate("NotificationReminderScreen");
        console.log("skip button clicked");
      };
  
    render() {
        const { language } = this.props.route.params;
        const text = language === 'hi' ? {
            // skip : "छोडना",
            registerText : "Registration सफल",
            notificationText : "Updates के लिए notification चालू करें",
            notifyButton : "Notification चालू करें",
      
          } : {
            // skip : "Skip",
            registerText : "You've been registered successfully",
            notificationText : " We recommend turning your notification on to get latest updates.",
            notifyButton : "Turn On Notification",
          };

          const dynamicLogoStyle = language === 'hi' ? { marginTop: height * (3 / 777) } : { marginTop : height * (35 / 777) };

    return (
      <View style={styles.outsideContainer}>
        <View style={styles.skipContainer}>

         <TouchableOpacity onPress={this.handleSkip}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>

            <View style={styles.regTxt}>

        <Text style={styles.txt}>{text.registerText}</Text>
            </View>

            <View style={dynamicLogoStyle}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
          <Text style={styles.recTxt}>{text.notificationText}</Text>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={this.handleNotification}>
            <Text style={styles.submitButtonText}>{text.notifyButton}</Text>
          </TouchableOpacity>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    outsideContainer : {
        flex : 1,
        backgroundColor : '#f5f5f5',
    },
    skipContainer:{
        height : height*(24/777),
        width : width*(353/393),
        top : height*(14/393),
        left : width*(20/393),
        alignItems : 'flex-end'
    },
    skipButton: {
        fontSize: 16,
        color: "#5B5B5B",
        fontWeight : '400',
        // paddingHorizontal : 10,
      },
    container : {
        height : height*(342/777),
        width : width*(351/393),
        top : height*(192/777),
        left : width*(21/393),
        backgroundColor : '#f5f5f5',
    },
    regTxt : {
        alignContent : 'center',
        alignItems : 'center',
        justifyContent:'center'
    },
    txt : {
        height : height*(64/777),
        width : width*(351/393),
        // top : height*(192/777),
        // left : width*(21/393),
        // backgroundColor : '#f5f5f5',
        fontWeight : '700',
        fontSize : 24,
        lineHeight : 32,
        alignContent : 'center',
        justifyContent : 'center',
        textAlign : 'center',
    },
    logo : {
        height : height*(117/777),
        width : width*(117/393),
        // top : height*(96/777),
        left : width*(117/393),
      },
      recTxt : {
        fontWeight : '400',
        fontSize : 14,
        // lineHeight : 16,
        color : '#333',
        textAlign : 'center',
        marginTop : 12,
      },
      submitButton: {
        marginTop : height*(35/777),
        
        height: height * (35 / 777),
        width: width * (351 / 393),
        backgroundColor: "#f5c518",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      },
      submitButtonText: {
        color: "#333",
        fontWeight: "700",
        fontSize: 16,
        // lineHeight: 19.36,
      },
})
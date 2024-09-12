import {Text,StyleSheet,View,Dimensions,TouchableOpacity,Image} from "react-native";
import React, { Component } from "react";
const { width, height } = Dimensions.get("window");

export default class WhoAreYouScreen extends Component {

  handleBusinessOwner = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('TopicsOfInterestScreen',{language});

    console.log('business owner it is');
  }

  handleJobSeeker = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('TopicsOfInterestScreen',{language});

    console.log('job seeker it is');
  }

  handleInvestor = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('TopicsOfInterestScreen',{language});

    console.log('investor it is');
  }

  handleOthers = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('TopicsOfInterestScreen',{language});

    console.log('others it is');
  }
  handleSkip = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('TopicsOfInterestScreen',{language});

    console.log('oskip it is');
  }

  render() {
    const { navigation } = this.props;
    const { language } = this.props.route.params;
    const text = language === 'hi' ? {
      describeText : "Aap kis shreni/category mein aate hain?",
      business : "Businessman(व्यवसायी)",
      jobSeeker : "नौकरी खोजने वाले",
      investor : "ननवेशक/investor",
      other : 'अन्य',
    } : {
      describeText : "What describes you?",
      business : "Business Ownwer",
      jobSeeker : "Job Seeker",
      investor : "Investor/Capitalist",
      other : 'Others',
    };
    return (
      <View style={styles.outsideContainer}>
        
        <View style={styles.header}>
          
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Expand_left.png')} style={styles.backButton}/>
          </TouchableOpacity>
          
          <Text style={styles.pageIndicator}>2/3</Text>
          
          <TouchableOpacity onPress={this.handleSkip}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        
        </View>
        
        <View style={styles.container}>
          
          <Text style={styles.describe}>{text.describeText}</Text>
          
          <TouchableOpacity style={styles.categoryContainer} onPress={this.handleBusinessOwner}> 
            <View style={styles.continueContainer}>
              <Text style={styles.continueInside}>{text.business}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer} onPress={this.handleJobSeeker}>
            <View style={styles.continueContainer}>
              <Text style={styles.continueInside}>{text.jobSeeker}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryContainer} onPress={this.handleInvestor}>
            <View style={styles.continueContainer}>
              <Text style={styles.continueInside}>{text.investor} </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={this.handleOthers}
          >
            <View style={styles.continueContainer}>
              <Text style={styles.continueInside}>{text.other} </Text>
            </View>
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
  header: {
    width : width*(353/393),
    height : height*(24/777),
    top : height*(24/777),
    left : width*(20/393),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    height : height*(24/777),
    width : width*(24/777),
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
  skipButton: {
    fontSize: 16,
    color: "#5B5B5B",
    fontWeight : '400',
    paddingHorizontal : 10,
  },
  container: {
    height: height * (218 / 777),
    width: width * (310 / 393),
    top: height * (246.5 / 777),
    left: width * (42 / 393),
    backgroundColor: "#f5f5f5",
  },
  categoryContainer: {
    marginTop: height*(15/777),
    alignItems: "center",
    justifyContent: "center",
    height: height * (35 / 777),
    width: width * (310 / 393),
    backgroundColor: "#003366",
    borderColor : '#003366',
    borderRadius: 8,
    paddingHorizontal: width*(8/393),
  },
  continueInside: {
    fontWeight: "500",
    fontSize: 16,
    color: "#f5f5f5",
  },
  continueContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  describe: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 18,
    color: "#333",
    paddingVertical : height*(18/777),
  },
});

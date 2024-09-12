import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");

class TopicsOfInterestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
    };
  }

  industries = [
    "Industry 1",
    "Industry 2",
    "Industry 3",
    "Industry 4",
    "Industry 5",
    "Industry 6",
    "Industry 7",
    "Industry 8",
    "Industry 9",
    "Industry 10",
    "Industry 11",
    "Industry 12",
  ];

  toggleIndustry = (industry) => {
    const { selectedIndustries } = this.state;
    if (selectedIndustries.includes(industry)) {
      this.setState({
        selectedIndustries: selectedIndustries.filter(
          (item) => item !== industry
        ),
      });
    } else {
      this.setState({ selectedIndustries: [...selectedIndustries, industry] });
    }
  };

  handleSubmit = () => {
    // Handle the submit action
    const { language } = this.props.route.params;

    this.props.navigation.navigate("NotificationReminderScreen",{language});
    console.log("Selected Industries:", this.state.selectedIndustries);
  };

  handleSkip = ()=>{
    const { language } = this.props.route.params;

    this.props.navigation.navigate('NotificationReminderScreen',{language});

    console.log('oskip it is');
  }

  render() {
    const { selectedIndustries } = this.state;
    const { navigation } = this.props;
    const { language } = this.props.route.params;
    const text = language === 'hi' ? {
      // skip : "छोडना",
      industryText : "आप किन विषयों में रुचि रखते हैं?",
      submit : "जारी रखे",
      industry : "उद्योग",

    } : {
      // skip : "Skip",
      industryText : "Industries you're interested in:",
      submit : "Submit",
      industry : "Industry",
    };
    return (
      <View style = {styles.outsideContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Expand_left.png')} style={styles.backButton}/>
          </TouchableOpacity>
          <Text style={styles.pageIndicator}>3/3</Text>
          <TouchableOpacity onPress={this.handleSkip}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {/* Title */}
          <Text style={styles.title}>{text.industryText}  </Text>

          {/* Industry Buttons */}
          <ScrollView contentContainerStyle={styles.buttonContainer}>
            {this.industries.map((industry, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.industryButton,
                  selectedIndustries.includes(industry) &&
                    styles.selectedButton,
                ]}
                onPress={() => this.toggleIndustry(industry)}
              >
                <Text style={styles.buttonText,selectedIndustries.includes(industry) && 
                  styles.selectedButtonTxt}>{industry}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit}>
            <Text style={styles.submitButtonText}>{text.submit}</Text>
          </TouchableOpacity>
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
  header: {
    width : width*(353/393),
    height : height*(34/777),
    top : height*(24/777),
    left : width*(27/393),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    height : height*(24/777),
    width : width*(24/777),
  },
  pageIndicator: {
    position: 'absolute',  // Absolute position to center it
    left: width / 2 - 40, 
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
    paddingHorizontal : width*(10/393),
  },
  container: {
    height: height * (335 / 777),
    width: width * (353 / 393),
    top: height * (192  / 777),
    left: width * (20 / 393),
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: height*(20/777),
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: height*(20/777),
  },
  industryButton: {
    height : height*(34/777),
    width : width*(109/393),
    backgroundColor: "#D3D3D3",
    borderRadius: 38,
    padding: width*(8/393),
    marginVertical: height*(5/777),
    alignItems: "center",
    color : 'red',
  },
  selectedButton: {
    backgroundColor: "#008080",
  },
  selectedButtonTxt :{
    color : '#f5f5f5'
  },
  buttonText: {
    color: "#333",
    lineHeight : 18,
    fontWeight : '600',
    fontSize : 14,
  },
  submitButton: {
    height: height * (35 / 777),
    width: width * (353 / 393),
    backgroundColor: "#003366",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#f5f5f5",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default TopicsOfInterestScreen;

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import Header from "../main-tabs/header";
import TitleText from "@Component/Text/titleText";
import { saveCurrentScreen } from "../../store/actions/front-end-state-actions/navigation";
import MainText from "@Component/Text/main-text";
import ClockTopTab from "./clockTopTab";
import Shift from "./shift";
import ShiftPlaceHolderImage from "../../assets/img/shift-place.png";
import ClockModal from './clock-modal';
import ShiftBreakModal from './shift-break-modal';
import NoShiftModal from './no-shift-modal';

const colors = [
  {
    backgroundColor: 'rgba(102, 212, 89, 0.2)',
    color: "#66D459"
  },
  {
    backgroundColor: 'rgba(34, 166, 255, 0.2)',
    color: "#22A6FF"
  },
  {
    backgroundColor: 'rgba(255,152,42,0.2)',
    color: "#FF982A"
  }
];

const shiftData = [
  {
    shiftStartTime: "3:00pm",
    shiftEndTime: "10:00pm",
    shiftTitle: "Load in",
    shiftContext: "Bespoke at Westfield San Francisco Centre 845 Market Street, Suit 450, San Francisco",
    clockTime: "2:58pm",
    clockHours: "2:03 hrs",
    breakTime: "4:58pm",
    breakHours: "2:03 hrs",
    note: "$10.00 reimburse for parking"
  },
  {
    shiftStartTime: "3:00pm",
    shiftEndTime: "10:00pm",
    shiftTitle: "Load in",
    shiftContext: "Bespoke at Westfield San Francisco Centre 845 Market Street, Suit 450, San Francisco",
    clockTime: "2:58pm",
    clockHours: "2:03 hrs",
    breakTime: "4:58pm",
    breakHours: "2:03 hrs",
    note: ""
  },
  {
    shiftStartTime: "3:00pm",
    shiftEndTime: "10:00pm",
    shiftTitle: "Load in",
    shiftContext: "Bespoke at Westfield San Francisco Centre 845 Market Street, Suit 450, San Francisco",
    clockTime: "2:58pm",
    clockHours: "2:03 hrs",
    breakTime: "4:58pm",
    breakHours: "2:03 hrs",
    note: "$10.00 reimburse for parking"
  }
];

class TodayScreen extends Component {
  state = {
    clockValue: false,
    eventShift: true,
    isModalVisible: false,
    isSwitchModalVisible: false, 
    isBreakStartModalVisible: false,
    isBreakEndModalVisible: false,
    isTakeBreak: false,
    isNoShiftModalVisible: false
  }

  clockIntoShiftModal = () => {
    this.setState({ isNoShiftModalVisible: false });
  }

  closeClockIntoShiftModal = () => {
    this.setState({ isNoShiftModalVisible: false });
  }

  switchBlock = () => {
    this.setState({ isSwitchModalVisible: false });
  }

  closeSwichModal = () => {
    this.setState({ isSwitchModalVisible: false });
  }

  startBreak = () => {
    this.setState({ isTakeBreak: true });
    this.setState({ isBreakStartModalVisible: false });
  }

  closeStartBreakModal = () => {
    this.setState({ isBreakStartModalVisible: false });
  }

  breakOver = () => {
    this.setState({ isTakeBreak: false });
    this.setState({ isBreakEndModalVisible: false });
  }
  
  closeBreakModal = () => {
    this.setState({ isBreakEndModalVisible: false });
  }

  openSwitch = () => {
    this.setState({ isSwitchModalVisible: true });
  }

  openStartBreak = () => {
    this.setState({ isBreakStartModalVisible: true });
  }

  openEndBreak = () => {
    this.setState({ isBreakEndModalVisible: true });
  }

  clockIn = () => {
    this.setState({ isClockInVisible: false });
    this.setState({clockValue: !this.state.clockValue});
  }

  clockOut = () => {
    this.setState({ isClockOutVisible: false });
    this.setState({clockValue: !this.state.clockValue});
  }

  closeClockInModal = () => {
    this.setState({ isClockInVisible: false });
  }

  closeClockOutModal = () => {
    this.setState({ isClockOutVisible: false });
  }

  openClockShift = () => {
    this.setState({ isNoShiftModalVisible: true });
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onSaveCurrentScreen("Today");
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "right"
        });
      }
    }
    if (event.type == "DeepLink") {
      const parts = event.link;
      if (
        parts == "partypypes.ProfileScreen" &&
        event.payload === this.props.navigator.screenInstanceID
      ) {
        this.props.navigator.push({
          title: "Profile",
          screen: "partypypes.ProfileScreen",
          navigatorStyle: {
            navBarHidden: true
          }
        });
      }
    }
  };

  onToggleSideBar = () => {
    this.props.navigator.toggleDrawer({
      side: "right"
    });
  };

  toggleClock = (value) => {
    if (!this.state.clockValue)
      this.setState({ isClockInVisible: true });
    else
      this.setState({ isClockOutVisible: true });
  }

  onSeeWhoIsWorking = () => {
    this.props.navigator.push({
      title: "SeeWhoIsWorking",
      screen: "partypypes.SeeWorkingScreen",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header onToggleSideBar={this.onToggleSideBar} />
        {this.state.eventShift ?
          <ScrollView style={styles.root}>
            <View style={styles.topHeader}>
              <TitleText>Today's Shifts</TitleText>
              <TouchableOpacity onPress={this.onSeeWhoIsWorking}>
                <MainText style={styles.topRightText}>See who's working</MainText>
              </TouchableOpacity>
            </View>
            <ClockTopTab clockValue={this.state.clockValue} toggleClock={this.toggleClock}
              openSwitch={this.openSwitch} openStartBreak={this.openStartBreak}
              openEndBreak={this.openEndBreak} isTakeBreak={this.state.isTakeBreak} />
            {shiftData.map((shift, index) => {
              return <Shift colors={colors[1]} shift={shift} key={index}/>
            })}
              <View style={{ marginBottom: 20 }}></View>
          </ScrollView>
          :
          <View style={[styles.root,{flex: 1}]}>
            <View style={styles.topHeader}>
              <TitleText>Today's Shifts</TitleText>
              <TouchableOpacity onPress={this.onSeeWhoIsWorking}>
                <MainText style={styles.topRightText}>See who's working</MainText>
              </TouchableOpacity>
            </View> 
            <View style={styles.noEventShiftContainer}>
              <View style={styles.placeholderContainer}>
                <Image source={ShiftPlaceHolderImage} style={{ width: "50%", height: "36%" }} />
                <MainText style={styles.noShiftTitle}>No shifts for today.</MainText>
                <MainText style={styles.noShiftContext}>You can clock in to event or regular shifts manually.</MainText>
              </View>
              <TouchableOpacity onPress={this.openClockShift}>
                <MainText style={[styles.topRightText, styles.clockIntoShift]}>Clock in to a shift</MainText>
              </TouchableOpacity>
            </View>
          </View>  
        }
        <ClockModal isClockInVisible={this.state.isClockInVisible}
          isClockOutVisible={this.state.isClockOutVisible}
          clockIn={this.clockIn}
          clockOut={this.clockOut}
          closeClockInModal={this.closeClockInModal}
          closeClockOutModal={this.closeClockOutModal}
        />
        <ShiftBreakModal
          isSwitchModalVisible={this.state.isSwitchModalVisible}
          switchBlock={this.switchBlock} closeSwichModal={this.closeSwichModal}
          isBreakStartModalVisible={this.state.isBreakStartModalVisible}
          startBreak={this.startBreak} closeStartBreakModal={this.closeStartBreakModal}
          isBreakEndModalVisible={this.state.isBreakEndModalVisible}
          breakOver={this.breakOver} closeBreakModal={this.closeBreakModal}
        />
        <NoShiftModal isNoShiftModalVisible={this.state.isNoShiftModalVisible}
          clockIntoShiftModal={this.clockIntoShiftModal}
          closeClockIntoShiftModal={this.closeClockIntoShiftModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topRightText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#777EB0",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#777EB0",
  },
  noEventShiftContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  clockIntoShift: {
    marginTop: 20
  },
  placeholderContainer: {
    width: 320,
    height: 320,
    borderRadius: 160,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'rgba(240, 240, 245, 0.6)',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  noShiftTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "400",
    marginBottom: 10,
    marginTop: 10
  },
  noShiftContext: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center"
  },
  
});

const mapDispatchToProps = dispatch => {
  return {
    onSaveCurrentScreen: screen => dispatch(saveCurrentScreen(screen))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodayScreen);


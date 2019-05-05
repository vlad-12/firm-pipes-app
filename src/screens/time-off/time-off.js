import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../main-tabs/header";
import { connect } from "react-redux";
import MainText from "@Component/Text/main-text";
import { saveCurrentScreen } from "../../store/actions/front-end-state-actions/navigation";

class TimeOffScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onSaveCurrentScreen("TimeOff");
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
          screen: "partypypes.ProfileScreen"
        });
      }
    }
  };

  onToggleSideBar = () => {
    this.props.navigator.toggleDrawer({
      side: "right"
    });
  };
  render() {
    return (
      <View style={styles.noEventShiftContainer}>
        <View style={styles.placeholderContainer}>
        </View>
        <MainText style={[styles.topRightText, styles.clockIntoShift]}>Clock in to a shift</MainText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(240, 240, 245, 0.6)'
  }
})
// const mapStateToProps = state => {
//   return {
//     naviationName: state.navigationStore.screenName
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSaveCurrentScreen: screen => dispatch(saveCurrentScreen(screen))
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(TimeOffScreen);

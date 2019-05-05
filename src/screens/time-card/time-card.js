import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../main-tabs/header";
import { connect } from "react-redux";
import { saveCurrentScreen } from "../../store/actions/front-end-state-actions/navigation";

class TimeCardScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onSaveCurrentScreen("TimeCard");
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
      <View>
        <Header onToggleSideBar={this.onToggleSideBar} />
        <Text>Time card</Text>
      </View>
    );
  }
}

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
)(TimeCardScreen);

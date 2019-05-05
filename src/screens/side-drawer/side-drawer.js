import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { saveCurrentNavigation } from "../../store/actions/front-end-state-actions/navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Navigation } from "react-native-navigation";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "right"
        });
      }
    }
  };

  moveToProfile = async () => {
    this._toggleDrawer();
    const visibleScreenInstanceId = Navigation.getCurrentlyVisibleScreenId();
    // // alert(visibleScreenInstanceId);
    visibleScreenInstanceId.then(result => {
      // alert(result.screenId);
      // alert(result);

      // alert(this.props.navigator.screenInstanceID);
      this.props.navigator.handleDeepLink({
        link: "partypypes.ProfileScreen",
        payload: result.screenId
      });
    });
    // this.props.navigator.pushc({
    //   screen: "partypypes.ProfileScreen",
    //   title: "Profile"
    // });
  };

  _toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      to: "closed",
      side: "right",
      animated: true
    });
  }; //end _toggleDrawer

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.5 }
        ]}
      >
        <TouchableOpacity onPress={this.moveToProfile}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-person" : "ios-person"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-settings" : "ios-settings"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Setting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

// export default SideDrawer;

const mapStateToProps = state => {
  return {
    naviationName: state.navigationStore.screenName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveCurrentScreen: navigationName =>
      dispatch(saveCurrentNavigation(navigationName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);

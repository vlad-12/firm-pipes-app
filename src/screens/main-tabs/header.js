import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.props.onToggleSideBar}
        >
          {Platform.OS === "android" ? (
            <Icon
              name="md-more"
              size={30}
              color="lightgrey"
              style={{ marginLeft: 20 }}
            />
          ) : (
            <Icon name="ios-more" size={30} color="lightgrey" />
          )}
        </TouchableOpacity>
        <Image
          style={styles.logoImage}
          source={require("../../assets/img/main-logo.png")}
        />
        <View style={{ width: 10, margin: 10 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex"
  },
  logoImage: {
    width: 160,
    height: 35,
    marginLeft: "auto",
    paddingRight: 30,
    marginRight: "auto"
  },
  iconContainer: {
    // alignItems: "center"
    justifyContent: "center"
  }
});

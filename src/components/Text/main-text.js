import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class MainText extends Component {
  render() {
    return (
      <Text style={[styles.containText, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  containText: {
    // fontFamily: "Montserrat"
  }
});

export default MainText;

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MainText from "@Component/Text/main-text";

class TitleText extends Component {
  render() {
    return (
      <MainText style={styles.containText}>{this.props.children}</MainText>
    );
  }
}

const styles = StyleSheet.create({
  containText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#777EB0"
  }
});

export default TitleText;

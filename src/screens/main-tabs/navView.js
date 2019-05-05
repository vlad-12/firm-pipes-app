import React from "react";
import { View, Text, StyleSheet, ViewStyle, Image } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderColor: "black",
    borderWidth: 1
  },
  navText: {
    backgroundColor: "#001327",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 7,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 8,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "#000"
  }
});

const NavView = () => (
  <View style={styles.containerStyle}>
    <Image
      style={{ width: 160, height: 35 }}
      source={require("../../assets/img/main-logo.png")}
    />
  </View>
);

export default NavView;

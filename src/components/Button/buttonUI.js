import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";
import MainText from "@Component/Text/main-text";

const buttonUI = props => {
  const content = (
    <View
      style={[
        styles.button,
        props.style
        // { backgroundColor: props.color, width: props.width }
      ]}
    >
      <MainText style={styles.buttonText}>{props.children}</MainText>
    </View>
  );
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    // padding: 10,
    margin: 5,
    borderRadius: 3,
    height: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "400"
    // fontFamily: "'Montserrat', sans-serif"
  }
});

export default buttonUI;

import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";

var getInitials = function(string) {
  var names = string.split(" "),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export default class PickAvatar extends Component {
  state = {
    pickedImaged: null
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image" }, res => {
      if (res.didCancel) {
        alert("User cancelled!");
      } else if (res.error) {
        alert("res.error");
      } else {
        this.setState({ pickedImaged: { uri: res.uri } });
      }
    });
  };

  render() {
    const name = getInitials(this.props.name);
    return (
      <View style={styles.pickImageContainer}>
        {this.state.pickedImaged === null ? (
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        ) : (
          <Image source={this.state.pickedImaged} style={styles.previewImage} />
        )}
        <TouchableOpacity onPress={this.pickImageHandler}>
          <Text style={styles.changeText}> Change photo </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  changeText: {
    color: "#777EB0",
    fontSize: 18,
    fontWeight: "400",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#777EB0",
    marginLeft: 30
  },
  previewImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  nameContainer: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: "rgba(34, 166, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center"
  },
  nameText: {
    color: "#22A6FF",
    fontSize: 36,
    fontWeight: "800"
  },
  pickImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 20
  }
});

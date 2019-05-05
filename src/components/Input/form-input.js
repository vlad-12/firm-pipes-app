import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import MainText from "@Component/Text/main-text";

export default class FormInput extends Component {
  onChange = value => {
    this.props.onChange(this.props.data.name, value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formText}> {this.props.data.placeholder} </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={[styles.textInput, { flex: 1 }]}
            value={this.props.data.value}
            name={this.props.data.name}
            onChangeText={value => this.onChange(value)}
            secureTextEntry={this.props.data.secureTextEntry}
          />
        </View>
        {this.props.data.validate && (
          <MainText style={styles.validateText}>
            This field is required
          </MainText>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 15
  },
  formText: {
    fontSize: 16,
    color: "#777EB0",
    fontWeight: "400",
    marginBottom: 8
  },
  textInput: {
    fontSize: 16,
    color: "rgb(92, 94, 104)"
  },
  textContainer: {
    height: 40,
    borderColor: "rgb(235, 235, 242)",
    borderWidth: 1,
    borderRadius: 3,
    width: 300,
    paddingLeft: 10
  },
  validateText: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10
  }
});

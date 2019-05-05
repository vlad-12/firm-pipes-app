import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MainText from "@Component/Text/main-text";

class authInput extends Component {
  onChange = value => {
    this.props.onChange(this.props.data.name, value);
  };

  render() {
    return (
      <View>
        <View style={[styles.SectionStyle, this.props.style]}>
          {this.props.icon && (
            <Icon
              style={styles.IconStyle}
              name={this.props.iconName}
              size={20}
              color="#fff"
            />
          )}
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder={this.props.data.placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff"
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
  input: {
    color: "white",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "400"
    // fontFamily: "'Montserrat', sans-serif"
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    height: 45,
    borderWidth: 0.5,
    borderRadius: 3,
    margin: 10
  },
  IconStyle: {
    paddingLeft: 10,
    alignItems: "center"
  },
  validateText: {
    color: "red",
    fontSize: 12,
    marginLeft: 15
  }
});

export default authInput;

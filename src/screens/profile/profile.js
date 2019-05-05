import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import TitleText from "@Component/Text/titleText";
import ButtonUI from "@Component/Button/buttonUI";
import FormInput from "@Component/Input/form-input";
import PickAvatar from "@Component/PickAvatar/pick-avatar";
import MainText from "@Component/Text/main-text";
import { saveUserProfile } from "../../store/actions/front-end-state-actions/profile";

class ProfileScreen extends Component {
  state = {
    email: {
      name: "email",
      placeholder: "Email",
      value: "",
      validate: false,
      secureTextEntry: false
    },
    phone: {
      name: "phone",
      placeholder: "Phone",
      value: "",
      validate: false,
      secureTextEntry: false
    },
    confirmPassword: {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      value: "",
      validate: false,
      secureTextEntry: true
    },
    password: {
      name: "password",
      placeholder: "Password",
      value: "",
      validate: false,
      secureTextEntry: true
    },
    passwordNotMatch: false
  };

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

  onToggleSideBar = () => {
    this.props.navigator.toggleDrawer({
      side: "right"
    });
  };

  onTextInputChange = (name, value) => {
    const item = this.state[name];
    item.value = value;
    if (value !== "") item.validate = false;
    this.setState({ [name]: item });
  };

  saveProfile = () => {
    if (
      this.state.email.value !== "" &&
      this.state.phone.value != "" &&
      this.state.password.value != "" &&
      this.state.confirmPassword.value != ""
    ) {
      if (this.state.password.value !== this.state.confirmPassword.value) {
        this.setState({ passwordNotMatch: true });
      } else {
        const profile = {
          email: this.state.email.value,
          phone: this.state.phone.value,
          password: this.state.password.value
        };
        
        console.log(profile);
        // this.props.navigator.push({
        //   screen: "partypypes.NotificationScreen",
        //   title: "Profile"
        // });
      }
      return;
    }
    if (this.state.email.value === "") {
      const { email } = this.state;
      email.validate = true;
      this.setState({ email });
    }
    if (this.state.phone.value === "") {
      const { phone } = this.state;
      phone.validate = true;
      this.setState({ phone });
    }
    if (this.state.password.value === "") {
      const { password } = this.state;
      password.validate = true;
      this.setState({ password, passwordNotMatch: false });
    }
    if (this.state.confirmPassword.value === "") {
      const { confirmPassword } = this.state;
      confirmPassword.validate = true;
      this.setState({ confirmPassword, passwordNotMatch: false });
    }
  };

  render() {
    const { profile } = this.props;
    return (
      <View>
        {/* <Header onToggleSideBar={this.onToggleSideBar} /> */}
        <ScrollView style={styles.root}>
          <TitleText>{profile.name}</TitleText>
          <PickAvatar name={profile.name} />
          <MainText style={styles.subTitle}>Personal details</MainText>
          <FormInput
            data={this.state.email}
            onChange={this.onTextInputChange}
          />
          <FormInput
            data={this.state.phone}
            onChange={this.onTextInputChange}
          />
          <MainText style={styles.subTitle}>Password change</MainText>
          {this.state.passwordNotMatch && (
            <MainText style={styles.validateText}>Password not match</MainText>
          )}
          <FormInput
            data={this.state.password}
            onChange={this.onTextInputChange}
          />
          <FormInput
            data={this.state.confirmPassword}
            onChange={this.onTextInputChange}
          />
          <View style={styles.saveContainer}>
            <ButtonUI style={styles.saveButton} onPress={this.saveProfile}>
              Save
            </ButtonUI>
            <MainText style={styles.cancelText}>Cancel</MainText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 10,
    paddingTop: 20
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
    marginTop: 20,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: "#22A6FF",
    ...Platform.select({
      ios: {
        width: 150,
        borderColor: "#22A6FF",
        borderWidth: 1
      },
      android: {
        width: "35%"
      }
    })
  },
  imagePicker: {
    height: "20%"
  },
  cancelText: {
    color: "#777EB0",
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#777EB0",
    marginLeft: 30
  },
  saveContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 20
  },
  validateText: {
    color: "red",
    fontSize: 12
  }
});

const mapStateToProps = state => {
  return {
    profile: state.profile.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveUserProfile: profile => dispatch(saveUserProfile(profile))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);

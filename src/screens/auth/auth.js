import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import startMainTabs from "../main-tabs/start-main-tabs";
import backgroundImage from "../../assets/img/background.png";
import logoImage from "../../assets/img/main-logo.png";
import successImage from "../../assets/img/icon/success-fl.png";
import { singleScreenApplication } from "../../styles/navigatorStyles";
import ButtonUI from "@Component/Button/buttonUI";
import MainText from "@Component/Text/main-text";
import AuthInput from "@Component/AuthInput/auth-input";

export default class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    resetWindow: false,
    resetSuceed: false,
    passwordNotMatch: false,
    email: {
      name: "email",
      placeholder: "Email",
      value: "",
      validate: false,
      secureTextEntry: false
    },
    password: {
      name: "password",
      placeholder: "Password",
      value: "",
      validate: false,
      secureTextEntry: true
    },
    confirmPassword: {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      value: "",
      validate: false,
      secureTextEntry: true
    },
    newPassword: {
      name: "newPassword",
      placeholder: "New Password",
      value: "",
      validate: false,
      secureTextEntry: true
    }
  };

  static navigatorStyle = singleScreenApplication;

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    if (this.state.email.value != "" && this.state.password.value != "") {
      startMainTabs();
    }
    if (this.state.email.value == "") {
      let email = this.state.email;
      email.validate = true;
      this.setState({ email });
    }
    if (this.state.password.value == "") {
      let password = this.state.password;
      password.validate = true;
      this.setState({ password });
    }
  };

  setDefaultState = name => {
    const data = this.state[name];
    data.value = "";
    data.validate = false;
    this.setState({ [name]: data });
  };

  moveToReset = () => {
    this.setDefaultState("email");
    this.setDefaultState("password");
    this.setState({ resetWindow: true });
  };

  resetPassword = () => {
    if (
      this.state.newPassword.value != "" &&
      this.state.confirmPassword.value != ""
    ) {
      if (this.state.newPassword.value != this.state.confirmPassword.value)
        this.setState({ passwordNotMatch: true });
      else {
        this.setDefaultState("newPassword");
        this.setDefaultState("confirmPassword");
        this.setState({ resetSuceed: true, passwordNotMatch: false });
      }
      return;
    }
    if (this.state.newPassword.value == "") {
      let newPassword = this.state.newPassword;
      newPassword.validate = true;
      this.setState({ newPassword, passwordNotMatch: false });
    }
    if (this.state.confirmPassword.value == "") {
      let confirmPassword = this.state.confirmPassword;
      confirmPassword.validate = true;
      this.setState({ confirmPassword, passwordNotMatch: false });
    }
  };

  onTextInputChange = (name, value) => {
    const item = this.state[name];
    item.value = value;
    if (value !== "") item.validate = false;
    this.setState({ [name]: item });
  };

  render() {
    const { resetWindow, resetSuceed } = this.state;
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image
            source={logoImage}
            style={styles.logoImage}
            resizeMode={"contain"}
          />
          {!resetWindow ? (
            <React.Fragment>
              <MainText style={styles.authTitleText}>
                Staff portal. Sign in to continue
              </MainText>
              <AuthInput
                style={styles.authInput}
                onChange={this.onTextInputChange}
                data={this.state.email}
                iconName="user"
                icon
              />
              <AuthInput
                style={styles.authInput}
                iconName="lock"
                data={this.state.password}
                onChange={this.onTextInputChange}
                icon
              />
              <ButtonUI style={styles.authButton} onPress={this.loginHandler}>
                Log in
              </ButtonUI>
              <View style={styles.resetTextContainer}>
                <MainText style={styles.authContext}>Lost password? </MainText>
                <TouchableOpacity onPress={this.moveToReset}>
                  <MainText style={styles.authContext}>Reset it</MainText>
                </TouchableOpacity>
              </View>
            </React.Fragment>
          ) : !resetSuceed ? (
            <React.Fragment>
              <MainText style={styles.authTitleText}>
                Don't worry. You'll have a new a new{"\n"}
                password in a minute.
              </MainText>
              {this.state.passwordNotMatch && (
                <MainText style={styles.validateText}>
                  Password not match
                </MainText>
              )}
              <AuthInput
                style={styles.authInput}
                data={this.state.newPassword}
                onChange={this.onTextInputChange}
              />
              <AuthInput
                style={styles.authInput}
                onChange={this.onTextInputChange}
                data={this.state.confirmPassword}
              />
              <ButtonUI style={styles.authButton} onPress={this.resetPassword}>
                Reset Password
              </ButtonUI>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <MainText style={styles.authTitleText}>
                Password changed!
              </MainText>
              <View style={styles.resetSuceed}>
                <Image
                  style={styles.successImage}
                  source={successImage}
                  resizeMode={"contain"}
                />
                <MainText style={styles.authContext}>Success</MainText>
              </View>
              <ButtonUI
                style={styles.authButton}
                onPress={() =>
                  this.setState({ resetWindow: false, resetSuceed: false })
                }
              >
                Back to Login
              </ButtonUI>
            </React.Fragment>
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20%",
    ...Platform.select({
      ios: {
        paddingBottom: "30%"
      },
      android: {
        paddingBottom: "10%"
      }
    })
  },
  logoImage: {
    width: "80%",
    height: "15%"
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
    backgroundColor: "#040b41"
  },
  successImage: {
    marginBottom: 10
  },
  resetTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  resetSuceed: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    borderWidth: 0.5,
    borderRadius: 3,
    margin: 10,
    paddingTop: 16,
    paddingBottom: 16,
    width: "70%"
  },
  authTitleText: {
    height: "15%",
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center"
  },
  authContext: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center"
  },
  authInput: {
    ...Platform.select({
      ios: {
        width: 250
      },
      android: {
        width: "70%"
      }
    })
  },
  authButton: {
    backgroundColor: "#22A6FF",
    ...Platform.select({
      ios: {
        width: 250,
        borderColor: "#22A6FF",
        borderWidth: 1
      },
      android: {
        width: "70%"
      }
    }),
    marginTop: "5%"
  },
  validateText: {
    color: "red",
    fontSize: 12,
    marginLeft: 15
  }
});

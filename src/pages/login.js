/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Logo from "../components/logo";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      loginError: ""
    };
  }

  startSession = async () => {
    await AsyncStorage.setItem("isLoggedIn", "Yes");
  };

  loginUser = () => {
    const { userEmail, userPassword } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == "") {
      alert("Please enter Email address");
      //this.setState({ loginError: "Please enter Email address" });
      //alert(this.state.loginError);
    } else if (reg.test(userEmail) === false) {
      alert("Email is Not Correct");
      //this.setState({ loginError: "Email is Not Correct" });
      //alert(this.state.loginError);
      return false;
    } else if (userPassword == "") {
      alert("Please enter password");
      //this.setState({ loginError: "Please enter password" });
      //alert(this.state.loginError);
    } else {
      fetch("https://infohtechict.co.ke/apps/boukd//login.php", {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: userEmail,
          password: userPassword
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == "ok") {
            // redirect to Dashboard
            //alert("Successfully Login");
            //await AsyncStorage.setItem("isLoggedIn", "1");
            this.startSession();
            this.props.navigation.navigate("Dashboard");
          } else {
            alert("Wrong Login Details");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter email"
            placeholderTextColor="rgba(255,255,255,0.8)"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={userEmail => this.setState({ userEmail })}
            onSubmitEditing={() => this.refs.txtPassword.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter password"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={userPassword => this.setState({ userPassword })}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={this.loginUser}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>You don't have an account yet?</Text>
          <Text
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 250,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255,255,255,0.7)"
  },
  buttonContainer: {
    width: 250,
    backgroundColor: "#92ca2c",
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#ffffff",
    borderWidth: 2
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  },
  signupTextCont: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
  signupButton: {
    color: "yellow",
    fontSize: 16,
    fontWeight: "500"
  }
});

/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Logo from "../components/logo";
import Form from "../components/form";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>You don't have an account yet?</Text>
          <Text style={styles.signupButton}>Sign up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Text style={styles.title}> </Text>
                <Image
                  style={styles.logo}
                  source={require("../images/bookd-logo.png")}
                />
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username/email"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>SIGN IN :</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(32, 53, 70)",
    flex: 1,
    flexDirection: "column"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 150,
    height: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff"
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 5,
    borderRadius: 20
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  }
});

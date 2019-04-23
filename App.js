/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Button, Text } from "react-native";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Splash from "./src/pages/splash";
import Login from "./src/pages/login";
import Signup from "./src/pages/signup";
import Routes from "./src/routes";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4c1037" barStyle="light-content" />
        <AppContainer />
      </View>
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash />
        <View style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            Proceede to login
          </Text>
        </View>
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const SplashSwitchNavigator = createSwitchNavigator({
  welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardScreen }
});

const AppContainer = createAppContainer(SplashSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1
  },
  buttonCont: {
    backgroundColor: "red"
  },
  buttonContainer: {
    backgroundColor: "#4c1037",
    paddingVertical: 5,
    textAlign: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18
  }
});

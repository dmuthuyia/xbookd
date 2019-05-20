/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import BoukdLogin from "./login";
import BoukdSignup from "./signup";
import Dashboard from "./dashboard";

//--------NAVIGATORS ---------------------------------------------------

const loginwitchNavigator = createSwitchNavigator(
  {
    Login: { screen: BoukdLogin },
    Signup: { screen: BoukdSignup },
    Dashboard: { screen: Dashboard }
  },
  {
    initialRouteName: "Login"
  }
);

//--------NAVIGATOR CONTAINER 1 ---------------------------------------------------

const loginContainer = createAppContainer(loginwitchNavigator);
export default loginContainer;

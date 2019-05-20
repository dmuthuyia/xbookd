import React, { Component } from "react";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import SplashScreen from "./splash";
import BoukdLogin from "./loginnav";
import BoukdDashboard from "./dashboard";

//--------NAVIGATORS ---------------------------------------------------

const splashwitchNavigator = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Login: { screen: BoukdLogin },
    BoukdDashboard: { screen: BoukdDashboard }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

//--------NAVIGATOR CONTAINER 1 ---------------------------------------------------

const splashContainer = createAppContainer(splashwitchNavigator);
export default splashContainer;

/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Musician from "./musician";
import DJ from "./dj";
import Dancer from "./dancer";
import Mc from "./mc";
import Actor from "./actor";
import Poet from "./poet";
import Runway from "./runway";

const Drawer = createMaterialTopTabNavigator({
  Ho: { screen: Musician },
  DJ: { screen: DJ },
  Da: { screen: Dancer },
  Mc: { screen: Mc },
  Ac: { screen: Actor },
  Po: { screen: Poet },
  Mo: { screen: Runway }
});

const PContainer = createAppContainer(Drawer);

export default PContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
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

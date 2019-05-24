/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
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
import Assets from "../assets/assets";

const Drawer = createMaterialTopTabNavigator(
  {
    Musician: {
      screen: Musician,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Assets.musicianIcon1}
            style={{ height: 30, width: 30 }}
          />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Dj: {
      screen: DJ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.djIcon1} style={{ height: 30, width: 30 }} />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Dancer: {
      screen: Dancer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Assets.dancerIcon1}
            style={{ height: 30, width: 30 }}
          />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Mc: {
      screen: Mc,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.mcIcon1} style={{ height: 30, width: 30 }} />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Actor: {
      screen: Actor,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.actorIcon1} style={{ height: 30, width: 30 }} />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Poet: {
      screen: Poet,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.poetIcon1} style={{ height: 30, width: 30 }} />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    },
    Runway: {
      screen: Runway,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.brandIcon1} style={{ height: 30, width: 30 }} />
        ),
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "#D3D3D3",
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: "#4c1037",
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "orange"
          }
        }
      }
    }
  },
  {
    navigationOptions: {
      tabBarLabel: "u",
      tabBarIcon: ({ tintColor }) => (
        <Image source={Assets.boukdwhipup1} style={{ height: 20, width: 20 }} />
      ),
      tabBarOptions: {
        activeTintColor: "orange",
        inactiveTintColor: "#D3D3D3",
        style: {
          backgroundColor: "blue",
          borderTopColor: "#D3D3D3"
        },
        indicatorStyle: {
          backgroundColor: "red"
        }
      }
    }
  }
);

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

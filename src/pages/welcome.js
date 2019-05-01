import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Platform, Dimensions } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import BoukdLogin from "./login";
import BoukdSignup from "./signup";
import Book from "./book";
import WhereAt from "./whereat";
import WhipUp from "./whipup";
import Livestream from "./livestream";
import Assets from "../assets/assets";

import Profile from "./profile";
import Places from "./places";
import Calendar from "./calendar";
import Settings from "./settings";
import AboutUs from "./about";

import MenuDrawer from "./MenuDrawer";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <AppContainer />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.TextStyle}> Dashboard </Text>
        </View>
      </View>
    );
  }
}

class BookWrap extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Book />
      </View>
    );
  }
}

class LivestreamWrap extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Livestream />
      </View>
    );
  }
}

class WhereAtWrap extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <WhereAt />
      </View>
    );
  }
}

class whipUpWrap extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <WhipUp />
      </View>
    );
  }
}

//--------NAVIGATORS ---------------------------------------------------

//--------TAB NAVIGATOR 1 ---------------------------------------------------

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Book: { screen: BookWrap },
    "Where At": { screen: WhereAtWrap },
    Livestream: { screen: LivestreamWrap },
    "whip up": { screen: whipUpWrap }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: "blue"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      };
    }
  }
);

//--------STACK NAVIGATOR 1 ---------------------------------------------------

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{ width: 40, height: 40 }}
                source={Assets.bkdmenu3}
                name="ios-list"
                size={30}
              />
            </TouchableOpacity>
          </View>
        )
      };
    }
  }
);

//--------DRAWER NAVIGATOR 1 ---------------------------------------------------

const BoukedAppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    /*screen: DashboardTabNavigator*/
    screen: DashboardStackNavigator
  },
  Profile: { screen: WhereAtWrap },
  Locals: { screen: LivestreamWrap },
  calendar: { screen: whipUpWrap },
  Settings: { screen: whipUpWrap },
  "About us": { screen: whipUpWrap }
});

//--------DRAWER NAVIGATOR 2 ---------------------------------------------------

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      /*screen: DashboardTabNavigator*/
      screen: DashboardStackNavigator
    },

    Profile: {
      screen: Profile
    },
    Places: {
      screen: Places
    },
    Calendar: {
      screen: Calendar
    },
    Settings: {
      screen: Settings
    },
    AboutUs: {
      screen: AboutUs
    }
  },
  DrawerConfig
);

//--------SWITCH NAVIGATOR 1 ---------------------------------------------------

const boukdwitchNavigator = createSwitchNavigator({
  Login: { screen: BoukdLogin },
  Dashboard: { screen: DrawerNavigator },
  Signup: { screen: BoukdSignup }
});

//--------NAVIGATOR CONTAINER 1 ---------------------------------------------------

const AppContainer = createAppContainer(boukdwitchNavigator);

//--------STYLES ----------------------------------------------------------------

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1
  },

  TextStyle: {
    fontSize: 23,
    textAlign: "center",
    color: "#000"
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
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
    paddingHorizontal: 10
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
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
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
    paddingHorizontal: 10
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

import React, { Component } from "react";

import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
import Tickets from "./ticket";

import MenuDrawer from "./MenuDrawer";

class Dashboad extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Book: {
      screen: Book,
      navigationOptions: {
        tabBarLabel: "Book",
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.boukdbook1} style={{ height: 20, width: 20 }} />
        ),
        tabBarOptions: {
          activeTintColor: "orange",
          inactiveTintColor: "#D3D3D3",
          style: {
            backgroundColor: "#4c1037",
            borderTopWidth: 3,
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "red"
          }
        }
      }
    },
    WhereAt: {
      screen: WhereAt,
      navigationOptions: {
        tabBarLabel: "Where At",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Assets.boukdwhereat1}
            style={{ height: 20, width: 20 }}
          />
        ),
        tabBarOptions: {
          activeTintColor: "orange",
          inactiveTintColor: "#D3D3D3",
          style: {
            backgroundColor: "#4c1037",
            borderTopWidth: 3,
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "red"
          }
        }
      }
    },
    Livestream: {
      screen: Livestream,
      navigationOptions: {
        tabBarLabel: "Livestream",
        tabBarIcon: ({ tintColor }) => (
          <Image source={Assets.boukdLive} style={{ height: 20, width: 20 }} />
        ),
        tabBarOptions: {
          activeTintColor: "orange",
          inactiveTintColor: "#D3D3D3",
          style: {
            backgroundColor: "#4c1037",
            borderTopWidth: 3,
            borderTopColor: "#4c1037"
          },
          indicatorStyle: {
            backgroundColor: "red"
          }
        }
      }
    },
    whipUp: {
      screen: WhipUp,
      navigationOptions: {
        tabBarLabel: "whip up",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Assets.boukdwhipup1}
            style={{ height: 20, width: 20 }}
          />
        ),
        tabBarOptions: {
          activeTintColor: "orange",
          inactiveTintColor: "#D3D3D3",
          style: {
            backgroundColor: "#4c1037",
            borderTopWidth: 3,
            borderTopColor: "#D3D3D3"
          },
          indicatorStyle: {
            backgroundColor: "red"
          }
        }
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: "Boukd" + " - " + routeName,
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
        ),
        headerRight: (
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{ width: 40, height: 40 }}
                source={Assets.bkdsearch1}
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
      //screen: DashboardTabNavigator
      screen: DashboardStackNavigator
    },
    Profile: {
      screen: Profile
    },
    Places: {
      screen: Places
    },
    Tickets: {
      screen: Tickets
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
  DrawerNav: { screen: DrawerNavigator }
});

//--------NAVIGATOR CONTAINER 1 ---------------------------------------------------

const AppContainer = createAppContainer(boukdwitchNavigator);

export default AppContainer;

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
  },
  btmtab: {
    backgroundColor: "red"
  }
});

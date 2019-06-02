import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  BackHandler
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "react-navigation";
import Assets from "../assets/assets";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  componentWillMount() {
    //BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  userLogout = () => {
    Alert.alert(
      "Exit Bouk'd",
      "Do you want to exit?",
      [
        { text: "No, go back", style: "cancel" },
        { text: "Go to Login", onPress: this.toLogin },
        { text: "Yes, Exit", onPress: this.toExit }
      ],
      { cancelable: false }
    );
    return true;
  };

  toLogin = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate("Login");
    } catch (error) {
      alert("error");
    }
  };

  toExit = async () => {
    try {
      await AsyncStorage.clear();
      BackHandler.exitApp();
    } catch (error) {
      alert("error");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.drawerHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
            <Image
              style={{ width: 40, height: 40, margin: 5 }}
              source={Assets.boukdHome2}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Boukd: "hire my art"</Text>
        </View>
        <ScrollView style={styles.scroller}>
          <View style={{ backgroundColor: "red" }}>
            <View style={styles.topLinks}>
              <View style={styles.profile}>
                <View style={styles.imgView}>
                  <Image
                    style={styles.profilePicture}
                    source={Assets.missing}
                  />
                </View>
                <View style={styles.profileText}>
                  <Text style={styles.name}>Boukd</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomLinks}>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.profile1}
                  style={styles.drawerico}
                />
                {this.navLink("Profile", "Profile")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.places1}
                  style={styles.drawerico}
                />
                {this.navLink("Places", "Places")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.boukdticket1}
                  style={styles.drawerico}
                />
                {this.navLink("Tickets", "Buy tickets")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.calendar1}
                  style={styles.drawerico}
                />
                {this.navLink("Calendar", "Calendar")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.settings1}
                  style={styles.drawerico}
                />
                {this.navLink("Settings", "Settings")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.about1}
                  style={styles.drawerico}
                />
                {this.navLink("AboutUs", "About")}
              </View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.img}
                  source={Assets.boukdexit1}
                  style={styles.drawerico}
                />
                <TouchableOpacity onPress={this.userLogout}>
                  <Text style={styles.link}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>Boukd © 2019</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  scroller: {
    flex: 1,
    backgroundColor: "purple",
    color: "red"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#777777",
    height: 100
  },
  profileText: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: "white",
    textAlign: "left"
  },
  imgView: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 2
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  topLinks: {
    height: 60,
    backgroundColor: "blue"
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: "#4c1037",
    paddingTop: 10,
    paddingBottom: 450
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 1,
    margin: 5,
    textAlign: "left",
    color: "#cac0c0"
  },
  footer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
  version: {
    flex: 1,
    textAlign: "right",
    marginRight: 20,
    color: "gray"
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16
  },
  drawerico: {
    width: 30,
    height: 30,
    margin: 5
  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "white"
  },
  drawerHeader: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  headerText: {
    alignItems: "center",
    color: "blue",
    fontSize: 18
  },
  profilePicture: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 5
  }
});

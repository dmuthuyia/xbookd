import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  AsyncStorage
} from "react-native";

import Assets from "../assets/assets";

const h = Dimensions.get("window").height;
const height = h * 2;

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    //this._loadData();
  }
  circle = new Animated.Value(0);
  logo = new Animated.Value(0);
  title = new Animated.Value(0);
  box1 = new Animated.Value(0);

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.circle, {
        toValue: 1,
        duration: 2000
      }),

      Animated.timing(this.logo, {
        toValue: 1,
        duration: 1000
      }),

      Animated.timing(this.title, {
        toValue: 1,
        duration: 2000
      }),

      Animated.timing(this.box1, {
        toValue: 1,
        duration: 2000
      })
    ]).start();
  }

  _loadData = async () => {
    const isLoggedIn = 1;
    //await AsyncStorage.getItem("isLogged");
    this.props.navigation.navigate(isLoggedIn !== 1 ? "Login" : "Dashboard");
  };

  render() {
    const translateY = this.circle.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0]
    });

    const tranY = this.logo.interpolate({
      inputRange: [0, 1],
      outputRange: [h, 0]
    });

    const opacity = this.title.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      color: "green"
    });

    const opacity2 = this.title.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

    const paintxy1 = this.box1.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

    return (
      <View style={styles.con}>
        <Animated.Image
          source={Assets.logo}
          style={[styles.icon, { transform: [{ translateY: tranY }] }]}
        />
        <Animated.View style={[styles.box1, { transform: [{ translateY }] }]} />
        <Animated.Text style={{ color: "#fff", fontSize: 50, opacity }}>
          boukd
        </Animated.Text>
        <Text style={{ color: "#fff", fontSize: 14 }}>Hire my art</Text>
        <Animated.Text style={{ color: "#fff", fontSize: 12, opacity }}>
          www.boukd.com
        </Animated.Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this._loadData}>
            ENTER
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titles: {
    fontWeight: "bold",
    fontSize: 18
  },
  circle: {
    width: height,
    height,
    backgroundColor: "blue",
    borderRadius: h,
    position: "absolute",
    zIndex: -1,
    borderWidth: 12,
    borderColor: "red"
  },
  box1: {
    width: height,
    height,
    backgroundColor: "blue",
    position: "absolute",
    zIndex: -1,
    borderWidth: 12,
    borderColor: "#4c1037"
  },
  icon: {
    width: 100,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff"
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

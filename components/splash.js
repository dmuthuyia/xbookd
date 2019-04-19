import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import Assets from "../assets/assets";

const h = Dimensions.get("window").height;
const height = h * 2;

export default class SplashsScreen2 extends Component {
  circle = new Animated.Value(0);
  logo = new Animated.Value(0);
  title = new Animated.Value(0);

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
      })
    ]).start();
  }

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

    return (
      <View style={styles.con}>
        <Animated.Image
          source={Assets.logo}
          style={[styles.icon, { transform: [{ translateY: tranY }] }]}
        />
        <Animated.View
          style={[styles.circle, { transform: [{ translateY }] }]}
        />
        <Animated.Text style={{ color: "#fff", fontSize: 50, opacity }}>
          bookd
        </Animated.Text>
        <Animated.Text style={{ color: "#fff", fontSize: 14, opacity2 }}>
          Hire my art
        </Animated.Text>
        <Animated.Text style={{ color: "#fff", fontSize: 12, opacity }}>
          www.bookd.com
        </Animated.Text>
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
    zIndex: -1
  },
  icon: {
    width: 100,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

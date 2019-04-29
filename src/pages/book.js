/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";
//import console = require("console");

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}>
        <Image
          style={{ width: 60, height: 60, margin: 5 }}
          source={{
            uri: "https://infohtechict.co.ke/apps/boukd/images/" + item.mypic
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomEndRadius: 20,
            marginRight: 5,
            backgroundColor: "#FAF6FB"
          }}
        >
          <Text style={{ fontSize: 18, color: "blue", marginBottom: 1 }}>
            User name: {item.UserName}
          </Text>
          <Text style={{ fontSize: 14, color: "green" }}>
            email: {item.email}
          </Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    const url = "https://infohtechict.co.ke/apps/boukd/users.php";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
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

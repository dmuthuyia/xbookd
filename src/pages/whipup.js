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
  ActivityIndicator,
  Image,
  ToastAndroid,
  Button
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Assets from "../assets/assets";

export default class WhipUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 20,
          margin: 4,
          backgroundColor: "#eeedf9"
        }}
        //onPress={() => ToastAndroid.show(item.UserName, ToastAndroid.SHORT)}
      >
        <View style={{ justifyContent: "center", alignItems: "stretch" }}>
          <Image
            style={{
              width: 60,
              height: 60,
              margin: 5,
              borderRadius: 30
            }}
            source={{
              uri:
                "https://infohtechict.co.ke/apps/boukd/images/avatar/" +
                item.mypic
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              backgroundColor: "#e2e2f7",
              borderTopRightRadius: 50,
              alignSelf: "flex-start",
              paddingLeft: 5,
              paddingRight: 20
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#05087f",
                marginBottom: 1
              }}
            >
              {item.UserName}
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: "black", padding: 2 }}>
            {item.description}
          </Text>
          <View style={styles.comReactWrapper}>
            <View style={styles.comReactButton}>
              <Image source={Assets.boukdlove1} style={styles.drawerico} />
              <Text>10</Text>
            </View>
            <View style={styles.comReactButton}>
              <Image source={Assets.boukdhate1} style={styles.drawerico} />
              <Text>1</Text>
            </View>
            <View style={styles.comReactButton}>
              <Image source={Assets.boukdcomment1} style={styles.drawerico} />
              <Text>23</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
    );
  };

  componentDidMount() {
    const url = "https://infohtechict.co.ke/apps/boukd/whipup.php";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#330066" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          //keyExtractor={(item, index) => "list-item-${index}"}
          keyExtractor={(item, index) => index.toString()}
          //ItemSeparatorComponent={this.renderSeparator}
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
  },
  comReactWrapper: {
    width: 500,
    flexDirection: "row",
    borderColor: "#fff",
    borderTopWidth: 2,
    borderLeftWidth: 2
  },
  comReactButton: {
    color: "green",
    fontSize: 12,
    width: 60,
    flexDirection: "row"
  },
  drawerico: {
    width: 15,
    height: 15,
    margin: 5,
    opacity: 0.6
  }
});

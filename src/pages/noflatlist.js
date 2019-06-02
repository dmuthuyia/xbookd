import React, { Component } from "react";
import {
  AppRegistry,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

var REQUEST_URL = "https://facebook.github.io/react-native/movies.json";
//var REQUEST_URL = "https://infohtechict.co.ke/apps/boukd/whipup.php";

export default class WPReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      isLoading: true
    };
    //Using ES6 we need to bind methods to access 'this'
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
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
    //this.state.dataSource.movies is the array you have to iterate
    contents = this.state.dataSource.map(item => {
      //We need to return the corresponding mapping for each item too.
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 3,
            borderRadius: 20,
            margin: 5,
            backgroundColor: "#efecee"
          }}
          //onPress={() => ToastAndroid.show(item.UserName, ToastAndroid.SHORT)}
        >
          <Image
            style={{ width: 60, height: 60, margin: 5, borderRadius: 30 }}
            source={{
              uri:
                "https://infohtechict.co.ke/apps/boukd/images/avatar/" +
                item.mypic
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 12, color: "#05087f", marginBottom: 1 }}>
              {item.UserName}
            </Text>
            <Text style={{ fontSize: 14, color: "#4c1037", padding: 2 }}>
              {item.description}
            </Text>
          </View>
        </View>
      );
    });
    return <View style={styles.container}>{contents}</View>;
  }
}

var Dimensions = require("Dimensions");

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

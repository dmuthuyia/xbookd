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
  ScrollView,
  ImageBackground
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Assets from "../assets/assets";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numColumns}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return data;
};
const numColumns = 3;

export default class Dancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }

  renderItem = ({ item }) => {
    //if (item.empty === true) {
    //return <View style={styles.invisibleItem} />;
    //}
    return (
      <TouchableOpacity
        style={{ flex: 1, marginBottom: 3 }}
        onPress={() => ToastAndroid.show(item.UserName, ToastAndroid.SHORT)}
      >
        <View
          style={{
            margin: 3,
            height: 150,
            backgroundColor: "#FFEFD5",
            opacity: 0.9,
            borderRadius: 10
          }}
        >
          <View style={{ flex: 1, padding: 3 }}>
            <Image
              style={{ flex: 1 }}
              resizeMode="cover"
              source={{
                uri:
                  "https://infohtechict.co.ke/apps/boukd/images/profile/" +
                  item.skillprofile_img
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "blue",
                marginBottom: 1
              }}
            >
              {item.UserName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
    );
  };

  componentDidMount() {
    const url = "https://infohtechict.co.ke/apps/boukd/dancer.php";
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
        <ScrollView>
          <FlatList
            data={formatData(this.state.dataSource, numColumns)}
            renderItem={this.renderItem}
            //keyExtractor={(item, index) => "list-item-${index}"}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            numColumns={numColumns}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#adb6ee",
    flex: 1
  },
  invisibleItem: {
    backgroundColor: "transparent"
  }
});

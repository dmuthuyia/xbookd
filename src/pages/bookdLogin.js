import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Logo from "../components/logo";

export default class sample2 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <AppContainer />
      </View>
    );
  }
}

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter username/email"
            placeholderTextColor="rgba(255,255,255,0.8)"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => this.refs.txtPassword.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter password"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
            ref={"txtPassword"}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Dashboard")}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>You don't have an account yet?</Text>
          <Text
            style={styles.signupButton}
            onPress={() => alert("button pressed")}
          >
            Sign up
          </Text>
        </View>
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

class Book extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Book</Text>
      </View>
    );
  }
}

class Livestream extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Livestream </Text>
      </View>
    );
  }
}

class WhereAt extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Where At</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Book,
    WhereAt,
    Livestream
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

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon name="ios-list" size={30} />
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    /*screen: DashboardTabNavigator*/
    screen: DashboardStackNavigator
  }
});

const bookdwitchNavigator = createSwitchNavigator({
  welcome: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(bookdwitchNavigator);

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
  }
});

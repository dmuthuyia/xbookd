import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/login";
import Signup from "./pages/signup";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={Signup} title="Register" />
        </Stack>
      </Router>
    );
  }
}

export default Routes;

/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import { AppRegistry } from "react-native";
import App from "./App";

import Login from "./components/login";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Login);

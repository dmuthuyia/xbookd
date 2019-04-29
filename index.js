/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import { AppRegistry } from "react-native";
import App from "./App";

import Splash from "./src/pages/splash";
import Book from "./src/pages/book";

import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

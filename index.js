/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import { AppRegistry } from "react-native";
import App from "./App";

import Splash from "./components/splash";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Splash);

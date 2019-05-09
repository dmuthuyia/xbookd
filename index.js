/**
 developer: Dennis Muthuyia  
 email:  dmuthuyia@gmail.com
 */

import { AppRegistry } from "react-native";
import App from "./App";
//import App from "./src/heyj/App";

//import Livestream from "./src/pages/livestream";
//import Book from "./src/pages/book";
//import App2 from "./src/pages/app2/app2";
//import Buttn from "./src/components/buttn";

import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

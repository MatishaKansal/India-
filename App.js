import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutIndiaScreen from "./screens/AboutIndiaScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  // AboutIndiaScreen: AboutIndiaScreen,
  Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(switchNavigator);

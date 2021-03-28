import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from "./WelcomeScreen";
import AboutIndiaScreen from "./AboutIndiaScreen";

export default class AppContainerScreen extends React.Component {
  render() {
    return (
      // <WelcomeScreen />;
      <AppContainer />
    );
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AboutIndiaScreen: AboutIndiaScreen,
});

const AppContainer = createAppContainer(AppNavigator);

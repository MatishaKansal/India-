import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import CustomSideBarMenu from "./CustomSideBarMenu";
import AboutIndiaScreen from "../screens/AboutIndiaScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AboutIndiaScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);

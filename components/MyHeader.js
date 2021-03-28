import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";
import db from "../config.js";

export default class MyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <View style={{ color: "silver" }}>
        <Header
          centerComponent={{
            text: this.props.title,
            style: {
              color: "#ACF6F6",
              fontSize: 40,
              fontWeight: "bold",
            },
          }}
        />
      </View>
    );
  }
}

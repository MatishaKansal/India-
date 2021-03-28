import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MyHeader from "../components/MyHeader";

export default class AboutIndiaScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="About India" navigation={this.props.navigation} />
        <Text style={{ fontSize: 24, color: "blue" }}>
          India is a great country where people speak different languages but
          the national language is Hindi. India is full of different castes,
          creeds, religion, and cultures but they live together. That's the
          reasons India is famous for the common saying of “unity in diversity“.
          There are 28 state and 8 union territories.
        </Text>
        <Text style={{ fontSize: 24, color: "blue" }}>
          To know about these states and union territories swipe left..
        </Text>
      </View>
    );
  }
}

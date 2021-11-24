import { Button } from "react-native-elements";
import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  ComponentDidMount() {}

  render() {
    return (
      <View>
        <AddCaption />
      </View>
    );
  }
}

export default Homepage;

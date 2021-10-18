import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const laterPopUp = () => {
  const popUp = () =>
  Alert.alert(
    "Media Accessibility",
    " Are you sure? Captioning your photo creates a more accessible environment",
    [
      {
        text: "Dictate",
        onPress: () => console.log("Dictate pressed"),
      },
      {
        text: "Type",
        onPress: () => console.log("Type Pressed"),
        style: "cancel",
      },
      { text: "Later", onPress: () => console.log("Later Pressed") },
    ]
  );

  return (
    <View style={styles.container}>
      <popUp/>
    </View>
  );
}

export default laterPopUp;
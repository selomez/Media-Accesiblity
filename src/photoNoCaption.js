import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const noCaptionPopUp = () => {
  const popUp = () =>
  Alert.alert(
    "Media Accessibility",
    "You have chosen a photo with no caption, would you like to add a caption?",
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

export default App;
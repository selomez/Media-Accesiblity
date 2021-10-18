import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const uncaptionedPopup = () => {
  const popUp = () =>
  Alert.alert(
    "Media Accessibility",
    "You have uncaptioned photos in your gallery. Would you like to caption them now?",
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
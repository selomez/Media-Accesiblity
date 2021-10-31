import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import promptStrings from './Strings.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

//Using a template prompt like this eliminates the need for laterPopUp.js, newPhotosPopup.js, photoNoCaption.js, and uncaptionedPopup.js
const promptPopup = () => {
  const popUp = () =>
  Alert.alert(
    promptStrings.APPNAME,
    promptStrings.LATER, //Create a statement where 'if *condition*, use promptStrings.condition, not sure how to do that
    [
      {
        text: promptStrings.OKAY,
        onPress: () => console.log("Dictate pressed") /*Should go to textInputPopUp.js*/,
      },
      { text: promptStrings.LATER, onPress: () => console.log("Later Pressed") /*should go to promptPopup(LATERFLOW1)*/ },
    ]
  );

  return (
    <View style={styles.container}>
      <popUp/>
    </View>
  );
}

export default App;
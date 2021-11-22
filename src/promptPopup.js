import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import promptStrings from "src/Strings.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

//Using a template prompt like this eliminates the need for laterPopUp.js, newPhotosPopup.js, photoNoCaption.js, and uncaptionedPopup.js
const promptPopup = () => {
  console.log("reached popup");
  console.log(promptStrings.LATERFLOW1);
  const popUp = () =>
    Alert.alert(
      promptStrings.APPNAME,
      promptStrings.LATERFLOW1, //Create a statement where 'if *condition*, use promptStrings.condition, not sure how to do that
      [
        {
          text: promptStrings.OKAY,
          onPress: () =>
            console.log("Okay pressed") /*Should go to textInputPopUp.js*/,
        },
        {
          text: promptStrings.CANCEL,
          onPress: () =>
            console.log(
              "Cancel Pressed"
            ) /*should go to promptPopup(LATERFLOW1)*/,
        },
      ]
    );

  return (
    <View style={styles.container}>  
      <popUp />
    </View>
  );
};

export default promptPopup;

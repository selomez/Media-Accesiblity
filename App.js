import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AddCaption from "./src/AddCaption.js";
import { Button } from "react-native-elements";
import Homepage from "./src/Homepage";

//import { ImageTextInputMultiline } from "src/textInput";
//import {DisplayAnImage} from "./src/DisplayImage.js"

function App() {
  const message = () => {
    console.log("clicked!");
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    imageSize: {
      width: 100,
      height: 100,
    },
  });
  return (
    <View style={styles.container}>
      <AddCaption
        style={styles.imageSize}
        //source={require(`${"./src/kitty.jpeg"}`)}
        //accessibilityLabel="A stock image of Mount Everest."
      />
    </View>
  );
}

export default App;

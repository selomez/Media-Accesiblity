import React from "react";
import { View, Image, StyleSheet } from "react-native";

//import { ImageTextInputMultiline } from "src/textInput";
//import {DisplayAnImage} from "./src/DisplayImage.js"

function App() {
  const message = () => {
    console.log("clicked!");
  };

  return (
      <View> 
      <Image
        source={require(`${"./src/mountain.jpeg"}`)}
        accessibilityLabel = "A stock image of Mount Everest."
      />
    </View>
  );
}

export default App;


/*  
<ImageTextInputMultiline/>
{<DisplayAnImage src="./mountain.jpeg" />} 
*/

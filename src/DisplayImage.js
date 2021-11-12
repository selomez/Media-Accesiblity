import React from "react";
import Button from "react-bootstrap/Button";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  imageSize: {
    width: 100,
    height: 100,
  },
});

// imageToDisplay is an Image type.
export const DisplayAnImage = (imageToDisplay) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageSize}
        source={require(`${imageToDisplay.src}`)}
        accessibilityLabel = "A stock image of Mount Everest."
      />
    </View>
  );
};

export default DisplayAnImage;

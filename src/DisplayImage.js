import React from "react";
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
export const DisplayAnImage = (props) => {
  return (
    <View style={styles.container}>
      <Image
        ref={props.imageRef}
        style={styles.imageSize}
        source={require(`${props.src}`)}
      />
    </View>
  );
};

export default DisplayAnImage;

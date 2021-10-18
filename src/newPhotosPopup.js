import { View, StyleSheet, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

  const newPhotosPopup = () =>
    Alert.alert(
      "Media Accessibility",
       " You have new photos added, would you like to add a caption?",
      [
        {
          text: "Dictate",
          onPress: () => console.log("Dictate pressed")
        },
        {
          text: "Type",
          onPress: () => console.log("Type Pressed"),
          style: "cancel"
        },
        { text: "Later", onPress: () => console.log("Later Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
     <newPhotosPopup/>
    </View>
  );



export default newPhotosPopup;
import React,  { useState, useEffect } from "react";
import { Button, View, Image, StyleSheet, Platform } from "react-native";
import AddCaption from "./src/AddCaption.js";
import * as ImagePicker from 'expo-image-picker';
import { Container } from "react-bootstrap";

function App() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    photo:{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    imageSize: {
      width: 100,
      height: 100,
    },
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
        <AddCaption/>   
        <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    
  );
}

export default App;

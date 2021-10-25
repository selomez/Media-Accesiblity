import React from 'react';
import { View, StyleSheet, Button, TextInput, Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    
});


const popUp = () => {
    
    Alert.alert(
      "Media Accessibility",
      [
        { 
          text: "Enter Alternative Text",
          onPress: text => console.log(text)
        }
      ],
      "text entered"
    );
  
    return (
      <View style={styles.container}>
        <popUp/>
      </View>
    );
  }
  

export default popUp; 


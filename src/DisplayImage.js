import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        imageSize: {
            width: 100,
            height: 100,
        }
    });

    const DisplayAnImage = () => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.imageSize}
              source={require('./mountain.jpeg')}
              alt = {"A stock image of Mount Everest."}
            />
          </View>
        );
      }
      
export default DisplayAnImage;
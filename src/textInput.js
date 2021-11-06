import React from 'react';
import { View, TextInput, Alert } from 'react-native';

export const ImageTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      clearTextOnFocus = {true}
      maxLength={125}
    />
  );
}

export const ImageTextInputMultiline = () => {
  const [value, onChangeText] = React.useState(null);

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <ImageTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        placeholder="Image Description: Tell us about the image..."
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
}




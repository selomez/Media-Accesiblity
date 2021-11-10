import React from "react";
import { View, TextInput, Alert } from "react-native";
import DisplayAnImage from "./DisplayImage.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ImageTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      clearTextOnFocus={true}
      maxLength={125}
    />
  );
};

export const ImageTextInputMultiline = () => {
  const [value, onChangeText] = React.useState(null);

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
      }}
    >
      <DisplayAnImage src="./mountain.jpeg" />
     
      <Container className="mt-3">
       <Row>
        <ImageTextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Image Description: Tell us about the image..."
          value={value}
          style={{ padding: 10 }}
        />
       </Row>

        <Row>
          <Col>
            <Button variant="danger"> Cancel </Button>
          </Col>
          <Col>
            <Button variant="primary"> Submit </Button>
          </Col>
        </Row>
      </Container>
    </View>
  );
};

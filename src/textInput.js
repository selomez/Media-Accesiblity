import React from "react";
import { View, TextInput, Alert, BackHandler, Image } from "react-native";
import DisplayAnImage from "./DisplayImage.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import promptPopup from './promptPopup'

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

//caption is a string, image is an image source
export const saveCaption = (caption, image) => {
  <Image source={image} alt={caption} accessibilityLabel={caption} />;
  return image;
};
//function saveCaption2(props) {
//<Image source = props.image
//alt = props.caption
//accessibilityLabel = props.caption
// />
//}

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
            <Button
              variant="danger"
              onClick={() =>  promptPopup()}
              accessibilityLabel="Cancel Captioning"
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <form>
              <Button
                variant="primary"
                onClick={saveCaption(
                  ImageTextInput.onChangeText,
                  "./mountain.jpeg"
                )}
                accessibilityLabel="Submit Text"
              >
                Submit
              </Button>
              {/*Testing for using a function in stead of a const
              <Button
                variant="primary"
                onClick= 
                <saveCaption2 
                  image = "./mountain.jpeg"
                  caption = "test"
                />
              </Button>*/}
            </form>
          </Col>
        </Row>
      </Container>
    </View>
  );
};

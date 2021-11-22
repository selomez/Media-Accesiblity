import React from "react";
import { View, TextInput, Alert, BackHandler, Image } from "react-native";
import DisplayAnImage from "src/DisplayImage.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import promptPopup from 'src/promptPopup'

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
  console.log("caption is: ", caption);
  <Image source={image} alt={caption} accessibilityLabel={caption} />;
  //return image;
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
            <Button
              variant="danger"
              onClick={promptPopup}
              accessibilityLabel="Cancel Captioning"
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <form>
              <Button
                variant="primary"
                onClick={() => console.log(onChangeText)} //,saveCaption(
           //</form>       onChangeText,
            //</Col>      "./mountain.jpeg"
               // )}
                accessibilityLabel="Submit Text"
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </View>
  );
};

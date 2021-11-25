import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  BackHandler,
  Image,
  StyleSheet,
} from "react-native";
//import DisplayAnImage from "./DisplayImage.js";
import promptPopup from "./promptPopup.js";
import { Button, ButtonGroup } from "react-native-elements";

class AddCaption extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      imgSrc: "./mountain.jpeg",
      photoQueue: null,
      defaultCaption: "Image Description: Tell us about the image...",
      caption: "Image Description: Tell us about the image...",
      number: 0,
    };

    this.changePhoto = this.changePhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //this isnt working
  ComponentDidMount() {
    this.setState({
      caption: this.state.defaultCaption,
      //photoQueue = CameraRoll.getPhotos()
    });
  }

  nextPhoto = () => {
    //imgSrc = cameraRoll.nextPhoto OR
    //imgSrc = photoQueue.next
    //if imgSrc.altText == null:
    //caption = "Image Description: Tell us about the image..."
    //else:
    //caption = imgSrc get Alt text

    //placeholder
    this.setState({ imgSrc: "./kitty.jpeg" });
    this.setState({ caption: this.state.defaultCaption });
  };

  handleChange(event) {
    console.log(this.state.caption);
    this.setState({ caption: event.target.value });
  }

  handleSubmit(event) {
    //1) save caption in alt text
    this.imageRef.current.accessibilityLabel = this.state.caption;
    //2) change back to default caption, change photo
    this.setState({ number: this.state.number + 1 }); //replace
    this.setState({ caption: this.state.defaultCaption });
    this.setState({ imgSrc: "./kitty.jpeg" }); //replace eventually
    console.log(this.imageRef.current.accessibilityLabel);
  }

  changePhoto() {
    this.setState({ imgSrc: "./kitty.jpeg" });
    this.setState({ caption: this.state.defaultCaption });
  }

  render() {
    const buttons = ["Prev", "Next"];

    const myImages = {
      0: require("./kitty.jpeg"),
      1: require("./mountain.jpeg"),
    };

    return (
      <View style={styles.container}>
        <Image
          ref={this.imageRef}
          source={myImages[this.state.number]}
          style={{
            height: 100,
            width: 100,
          }}
        />

        <ButtonGroup
          buttons={buttons}
          containerStyle={{ width: 100, height: 20 }}
          buttonContainerStyle={{ backgroundColor: "#D3D3D3" }}
        />

        <TextInput
          onChange={this.handleChange}
          multiline
          value={this.state.caption}
          numberOfLines={4}
          clearTextOnFocus={true}
        />

        <Button
          className="Cancel"
          title="Cancel"
          buttonStyle={{
            backgroundColor: "red",
            width: 200,
          }}
        ></Button>
        <Button
          className="Skip"
          title="Next Photo"
          buttonStyle={{
            width: 200,
          }}
        ></Button>

        <Button
          className="Submit"
          title="Submit"
          //disabled="true"
          onPress={this.handleSubmit}
          buttonStyle={{
            backgroundColor: "green",
            width: 200,
          }}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //display: "flex",
    //flexDirection: "column",
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AddCaption;

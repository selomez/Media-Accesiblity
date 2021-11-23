import React, { Component } from "react";
import { View, TextInput, Alert, BackHandler, Image } from "react-native";
import DisplayAnImage from "./DisplayImage.js";
import promptPopup from "./promptPopup.js";
import { Button } from "react-native-elements";

class AddCaption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "./mountain.jpeg",
      photoQueue: null,
      caption: "Image Description: Tell us about the image...",
    };

    this.changePhoto = this.changePhoto.bind(this);
    this.submitCaption = this.submitCaption.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  ComponentDidMount() {
    this.setState({
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
  };
  submitCaption = (props) => {
    caption = props.newCaption;
    //save in the imgSrc alt text

    //nextPhoto;
  };

  changePhoto() {
    this.setState({ imgSrc: "./kitty.jpeg" });
  }

  render() {
    return (
      <header className="pageLabel">
        Media Acessibility
        <div>
          <DisplayAnImage
            alignSelf="center"
            src={this.state.imgSrc}
            caption={this.state.caption}
          ></DisplayAnImage>
          <TextInput
            placeholder={this.state.caption}
            multiline
            numberOfLines={4}
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
            onPress={this.changePhoto}
            buttonStyle={{
              backgroundColor: "green",
              width: 200,
            }}
          ></Button>
        </div>
      </header>
    );
  }
}
export default AddCaption;

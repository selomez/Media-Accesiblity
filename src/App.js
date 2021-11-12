import "./App.css";
import React from "react";
import { ImageTextInputMultiline } from "./textInput";
import "bootstrap/dist/css/bootstrap.min.css";
import {DisplayAnImage} from "./DisplayImage.js"

function App() {
  const message = () => {
    console.log("clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <ImageTextInputMultiline/>
        {<DisplayAnImage src="./mountain.jpeg" />}
      </header>
    </div>
  );
}

export default App;

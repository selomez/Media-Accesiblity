import "./App.css";
import React from "react";
import { ImageTextInputMultiline } from "./textInput";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const message = () => {
    console.log("clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <ImageTextInputMultiline />
      </header>
    </div>
  );
}

export default App;

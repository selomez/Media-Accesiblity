import "./App.css";
import  AppView  from "./newPhotosPopup.js";
import {ImageTextInput,ImageTextInputMultiline} from "./textInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppView />
        <ImageTextInputMultiline />
      </header>
    </div>
  );
}

export default App;

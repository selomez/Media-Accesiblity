import "./App.css";
import  AppView  from "./newPhotosPopup.js";
import {ImageTextInput,ImageTextInputMultiline} from "./textInput";

function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">
        <div className = "css-view-1dbjc4n">
          <AppView />
          <ImageTextInputMultiline />
        </div>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import  {AppView}  from "./newPhotosPopup.js";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Image} from 'react-native'
import {ImageTextInput,ImageTextInputMultiline} from "./textInput";
import 'bootstrap/dist/css/bootstrap.min.css';
//import {noCaptionPopUp} from 'photoNoCaption.js';


function App() {

  const message = () => {
    console.log("clicked!") 
   }
  
  return (
    
    <div className="App">
     

      <header className="App-header">
      <Image 
        source = {require("mountain.jpeg")}
        alt = "Hello World"
        onPress = {message} 
      />
      
        <ImageTextInputMultiline />
        <Container className="mt-3">
          <Row>
            <Col>
              <Button variant='danger'> Cancel </Button>
            </Col>
            <Col>
              <Button variant='primary'> Submit </Button>
            </Col>
          </Row>
          
        </Container>
        
        
      </header>
    </div>
  );
}

export default App;

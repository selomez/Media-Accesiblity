import "./App.css";
import  {AppView}  from "./promptPopup.js";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {View, Image, StyleSheet} from 'react-native';
import {ImageTextInput,ImageTextInputMultiline} from "./textInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayAnImage from './DisplayImage.js';
//import {noCaptionPopUp} from 'photoNoCaption.js';


function App() {

  const message = () => {
    console.log("clicked!") 
   }
  
  return (
    
    <div className="App">
      <header className="App-header">

        <DisplayAnImage src='./mountain.jpeg'/>
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

import "./App.css";
import  {AppView}  from "./newPhotosPopup.js";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ImageTextInput,ImageTextInputMultiline} from "./textInput";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    
    <div className="App">
      

      <header className="App-header">
        
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

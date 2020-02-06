import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';

import SensorTable from './SensorTable'


class App extends Component{
  render(){
      return(
        <Container>
          <SensorTable/>
        </Container>
      );
  }
}

export default App;
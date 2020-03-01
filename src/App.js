import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { Navbar, Nav} from 'react-bootstrap'
import SensorTable from './SensorTable'
import SensorMap from './SensorMap';
import ParkMap from './ParkMap';



class App extends Component {
  state = {
    sensor: {
      isLoading: true,
      data: [],
      error: null
    },
    parkspots: {
      isLoading: true,
      data: [],
      error: null
    }
  }

  async fetchSensors() {
    try {
      const response = await fetch('/api/reading');

      if (!response.ok) {
        throw Error(response.statusText)
      }

      const data = await response.json();
      this.setState({
        sensors: {
          isLoading: false,
          data,
          error: null
        }
      });
    }
    catch (error) {
      this.setState({
        sensors: {
          isLoading: false,
          data: [],
          error: error.toString()
        }
      });
    }
  }

  

  async fetchParkSpots() {
    try {
      const response = await fetch('/api/park');

      if (!response.ok) {
        throw Error(response.statusText)
      }

      const data = await response.json();
      this.setState({
        parkspots: {
          isLoading: false,
          data,
          error: null
        }
      });
    }
    catch (error) {
      this.setState({
        parkspots: {
          isLoading: false,
          data: [],
          error: error.toString()
        }
      });
    }
  }



  componentDidMount() {
    this.fetchSensors();
    this.fetchParkSpots();
    setInterval(this.fetchSensors.bind(this), 5000); // 5 seconds
    setInterval(this.fetchParkSpots.bind(this), 5000); // 5 seconds
  }




  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="primary">
            <Navbar.Brand href="/">Sensorit - Smart Salonki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/table">Sensoritaulukko</Nav.Link>
                <Nav.Link as={Link} to="/map">Ilmanlaatukartta</Nav.Link>
                <Nav.Link as={Link} to="/park">Parkkipaikkakartta</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/map" render={() => <SensorMap {...this.state.sensors} />} />
            <Route path="/table" render={() => <SensorTable {...this.state.sensors} />} />
            <Route path="/park" render={() => <ParkMap {...this.state.parkspots} />} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
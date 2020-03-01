import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import SensorTable from './SensorTable'
import SensorMap from './SensorMap';
import ParkMap from './ParkMap';

interface State {
  data: Sensor[],
  isLoading: boolean,
  error: any

}


class App extends Component<{}, State> {
  state = {
    data: [],
    isLoading: true,
    error: null

  };
  
  componentDidMount() {
    this.fetchSensors();
    setInterval(this.fetchSensors.bind(this), 5000); // 5 seconds
  }

  async fetchSensors() {
    try {
      const response = await fetch('/api/reading');

      if (!response.ok) {
        throw Error(response.statusText)
      }

      const data: Sensor[] = await response.json();
      this.setState({

        isLoading: false,
        data,
        error: null

      });
    }
    catch (error) {
      this.setState({
        isLoading: false,
        data: [],
        error: error.toString()

      })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar  bg="primary">
            <Navbar.Brand href="/">Sensorit - Smart Salonki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="table">Sensoritaulukko</Nav.Link>
                <Nav.Link href="map">Ilmanlaatukartta</Nav.Link>
                <Nav.Link href="park">Parkkipaikkakartta</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/map" render={() => <SensorMap {...this.state} />} />
            <Route path="/table" render={() => <SensorTable {...this.state} />} />
            <Route path="/park" render={() => <ParkMap/>} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
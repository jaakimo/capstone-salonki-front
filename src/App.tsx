import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import SensorTable from './SensorTable'
import SensorMap from './SensorMap';
import ParkMap from './ParkMap';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <nav>
              <li>
                <NavLink to="/table">Taulukko</NavLink>
              </li>
              <li>
                <NavLink to="/map">Ilmanlaatukartta</NavLink>
              </li>
              <li>
                <NavLink to="/park">Parkkipaikkakartta</NavLink>
              </li>
            </nav>

          </div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/map" component={SensorMap} />
            <Route path="/table" component={SensorTable} />
            <Route path="/park" component={ParkMap} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
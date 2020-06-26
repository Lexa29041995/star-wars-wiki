import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage';
import PlanetPage from '../PlanetPage'
import StarShipsPage from '../StarShipsPage'
import SpeciesPage from '../SpeciesPage'
import VehiclesPage from '../VehiclesPage'
import SwapiServices from '../../services/SwapiServices';
import DetailsInfo from '../DetailsInfo';
import SwapiContext from '../SwapiServiceContext';

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends React.Component {
    
swapi = new SwapiServices()

  state = {
      isRandomPlanet: true,
      error: false,
  }  

  componentDidCatch() {
      this.setState({ error: true});
  }

  onTogglePlanet =() => {
      this.setState((prevState) => {
          return {isRandomPlanet: !prevState.isRandomPlanet,}
      });
  }

  render() {
    if (this.state.error) {
          return <ErrorComponent />
    }
    return (
        <SwapiContext.Provider value = {this.swapi}>
            <Router>
                <div className ='App'>
                    <Header />
                    <RandomPlanet />
                    {/* <ErrorTest /> */}
                    <Route path = '/' exact>
                        <h1>Welcome to Star Wars Wiki!</h1>
                    </Route>
                    <Route path = '/people'>
                        <h3>People</h3>
                    <PeoplePage />
                    </Route>
                    <Route path = '/planets'>
                        <h3>Planets</h3>
                    <PlanetPage />
                    </Route>
                    <Route path = '/ships'>
                        <h3>StarShips</h3>
                    <StarShipsPage />
                    </Route>
                    <Route path = '/species'>
                        <h3>Species</h3>
                    <SpeciesPage />
                    </Route>
                    <Route path = '/vehicles'>
                        <h3>Vehicles</h3>
                    <VehiclesPage />
                    </Route>
                </div>
            </Router>
        </SwapiContext.Provider>        
    )
  }      
}
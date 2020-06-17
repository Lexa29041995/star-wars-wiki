import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PlanetPage from '../PlanetPage'
import SwapiServices from '../../services/SwapiServices';
import DetailsInfo from '../DetailsInfo';
import { SwapiProvider } from '../SwapiServiceContext';


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
        <SwapiProvider value = {this.swapi}>
            <div className ='App'>
                <Header />
                <RandomPlanet />
                <ErrorTest />
                <PlanetPage />
                <DetailsInfo />
            </div>
        </SwapiProvider>
        
    )
  }      
}
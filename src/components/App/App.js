import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage'
import SwapiServices from '../../services/SwapiServices';
import ItemsList from '../Loader';
import DetailsInfo from '../DetailsInfo';


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
        <div className ='App'>
            <Header />
            {this.state.isRandomPlanet && <RandomPlanet />}
            <button 
            onClick = {this.onTogglePlanet}>
                ON/OFF planet
            </button>
            <ErrorTest />
            <PeoplePage />
            <div className =' PeoplePage d-flex justify-content-spacy-beetwen'>
                <ItemsList 
                    onItemClick = {this.onPersonSelect} 
                    getData = {this.swapi.getAllPlanets}
                    renderItem = {(item) =>
                         `${item.name} (${item.population}, ${item.diameter}m)`}
                />
                <DetailsInfo 
                    personId = {this.state.selectedPerson}/>
            </div>
        </div>
    )
  }      
}
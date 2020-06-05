import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';

export default class App extends React.Component {
  
  state = {
      isRandomPlanet: true,
  }  

  onTogglePlanet =() => {
      this.setState((prevState) => {
          return {isRandomPlanet: !prevState.isRandomPlanet,}
      });
  }

  render() {
    return (
        <div className ='App'>
            <Header />
            {this.state.isRandomPlanet && <RandomPlanet />}
            <button 
            onClick = {this.onTogglePlanet}>
                ON/OFF planet
            </button>
            <div className ='d-flex justify-content-spacy-beetwen'>
                <ItemsList />
                <DetailsInfo />
            </div>
        </div>
    )
  }  

//   const swapi = new SwapiServices();
  
//   swapi.getAllPlanets()
//     .then ((body) => {
//         console.log(body);
//     })

    
}
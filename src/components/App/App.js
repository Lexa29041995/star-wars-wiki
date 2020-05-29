import React from 'react';

import SwapiServices from '../../services/SwapiServices';
import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';

const App = () => {
    return (
        <div className ='App'>
            <Header />
            <RandomPlanet />
            <div className ='d-flex justify-content-spacy-beetwen'>
                <ItemsList />
                <DetailsInfo />
            </div>
        </div>
    )
}

export default App;
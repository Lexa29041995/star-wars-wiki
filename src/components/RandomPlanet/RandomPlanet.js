import React from 'react';

import SwapiServices from '../../services/SwapiServices'

import './RandomPlanet.css';
import Loader from '../Loader';

export default class RandomPlanet extends React.Component {
    
    constructor() {
        super();
        this.updatePlanet();
    }

    swapi = new SwapiServices();

    state = {
        planet: {},
        load: true,
    }

    onPlanetLoaded =(planet) => {
        this.setState({
            planet,
            load: false,
    });
    }

    updatePlanet() {
        const id = Math.round(Math.random()*10);
        this.swapi.getOwnPlanet(id)
            .then(this.onPlanetLoaded);
    }
    
    render() {

        const { planet:{name, diameter, population, gravity, id},
        load} =this.state

        if (load) {
            return <Loader />;
        }

        return (
            <div className ='RandomPlanet'>
            <h3>{name}</h3>
            <div className ='d-flex planet_block'>
                <img src ={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet' />
                <ul className='planet-infoblock'>
                    <li>
                        <span>diameter</span>
                        <span>{diameter}</span>
                    </li>
                    <li>
                        <span>population</span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>gravity</span>
                        <span>{gravity}</span>
                    </li>
                </ul>
            </div>
        </div>
        );
    };
}

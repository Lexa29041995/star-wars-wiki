import React from 'react';

import SwapiServices from '../../services/SwapiServices'

import './RandomPlanet.css';

export default class RandomPlanet extends React.Component {
    
    constructor() {
        super();
        this.updatePlanet();
    }

    swapi = new SwapiServices();

    state = {
        name: null,
        diametr: null,
        population: null,
        gravity: null,
    }

    updatePlanet() {
        this.swapi.getOwnPlanet(1).then((planet)=>{
            this.setState({
                name: planet.name,
                diametr: planet.diametr,
                population: planet.population,
                gravity: planet.gravity,
            });
        });
    }
    
    render() {

        const {name, diametr, population, gravity} =this.state

        return (
            <div className ='RandomPlanet'>
            <h3>{name}</h3>
            <div className ='d-flex planet_block'>
                <img src ="https://versiya.info/uploads/posts/2019-09/1568404448_photovisi-download-1.jpg" alt='Planet' />
                <ul className='planet-infoblock'>
                    <li>
                        <span>diametr</span>
                        <span>{diametr}</span>
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

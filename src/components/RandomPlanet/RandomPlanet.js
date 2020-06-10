import React from 'react';

import SwapiServices from '../../services/SwapiServices'

import './RandomPlanet.css';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

export default class RandomPlanet extends React.Component {
    
    constructor() {
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 2000);
    }

    swapi = new SwapiServices();

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidCatch() {
        
    }

    onPlanetLoaded =(planet) => {
        this.setState({
            planet,
            load: false,
    });
    }

    onError = () => {
        console.log('Catch a mistake');
        this.setState({
            error: true,
            load: false,
        });
    };

    updatePlanet = () => {
        const id = Math.round(Math.random()*10);
        // const id = 0;
        this.swapi.getOwnPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }
    
    render() {

        const { planet, load, error} =this.state;

        const errorContent = error ? <ErrorComponent /> : null
        const loader = load ? <Loader /> : null;
        const content = (!load && !error) ? <PlanetView planet={planet} /> : null;

        return (
            <div className = 'RandomPlanet'>
                {errorContent}
                {loader}
                {content}
            </div>
        );
    };
}

const PlanetView = (props) => {
    const { id, name, diameter, population, gravity} = props.planet;

    return (
        <React.Fragment>
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
        </React.Fragment>
        
    )
}

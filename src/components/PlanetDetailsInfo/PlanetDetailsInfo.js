import React from 'react';
import './PlanetDetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class PlanetDetailsInfo extends React.Component {
    
    static contextType = SwapiContext;

    state = {
        planet: null
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if(this.props.planetId !== prevProps.planetId) {
        this.updatePlanet()};
    }

    updatePlanet () {
        const {planetId} = this.props;
        if (!planetId) {
            return;
        }

        this.context.getOwnPlanet(planetId).then((planet) => {
            this.setState({planet});
        })
    }

    render () {

        if(!this.state.planet) {
            return <p className ='PlanetDetailsInfo'>Please, choose the planet</p>
        }

        const { id, name, diameter,
            population, gravity, rotationPeriod, climate, surfaceWater, terrain} = this.state.planet;

        return (
                <div className ='PlanetDetailsInfo'>
                <h3>{name}</h3>
                <div className ="d-flex info_block">
                    <img src ={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet' />
                        <ul className ='detail_infoblock'>
                            <li>
                                <span>diameter: </span>
                                <span>{diameter} m</span>
                            </li>
                            <li>
                                <span>population: </span>
                                <span>{population}</span>
                            </li>
                            <li>
                                <span>gravity: </span>
                                <span>{gravity}</span>
                            </li>
                            <li>
                                <span>rotationPeriod: </span>
                                <span>{rotationPeriod}</span>
                            </li>
                            <li>
                                <span>climate: </span>
                                <span>{climate} </span>
                            </li>
                            <li>
                                <span>surfaceWater: </span>
                                <span>{surfaceWater}</span>
                            </li>
                            <li>
                                <span>terrain: </span>
                                <span>{terrain}</span>
                            </li>
                        </ul>
                    </div>
                        {/* <ErrorTest /> */}
                    </div>
                    ) 
                
    }
    
}
import React from 'react';
import PlanetItemsList from '../PlanetItemsList'
import PlanetDetailsInfo from '../PlanetDetailsInfo'

import './PlanetPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';


export default class PeoplePage extends React.Component {

    swapi = new SwapiServices();

    state = {
        selectedPlanet: 0,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onPlanetSelect = (id) => {
        this.setState({
            selectedPlanet: id
        });
      }

    render () {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const planetItemsList = (
            <PlanetItemsList 
                    onItemClick = {this.onPlanetSelect} 
                    renderItem = {(item) =>
                         `${item.name} 
                            (diameter: ${item.diameter} m)`
                    }
                />
        )

        const planetDetailsInfo = (
            <PlanetDetailsInfo 
                    planetId = {this.state.selectedPlanet}
            />
        )

        return (
            <div className ='PlanetPage'>
                <Row left = {planetItemsList} right = {planetDetailsInfo} />
            </div>
        )
    }
}
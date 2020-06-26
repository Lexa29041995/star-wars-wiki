import React from 'react';
import StarShipsItemsList from '../StarShipsItemsList';
import StarShipsDetailsInfo from '../StarShipsDetailsInfo'

import './StarShipsPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';


export default class StarShipsPage extends React.Component {

    swapi = new SwapiServices();

    state = {
        selectedStarShips: 5,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onStarShipsSelect = (id) => {
        this.setState({
            selectedStarShips: id
        });
      }

    render () {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const starShipsItemsList = (
            <StarShipsItemsList 
                    onItemClick = {this.onStarShipsSelect} 
                    renderItem = {(item) =>
                         `${item.name} 
                            (starship class: ${item.starshipСlass})`
                    }
                />
        )

        const starShipsDetailsInfo = (
            <StarShipsDetailsInfo 
                starshipId = {this.state.selectedStarShips}
            />
        )

        return (
            <div className ='StarShipsPage'>
                <Row left = {starShipsItemsList} right = {starShipsDetailsInfo} />
            </div>
        )
    }
}
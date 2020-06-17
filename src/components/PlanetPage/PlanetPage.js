import React from 'react';
import ItemsList from '../ItemsList'
import DetailsInfo from '../DetailsInfo'

import './PlanetPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';


export default class PlanetPage extends React.Component {

    swapi = new SwapiServices();

    state = {
        selectedPerson: 3,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });
      }

    render () {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <ItemsList 
                    onItemClick = {this.onPersonSelect} 
                    renderItem = {(item) =>
                         `${item.name}
                            (${item.diameter})`
                    }
                />
        )

        const detailInfo = (
            <DetailsInfo 
                    personId = {this.state.selectedPerson}
            />
        )

        return (
            <div className ='PeoplePage'>
                <Row left = {itemsList} right = {detailInfo} />
            </div>
        )
    }
}


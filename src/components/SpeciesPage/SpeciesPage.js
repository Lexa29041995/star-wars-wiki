import React from 'react';
import SpeciesItemsList from '../SpeciesItemsList'
import SpeciesDetailsInfo from '../SpeciesDetailsInfo'

import './SpeciesPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';


export default class SpeciesPage extends React.Component {

    swapi = new SwapiServices();

    state = {
        selectedSpecies: 2,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onSpeciesSelect = (id) => {
        this.setState({
            selectedSpecies: id
        });
      }

    render () {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const speciesItemsList = (
            <SpeciesItemsList 
                    onItemClick = {this.onSpeciesSelect} 
                    renderItem = {(item) =>
                         `${item.name} 
                            (classification: ${item.classification})`
                    }
                />
        )

        const speciesDetailsInfo = (
            <SpeciesDetailsInfo 
                    speciesId = {this.state.selectedSpecies}
            />
        )

        return (
            <div className ='SpeciesPage'>
                <Row left = {speciesItemsList} right = {speciesDetailsInfo} />
            </div>
        )
    }
}
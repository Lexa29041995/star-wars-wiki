import React from 'react';
import VehiclesDetailsInfo from '../VehiclesDetailsInfo';
import VehiclesItemsList from '../VehiclesItemsList';

import './VehiclesPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';


export default class VehiclesPage extends React.Component {

    swapi = new SwapiServices();

    state = {
        selectedVehicles: 7,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onVehiclesSelect = (id) => {
        this.setState({
            selectedVehicles: id
        });
      }

    render () {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const vehiclesItemsList = (
            <VehiclesItemsList 
                    onItemClick = {this.onVehiclesSelect} 
                    renderItem = {(item) =>
                         `${item.name} 
                            (vehicles class: ${item.vehicleClass})`
                    }
                />
        )

        const vehiclesDetailsInfo = (
            <VehiclesDetailsInfo 
                vehiclesId = {this.state.selectedVehicles}
            />
        )

        return (
            <div className ='VehiclesPage'>
                <Row left = {vehiclesItemsList} right = {vehiclesDetailsInfo} />
            </div>
        )
    }
}
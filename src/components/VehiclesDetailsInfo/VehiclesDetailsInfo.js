import React from 'react';
import './VehiclesDetailsInfo.css';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class VehiclesDetailsInfo extends React.Component {
    
    static contextType = SwapiContext;

    state = {
        vehicle: null
    };

    componentDidMount() {
        this.updateVehicles();
    }

    componentDidUpdate(prevProps) {
        if(this.props.vehiclesId !== prevProps.vehiclesId) {
        this.updateVehicles()};
    }

    updateVehicles () {
        const {vehiclesId} = this.props;
        if (!vehiclesId) {
            return;
        }

        this.context.getOwnVehicle(vehiclesId).then((vehicle) => {
            this.setState({vehicle});
        })
    }

    render () {

        if(!this.state.vehicle) {
            return <p>Please, choose the vehcle!</p>
        }

        const { id, name, model,
            vehicleClass, manufacturer, cargoCapacity, consumables, crew, maxAtmospheringSpeed } = this.state.vehicle;

        return (
                <div className ='VehiclesDetailsInfo'>
                <h3>{name}</h3>
                <div className ="d-flex info_block">
                    <img src ={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt='vehicle' />
                        <ul className ='detail_infoblock'>
                            <li>
                                <span>model: </span>
                                <span>{model}</span>
                            </li>
                            <li>
                                <span>vehicle class: </span>
                                <span>{vehicleClass}</span>
                            </li>
                            <li>
                                <span>manufacturer: </span>
                                <span>{manufacturer}</span>
                            </li>
                            <li>
                                <span>cargo capacity: </span>
                                <span>{cargoCapacity}</span>
                            </li>
                            <li>
                                <span>consumables: </span>
                                <span>{consumables} </span>
                            </li>
                            <li>
                                <span>crew: </span>
                                <span>{crew}</span>
                            </li>
                            <li>
                                <span>max atmosphering speed: </span>
                                <span>{maxAtmospheringSpeed}</span>
                            </li>
                        </ul>
                    </div>
                        {/* <ErrorTest /> */}
                    </div>
                    ) 
                
    }
    
}
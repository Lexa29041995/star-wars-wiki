import React from 'react';
import './StarShipsDetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class StarShipsDetailsInfo extends React.Component {
    
    static contextType = SwapiContext;

    state = {
        starship: null
    };

    componentDidMount() {
        this.updateShips();
    }

    componentDidUpdate(prevProps) {
        if(this.props.starshipId !== prevProps.starshipId) {
        this.updateShips()};
    }

    updateShips () {
        const {starshipId} = this.props;
        if (!starshipId) {
            return;
        }

        this.context.getOwnStarship(starshipId).then((starship) => {
            this.setState({starship});
        })
    }

    render () {

        if(!this.state.starship) {
            return <p>Please, choose the starship!</p>
        }

        const { id, name, model,
            passengers, length, starshipСlass, cargoCapacity, crew, maxAtmospheringSpeed } = this.state.starship;

        return (
                <div className ='StarShipsDetailsInfo'>
                <h3>{name}</h3>
                <div className ="d-flex info_block">
                    <img src ={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt='starship' />
                        <ul className ='detail_infoblock'>
                            <li>
                                <span>model: </span>
                                <span>{model}</span>
                            </li>
                            <li>
                                <span>passengers: </span>
                                <span>{passengers}</span>
                            </li>
                            <li>
                                <span>length: </span>
                                <span>{length}</span>
                            </li>
                            <li>
                                <span>starship сlass: </span>
                                <span>{starshipСlass}</span>
                            </li>
                            <li>
                                <span>cargo сapacity: </span>
                                <span>{cargoCapacity} </span>
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
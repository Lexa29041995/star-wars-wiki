import React from 'react';
import './DetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';
import ErrorTest from '../ErrorTest';
import {SwapiConsumer} from '../SwapiServiceContext'

export default class DetailsInfo extends React.Component {
    
    swapi = new SwapiServices();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId) {
        this.updatePerson()};
    }

    updatePerson () {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapi.getPerson(personId).then((person) => {
            this.setState({person});
        })
    }

    render () {

        if(!this.state.person) {
            return <p>please, choose the character</p>
        }

        const { id, name, mass,
            birthDate, gender} = this.state.person;

        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                       return (
                        <div className ='DetailsInfo'>
                        <h3>{name}</h3>
                        <div className ="d-flex info_block">
                        <img src ={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='Person' />
                            <ul className ='detail_infoblock'>
                                <li>
                                    <span>mass</span>
                                    <span>{this.swapi.mass}</span>
                                </li>
                                <li>
                                    <span>birth date</span>
                                    <span>{birthDate}</span>
                                </li>
                                <li>
                                    <span>gender</span>
                                    <span>{gender}</span>
                                </li>
                            </ul>
                        </div>
                        <ErrorTest />
                    </div>
                       ) 
                    }
                }
                
            </SwapiConsumer> 
        );
    }
    
}

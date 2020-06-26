import React from 'react';
import './DetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class DetailsInfo extends React.Component {
    
    static contextType = SwapiContext;

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

        this.context.getPerson(personId).then((person) => {
            this.setState({person});
        })
    }

    render () {

        if(!this.state.person) {
            return <p>please, choose the character</p>
        }

        const { id, name, mass,
            birthDate, gender, hairColor, height, eyeColor, created} = this.state.person;

        return (
                <div className ='DetailsInfo'>
                <h3>{name}</h3>
                <div className ="d-flex info_block">
                    <img src ={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='Person' />
                        <ul className ='detail_infoblock'>
                            <li>
                                <span>mass: </span>
                                <span>{mass} kg</span>
                            </li>
                            <li>
                                <span>birth date: </span>
                                <span>{birthDate}</span>
                            </li>
                            <li>
                                <span>gender: </span>
                                <span>{gender}</span>
                            </li>
                            <li>
                                <span>hair color: </span>
                                <span>{hairColor}</span>
                            </li>
                            <li>
                                <span>height: </span>
                                <span>{height} </span>
                            </li>
                            <li>
                                <span>eye color: </span>
                                <span>{eyeColor}</span>
                            </li>
                            <li>
                                <span>created: </span>
                                <span>{created}</span>
                            </li>
                        </ul>
                    </div>
                        {/* <ErrorTest /> */}
                    </div>
                    ) 
                
    }
    
}


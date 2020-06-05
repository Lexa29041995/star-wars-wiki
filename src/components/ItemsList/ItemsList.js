import React from 'react';

import './ItemsList.css';
import SwapiServices from '../../services/SwapiServices';

export default class ItemsList extends React.Component {
    
    swapi = new SwapiServices();

    state = {
        people: null,
    }

    componentDidMount() {
        this.swapi.getAllPeople().then((people)=> {
                this.setState({
                    people
                })

            });
    }

    render() {
        return(
            <ul className ='ItemsList'>
                <li>
                    First Person 
                </li>
                <li>
                    Second Person 
                </li>
                <li>
                    Third Person 
                </li>
            </ul>
        );
    }
    }
    
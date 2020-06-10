import React from 'react';

import './ItemsList.css';
import Loader from '../Loader';
import '../Loader/Loader.css'
import SwapiServices from '../../services/SwapiServices';

export default class ItemsList extends React.Component {
    constructor() {
        super();

    }

    swapi = new SwapiServices();

    state = {
        people: null,
        load: true,
        error: false,
        
    }

    componentDidMount() {
        this.swapi.getAllPeople().then((people)=> {
                this.setState({
                    people
                })
                people.forEach( item => console.log(item.name))
            });
    }

    renderItems (arr) {
        return arr.map((item) => {
            return (
                <li 
                className = 'list-group-item'
                key = {item.id}
                onClick = {() => this.props.onItemClick(item.id)}
                > 
                    {item.name}
                </li>
            );
        });
    }

    render() {

        const { people } =this.state;

        if (!people) {
            return <Loader />
        }

        const items = this.renderItems(people)
        
        return (
            <ul className = 'ItemList'>
                {items}
            </ul>
        )
    };
}
    
        
    
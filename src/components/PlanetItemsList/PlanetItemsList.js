import React from 'react';

import './PlanetItemsList.css';

import SwapiServices from '../../services/SwapiServices';
import withData from '../helpers/withData';

 const PlanetItemsList =(props) => {

    const {data, onItemClick, renderItem} = props;

    const renderItems = (arr) => {
        return arr.map((item) => {
            const text = renderItem(item)
            return (
                <li 
                className = 'list-group-item'
                key = {item.id}
                onClick = {() => onItemClick(item.id)}
                > 
                    {text}
                </li>
            );
        });
    }


        const items = renderItems(data)
        
        return (
            <ul className = 'PlanetItemList'>
                {items}
            </ul>
        )

}

const { getAllPlanets} = new SwapiServices ();

export default withData(PlanetItemsList, getAllPlanets);
    
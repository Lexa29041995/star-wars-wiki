import React from 'react';

import './SpeciesItemsList.css';

import SwapiServices from '../../services/SwapiServices';
import withData from '../helpers/withData';

 const SpeciesItemsList =(props) => {

    const {data, onItemClick, renderItem} = props;

    const renderItems = (arr) => {
        return arr.map((item) => {
            const text = renderItem(item)
            return (
                <li 
                className = 'list-group-item LiItems '
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
            <ul className = 'SpeciesItemList'>
                {items}
            </ul>
        )

}

const { getAllSpecies} = new SwapiServices ();

export default withData(SpeciesItemsList, getAllSpecies);
    
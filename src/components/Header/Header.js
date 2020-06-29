import React from 'react';
import {Link} from 'react-router-dom';
import DropDownList from '../DropDownList';

import './Header.css'

const Header =() => {
    return (
        <div className = 'Header d-flex'>
            <h1>
                <Link to = '/'>Star Wars Wiki</Link>
            </h1>
            <ul className ='d-flex main_nav'>
                <li>
                    <Link to ='/people'>People</Link>
                </li>
                <li>
                    <Link to ='/planets'>Planets</Link>
                </li>
                <li>
                    <Link to ='/ships'>StarShips</Link>
                </li>
                <li>
                    <Link to ='/species'>Species</Link>
                </li>
                <li>
                    <Link to ='/vehicles'>Vehicles</Link>
                </li>
            </ul>
            <DropDownList />
        </div>
    );
}

export default Header;
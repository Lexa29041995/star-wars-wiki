import React from 'react';

import './Header.css'

const Header =() => {
    return (
        <div className = 'Header d-flex'>
            <h1>Star Wars Wiki</h1>
            <ul className ='d-flex main_nav'>
                <li>
                    <a href = 'fdsf'>People</a>
                </li>
                <li>
                    <a href = 'dfs'>Planets</a>
                </li>
                <li>
                    <a href = 'fdsfs'>Ships</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
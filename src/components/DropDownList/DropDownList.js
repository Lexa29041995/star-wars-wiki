import React from 'react';
import {Link} from 'react-router-dom';

import './DropDownList.css';

const DropDownList = () => {
    return (
        <div class="DropDownList btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><Link to ='/people'>People</Link></button>
                <button class="dropdown-item" type="button"><Link to ='/planets'>Planets</Link></button>
                <button class="dropdown-item" type="button"><Link to ='/ships'>StarShips</Link></button>
                <button class="dropdown-item" type="button"><Link to ='/species'>Species</Link></button>
                <button class="dropdown-item" type="button"><Link to ='/vehicles'>Vehicles</Link></button>
            </div>
        </div>
    )
}

export default DropDownList;
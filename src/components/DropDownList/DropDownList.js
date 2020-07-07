import React from 'react';
import {Link} from 'react-router-dom';

import './DropDownList.css';

const DropDownList = () => {
    return (
        <div className="DropDownList btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button"><Link to ='/people'>People</Link></button>
                <button className="dropdown-item" type="button"><Link to ='/planets'>Planets</Link></button>
                <button className="dropdown-item" type="button"><Link to ='/ships'>StarShips</Link></button>
                <button className="dropdown-item" type="button"><Link to ='/species'>Species</Link></button>
                <button className="dropdown-item" type="button"><Link to ='/vehicles'>Vehicles</Link></button>
            </div>
        </div>
    )
}

export default DropDownList;
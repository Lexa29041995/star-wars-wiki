import React from 'react';
import './DetailsInfo.css';

const DetailsInfo = () => {
    return(
        <div className ='DetailsInfo'>
            <h3>Person name</h3>
            <div className ="d-flex info_block">
                <img src ='https://versiya.info/uploads/posts/2019-09/1568404448_photovisi-download-1.jpg' alt ='Planet'/>
                <ul className ='detail_infoblock'>
                    <li>
                        <span>mass</span>
                        <span>200</span>
                    </li>
                    <li>
                        <span>homeworld</span>
                        <span>Mars</span>
                    </li>
                    <li>
                        <span>gender</span>
                        <span>male</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsInfo;
import React from 'react';

import './ErrorComponent.css'
import errorIcon from './darth-vader.png'

const ErrorComponent = () => {
    return (
        <div className = 'ErrorComponent'>
            <img src = {errorIcon} alt = 'Ops' />
            <p>
                <span>Somthing gone wrong!</span>
            </p>
            <p>
                <span>Do not worry about it!</span>
            </p>
        </div>
    )
}
export default ErrorComponent;
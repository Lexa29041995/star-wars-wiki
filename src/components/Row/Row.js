import React from 'react';



const Row = ({ left, right}) => {
    return (
        <div className = 'Row d-flex row '>
            <div className= 'col'>
                {left}
            </div>
            <div className = 'col'>
                {right}
            </div>
        </div>
    );
}


export default Row
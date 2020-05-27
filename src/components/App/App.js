import React from 'react';
import SwapiServices from '../../services/SwapiServices'

const App = () => {

  const swapi = new SwapiServices();
  
  swapi.getPerson(3)
    .then ((body) => {
        console.log(body);
    })

    console.log('app')
    return (
        <div>
            Header
        </div>
    )
}

export default App;
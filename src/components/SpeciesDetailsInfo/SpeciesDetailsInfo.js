import React from 'react';
import './SpeciesDetailsInfo.css';
import SwapiContext from '../SwapiServiceContext';

export default class SpeciesDetailsInfo extends React.Component {
    
    static contextType = SwapiContext;

    state = {
        species: null
    };

    componentDidMount() {
        this.updateSpecies();
    }

    componentDidUpdate(prevProps) {
        if(this.props.speciesId !== prevProps.speciesId) {
        this.updateSpecies()};
    }

    updateSpecies () {
        const {speciesId} = this.props;
        if (!speciesId) {
            return;
        }

        this.context.getOwnSpecies(speciesId).then((species) => {
            this.setState({species});
        })
    }

    render () {

        if(!this.state.species) {
            return <p className ='SpeciesDetailsInfo'>Please, choose the species</p>
        }

        const { id, name, classification,
            designation, averageHeight, averageLifespan, language, skinColors, hairColors} = this.state.species;

        return (
                <div className ='SpeciesDetailsInfo'>
                <h3>{name}</h3>
                <div className ="d-flex info_block">
                    <img src ={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} alt='Species' />
                        <ul className ='detail_infoblock'>
                            <li>
                                <span>classification: </span>
                                <span>{classification}</span>
                            </li>
                            <li>
                                <span>designation: </span>
                                <span>{designation}</span>
                            </li>
                            <li>
                                <span>average height: </span>
                                <span>{averageHeight} sm</span>
                            </li>
                            <li>
                                <span>average lifespan: </span>
                                <span>{averageLifespan}</span>
                            </li>
                            <li>
                                <span>language: </span>
                                <span>{language} </span>
                            </li>
                            <li>
                                <span>skin colors: </span>
                                <span>{skinColors}</span>
                            </li>
                            <li>
                                <span>hair colors: </span>
                                <span>{hairColors}</span>
                            </li>
                        </ul>
                    </div>
                        {/* <ErrorTest /> */}
                    </div>
                    ) 
                
    }
    
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import characters from './data';
import CharacterInfo from './characterInfo';

const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '500px'
}

class CharactersList extends Component {
    state = {
        people: []
    }

    handleClick = async (e, char) => {
        e.preventDefault();

        this.setState({
            people: char
        })
    }

    render() {
        const { people } = this.state;
        return (
            <div>
                    <CharacterInfo people={people}/>
                <div>
                    {characters.map((char, ind) => {
                        return (
                            <div style={style} key={char + ind} onClick={(e) => this.handleClick(e, char)}>{char.name}</div>
                        )
                    })}
                </div>
                {/* <CharacterInfo people={people}/> */}
            </div>
        )
    }

}

export default CharactersList;

CharactersList.propTypes = {
    people: PropTypes.array
}
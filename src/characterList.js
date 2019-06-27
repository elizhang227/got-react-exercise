import React, { Component } from 'react';
import PropTypes from 'prop-types';

import characters from './data';
import CharacterInfo from './characterInfo';

class CharactersList extends Component {
    state = {
        people: []
    }

    handleClick = async (e, char) => {
        e.preventDefault();

        this.setState({
            people: characters
        })
    }

    render() {
        const { people } = this.state;
        return (
            <div>
                {Object.keys(characters).map((char, ind) =>
                    <button key={char + ind} onClick={(e) => this.handleClick(e, char)}>
                        <b>{char}</b>
                    </button>
                )}
                <CharacterInfo people={people}/>
            </div>
        )
    }

}

export default CharactersList;

CharactersList.propTypes = {
    people: PropTypes.array
}
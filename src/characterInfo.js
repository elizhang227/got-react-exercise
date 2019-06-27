import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    background: 'black',
    listStyle: 'none',
    fontSize: '30px',
    color: 'red'
}


class CharacterInfo extends Component {
    state = {
        info: {}
    }

    render() {
        const charInfo = this.props.people;
        console.log("this is charInfo", charInfo);
        console.log("this is test", charInfo.aliases)

        return (
            <div>
                <ul style={style}>
                    <li><b>Gender: </b>{charInfo.gender}</li>
                    <li><b>Aliases: </b>{charInfo.aliases}</li>
                    <li><b>Titles: </b>{charInfo.titles}</li>
                </ul>

            </div>
        )
    }
}

export default CharacterInfo;

CharacterInfo.propTypes = {
    info: PropTypes.object
}
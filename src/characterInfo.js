import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterInfo extends Component {
    state = {
        info: {}
    }

    // handleClick = async (e, stuff) => {
    //     e.preventDefault();

    //     await this.setState({
    //         info: this.props.stuff
    //     })
    // }

    render() {
        const charInfo = this.props.people;
        console.log("this is charInfo", charInfo);
        return (
            <div>Hi</div>
        )
    }
}

export default CharacterInfo;

CharacterInfo.propTypes = {
    info: PropTypes.object
}
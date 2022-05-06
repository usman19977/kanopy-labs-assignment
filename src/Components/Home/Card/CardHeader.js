import React from 'react';
import PropTypes from 'prop-types';

CardHeader.propTypes = {
    identifier : PropTypes.number
};

function CardHeader({identifier}) {

    var style = {
        backgroundColor: 'black',
    };
    return (
        <header style={style} className="card-header">
            <h1 className="card-header--title">{identifier}</h1>
        </header>
    )
}

export default CardHeader;
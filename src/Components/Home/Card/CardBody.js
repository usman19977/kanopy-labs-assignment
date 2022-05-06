import React from 'react';
import PropTypes from 'prop-types';
import CardButton from "./CardButton";
import { convertDateTime } from '../../../Helpers/helper'

CardBody.propTypes = {
    name: PropTypes.string,
    createdAt: PropTypes.string,
    gender : PropTypes.string,
    dateOfbirth : PropTypes.string,
    skinColor : PropTypes.string,
    hairColor : PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    height : PropTypes.string,
    mass : PropTypes.string,
    identifier : PropTypes.number
};

function CardBody({ name , createdAt , gender , dateOfbirth , skinColor , hairColor , films , height , mass ,identifier }) {
    return (
        <div className="card-body">
            {/*<p className="date">March 20 2015</p>*/}
            <p className="date">{convertDateTime(createdAt)}</p>

            <h2>{name}</h2>

            <p className="body-content"><b>{name.toUpperCase()}</b> was born <b>{gender === 'n/a' ? 'female' : 'male'}</b> on <b>{dateOfbirth}</b> {gender === 'male' ? 'his' : 'her'} skin color is <b>{skinColor}</b> , hair color is <b>{hairColor === 'n/a' ? 'blonde' : hairColor}</b> {gender === 'male' ? 'he' : 'she'} loved <b>{films.length}</b> {films.length > 1 ? 'films' : 'film'} & is about <b>{height}</b> ft tall & weights about <b>{mass}</b> Kg </p>

            <CardButton identifier={identifier} />
        </div>
    );
}

export default CardBody;
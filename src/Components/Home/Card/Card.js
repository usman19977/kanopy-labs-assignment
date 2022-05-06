import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

Card.propTypes = {
 data : PropTypes.any,
    identifier :PropTypes.number
};

function Card({data,identifier}) {
    return (
        <article className="card">
            <CardHeader identifier={identifier}/>
            <CardBody
                identifier={Number(data.url.split('/')[5])}
            name={data.name}
            createdAt={data.created}
            gender={data.gender}
            dateOfbirth={data.birth_year}
            skinColor={data.skin_color}
            hairColor={data.hair_color}
            films={data.films}
            height={data.height}
            mass={data.mass}
            />
        </article>
    );
}

export default Card;


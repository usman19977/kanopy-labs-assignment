import React from 'react';
import PropTypes from 'prop-types';
import  {useNavigate} from 'react-router-dom';

CardButton.propTypes = {
    identifier : PropTypes.number
};

function CardButton({identifier}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/person/"+identifier);
    }

    return (

        <button className="button button-primary" onClick={handleClick} type={"button"}>
            Find out more
        </button>

    );
}

export default CardButton;
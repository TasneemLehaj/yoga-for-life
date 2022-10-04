import React from 'react';
import './Card.css'
const Card = ({ card, handleAddToBtn }) => {
    // console.log(props);

    const { img, description, time, activityName } = card;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>Activity Name :{activityName}</h4>
            <p>Description : {description}</p>
            <p> Time required :<b> {time} </b></p>
            <button onClick={() => handleAddToBtn(card)} className='add-btn'> Add To List </button>
        </div>
    );
};

export default Card;
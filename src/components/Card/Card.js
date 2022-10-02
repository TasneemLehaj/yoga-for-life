import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const { img, description, time, activityName } = props.card

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>Activity Name :{activityName}</h4>
            <p>Description : {description}</p>
            <p> Time :<b> {time} </b></p>
            <button className='add-btn'> Add To List </button>
        </div>
    );
};

export default Card;
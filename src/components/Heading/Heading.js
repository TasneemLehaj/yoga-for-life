import React from 'react';
import yogaImage from '../../img/yogalogo.png'
import './Heading.css'

const Heading = () => {
    return (
        <div className='heading'>
            <h2> YOGA FOR LIFE
                <span className='sub-logo'> Select Today's Exercise </span>
            </h2>
            <img src={yogaImage} alt="" />
        </div>
    );
};

export default Heading;
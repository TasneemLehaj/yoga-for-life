import React from 'react';
import yogaImage from '../../img/yogalogo.png'
import './Heading.css'

const Heading = () => {
    return (
        <div className='heading'>
            <h2> YOGA FOR LIFE </h2>
            <img src={yogaImage} alt="" />
            {<h4> Select Today's Exercise </h4>}
        </div>
    );
};

export default Heading;
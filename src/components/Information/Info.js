import React from 'react';
import './Info.css'
import personalImage from '../../img/Tasneem.jpg'
const Info = () => {
    return (
        <div>
            <div className='personal-info'>
                <div>
                    <img src={personalImage} alt="" /></div>
                <div>
                    <h4>Tasneem Lehaj</h4>
                    <p><small>Dhaka,Bangladesh</small></p>
                </div>
            </div>




        </div>
    );
};

export default Info;
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
                    <h5><small>Dhaka,Bangladesh</small></h5>
                    <h5><b>Weight: 57kg</b></h5>
                    <h5><b>Height:5'3"</b></h5>
                    <h5><b>Age: 28yrs</b></h5>
                </div>
            </div>
            <div>
                <p></p>
            </div>




        </div>
    );
};

export default Info;
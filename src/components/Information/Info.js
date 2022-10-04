import React, { useEffect, useState } from 'react';
import './Info.css'
import personalImage from '../../img/Tasneem.jpg'

const Info = ({ sumTime }) => {
    // const notify = () => toast('WOW... Completed the all event!');

    const [time, setTime] = useState([]);
    const breakTime = (timeAdded) => {
        setTime(timeAdded);
        localStorage.setItem('time', timeAdded);
    };

    useEffect(() => {
        const previousTime = localStorage.getItem('time');
        if (previousTime) {
            setTime(previousTime);
        }
    }, []);

    let total = 0;
    for (const sumCount of sumTime) {
        total = total + sumCount.time;
    }





    // let total = 0;
    // for (const sum of sumTime) {
    //     total = total + sum.time
    // }


    return (
        <div>
            <div className='personal-info'>
                <div>
                    <img src={personalImage} alt="" /></div>
                <div>
                    <h4>Tasneem Lehaj</h4>
                    <h5><small>Dhaka,Bangladesh</small></h5>
                    <h5><b>Weight: 57kg</b></h5>
                    <h5><b>Height:5'3" </b></h5>
                    <h5><b>Age: 28yrs</b></h5>
                </div>
            </div>

            <div className='break-btn-div'>
                <button onClick={() => breakTime('10s')} className='add-btn2'> 10s</button>
                <button onClick={() => breakTime('20s')} className='add-btn2'> 20s</button>
                <button onClick={() => breakTime('30s')} className='add-btn2'> 30s</button>
                <button onClick={() => breakTime('40s')} className='add-btn2'> 40s</button>
            </div>


            <div>
                <h3>Exercise Time: {total} </h3>
                <p> </p>
            </div>

            <div>
                <h3> Break Time: {time} </h3>
                <p>  </p>
            </div>

            <button className='add-btn'> Activity Completed </button>


        </div>
    );
};

export default Info;
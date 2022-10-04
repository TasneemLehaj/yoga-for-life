import React, { useEffect, useState } from 'react';
import './Info.css'
import personalImage from '../../img/Tasneem.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = ({ sumTime }) => {

    const notify = () => toast.success(" Good Job! You finished it successfully!");

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
    for (const count of sumTime) {
        total = total + count.time;
    }


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
                <h3>Exercise Time: {total}s </h3>
            </div>

            <div>
                <h3> Break Time: {time} </h3>
            </div>

            <div>
                <button onClick={notify} className='add-btn'> Activity Completed </button>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Info;
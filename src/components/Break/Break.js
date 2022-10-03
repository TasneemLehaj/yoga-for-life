import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div >
            <div className='break-btn-div'>
                <button className='add-btn2'> 10s</button>
                <button className='add-btn2'> 20s</button>
                <button className='add-btn2'> 30s</button>
                <button className='add-btn2'> 40s</button>
            </div>
            <h4> Break Time :{ }</h4>

        </div>
    );
};

export default Break;
import React, { useEffect, useState } from 'react';
import './Gallery.css'
import Card from '../Card/Card';
import Info from '../Information/Info';
import Break from '../Break/Break';
import ExerciseTime from '../Exercise/ExerciseTime';
import Question from '../Questions/Questions'
const Gallery = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])



    const handleAddToBtn = (props) => {

        console.log();
    }

    return (
        <div className='gallery'>
            <div className='card-container'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}>
                        handleAddToBtn={handleAddToBtn}
                    </Card>
                    )
                }

            </div>

            <div className='info-container'>
                <Info></Info>
                <Break></Break>
                <ExerciseTime></ExerciseTime>

                <button className='add-btn'> Activity Completed </button>

            </div>
            <div >
                <Question></Question>
            </div>

        </div>
    );
};

export default Gallery;
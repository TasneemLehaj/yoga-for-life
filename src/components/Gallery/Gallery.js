import React, { useEffect, useState } from 'react';
import './Gallery.css'
import Card from '../Card/Card';
import Info from '../Information/Info';
import Question from '../Questions/Questions'
const Gallery = () => {

    const [cards, setCards] = useState([]);

    const [sumTime, setSumTime] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])


    const handleAddToBtn = (card) => {
        const sum = [...sumTime, card];
        setSumTime(sum);

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

                <Info sumTime={sumTime}></Info>

            </div>
            <div >
                <Question></Question>
            </div>

        </div>
    );
};

export default Gallery;
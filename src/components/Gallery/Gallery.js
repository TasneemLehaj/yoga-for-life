import React, { useEffect, useState } from 'react';
import './Gallery.css'
import Card from '../Card/Card';
import Info from '../Information/Info';
const Gallery = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])



    return (
        <div className='gallery'>
            <div className='card-container'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}>
                    </Card>
                    )
                }
            </div>


            <div className='info-container'>
                <Info></Info>
            </div>

        </div>
    );
};

export default Gallery;
import data from '../../../words.json';
import '../Slider/Slider.scss';
import CardWord from '../CardWord/CardWord';
import React, { useState } from 'react';


function Slider() {
    const [cardIndex, setCardIndex] = useState(0);
    const showPrevCard = () => {
    setCardIndex(prevIndex => prevIndex !== 0 ? prevIndex - 1 : 0);
    }

    const showNextCard = () => {
        setCardIndex(prevIndex => prevIndex !== data.lenght - 1 ? prevIndex + 1 : prevIndex)
    }
    return (
        <>
        <div className='dataWord_container'>
        {cardIndex == 0 ? '' : <button className="arrow__button" onClick={showPrevCard}>
            <img className='arrow' src="src\assets\icons8-стрелка-50 (2).png" alt="prev"></img>
        </button>}
    <CardWord
            key = {data[cardIndex].id}
            english = {data[cardIndex].english}
            transcription = {data[cardIndex].transcription}
            russian = {data[cardIndex].russian}
            />
            {cardIndex == data.length - 1 ? '' : <button className="arrow__button" onClick={showNextCard}><img className='arrow' src="src\assets\icons8-стрелка-50 (3).png" alt="next"></img></button>}
        </div>
        </>
    )
        }

export default Slider
import data from '../../../words.json';
import '../Slider/Slider.scss';
import CardWord from '../CardWord/CardWord';
import React, { useState } from 'react';


function Slider() {
    const [cardIndex, setCardIndex] = useState(0);
    const [learned, setLearned] = useState(0);
    const [learnedAll, setLearnedAll] = useState(false);
    const showPrevCard = () => {
    setCardIndex(prevIndex => prevIndex !== 0 ? prevIndex - 1 : 0);
    };

    const showNextCard = () => {
        setCardIndex(prevIndex => prevIndex !== data.lenght - 1 ? prevIndex + 1 : prevIndex)
    };

    const countWords = () => {
        setLearned(index => index !== data.length ? index + 1 : setLearnedAll(true))
    }

    return (
        <div className='dataWord'>
        <div className='dataWord_container'>
        {cardIndex == 0 ? '' : <button className="arrow__button" onClick={showPrevCard}>
            <img className='arrow' src="src\assets\icons8-стрелка-50 (2).png" alt="prev"></img>
        </button>}
    <CardWord
            key = {data[cardIndex].id}
            english = {data[cardIndex].english}
            transcription = {data[cardIndex].transcription}
            russian = {data[cardIndex].russian}
            countWords = {countWords}
            />
            {cardIndex == data.length - 1 ? '' : <button className="arrow__button" onClick={showNextCard}><img className='arrow' src="src\assets\icons8-стрелка-50 (3).png" alt="next"></img></button>}
            </div>
            {learnedAll
            ? <div className="words__counter">Вы выучили все слова!</div>
            : <div className="words__counter">Выучено слов: {learned}/{data.length}</div>}
        </div>
    )
        }

export default Slider
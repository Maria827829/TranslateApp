import '../CardWord/CardWord.scss';
import { useState} from 'react';

function CardWord(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed)
    }
    return (
        <div className='cardWord_container'>
            <p className='cardWord_container_englishWord'>{props.english}</p>
            <p className='cardWord_container_transcription'>{props.transcription}</p>
            <button onClick={handleChange} className='check_button'>
                {pressed ? props.russian : 'Проверить'}
                </button>
        </div>
    )
}

export default CardWord
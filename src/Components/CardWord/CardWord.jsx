import '../CardWord/CardWord.scss';
import { useState, useEffect, useRef} from 'react';

function CardWord(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
        props.countWords();
    }
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);
    return (
        <>
        <div className='cardWord_container'>
            <p className='cardWord_container_englishWord'>{pressed ? props.russian : props.english}</p>
            <p className='cardWord_container_transcription'>{ pressed ? '' : props.transcription}</p>
            <button onClick={handleChange} ref={ref} className='check_button'>
                {pressed ? 'Скрыть' : 'Проверить'}
                </button>
        </div>
        </>
    )
}

export default CardWord
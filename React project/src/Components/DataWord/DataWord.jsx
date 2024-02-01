import data from '../../../words.json';
import '../DataWord/DataWord.scss';
import CardWord from '../CardWord/Cardword';


function DataWord() {
    return (
        <div className='dataWord_container'>
        {data.map(item =>
    <CardWord
            key = {item.id}
            english = {item.english}
            transcription = {item.transcription}
            russian = {item.russian}
            />)}
        </div>
    )
}

export default DataWord
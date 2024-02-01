import '../WordsList/WordsList.scss'
import data from '../../../words.json'
import CardItem from '../CardItem/CardItem'
function WordsList() {
    return (
        <div className='wordsList'>
    <div className='wordsList_headers'>
        <h2>Английский</h2>
        <h2>Транскрипция</h2>
        <h2>Русский</h2>
        <h2>Теги</h2>
        </div>
        <div className='wordsList_words'>
        {data.map(item =>
    <CardItem
            key = {item.id}
            english = {item.english}
            transcription = {item.transcription}
            russian = {item.russian}
            tags = {item.tags}/>)}
            </div>
    </div>
    )
}

export default WordsList
import { useState } from 'react'
import './CardItem.scss'

function CardItem(props) {
  //Состояния для режима редактирования
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags
  })

  //Обработчик для кнопки 'Редактировать'
  const handleEdit = () => {
    setIsEditing(true);
  };

  //Обработчик для кнопки 'Отмена'
  const handleCancel = () => {
    setIsEditing(false);
    setEditableData ({
      english: props.english,
      transcription: props.transcription,
      russian: props.russian,
      tags: props.tags
    });
  };

  //Обработчик для изменения данных в полях ввода
  const handleChange = (e, field) => {
    setEditableData ({...editableData, [field]: e.target.value});
  }

    return (
      <div className='container'>
        {isEditing ? (
          <>
          <input
          value={editableData.english}
          onChange={(e) => handleChange(e, 'english')}
          className='container_input'
          />
          <input
          value={editableData.transcription}
          onChange={(e) => handleChange(e, 'transcription')}
          className='container_input'
          />
          <input
          value={editableData.russian}
          onChange={(e) => handleChange(e, 'russian')}
          className='container_input'
          />
          <input
          value={editableData.tags}
          onChange={(e) => handleChange(e, 'tags')}
          className='container_input'
          />
          <button className='middle_button' onClick={handleCancel}>Отмена</button>
          </>
        ) : (
          <>
          <div className='container_div'>{props.english}</div>
              <div className='container_div'>{props.transcription}</div>
              <div className='container_div'>{props.russian}</div>
              <div className='container_div'>{props.tags}</div>
              <button className='middle_button' onClick={handleEdit}>Редактировать</button>
              <button className='middle_button'>Удалить</button>
          </>
        )}
        </div>
    )
  }

  export default CardItem
import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class GroupDetails extends Component {
  constructor(props) {
    super(props)
  }

  closeGroupDetails = () => {
    this.props.onCloseGroupDetails()
  }

  render() {
    console.log(this.props.group);
    return (
      <div className='table__details'>
        <div className='table__details-block'>
          <div className='table__details-block-title'>
            <h2>{ this.props.group.name }</h2>
            <a href={ this.props.group.link } target='_blank' >Перейти в группу</a>
          </div>
          <div className='table__details-block-info'>
            <p className='separator'>Основная информация</p>
            <p>Страна: { this.props.group.country !== '' ? this.props.group.country : 'Не указано' }</p>
            <p>Город: { this.props.group.city !== '' ? this.props.group.city : 'Не указано' }</p>
            <p>Тематика: { this.props.group.subject_matter !== '' ? this.props.group.subject_matter : 'Не указано' }</p>
            <p>Описание: { this.props.group.text !== '' ? this.props.group.text : 'Не указано' }</p>
            <p className='separator'>Данные по группе</p>
            <p>Количество подписчиков: { this.props.group.number_of_participants !== '' ? this.props.group.number_of_participants : 'Не указано' }</p>
            <p>Количество тем для обсуждения: { this.props.group.number_of_discussion_topics !== '' ? this.props.group.number_of_discussion_topics : 'Не указано' }</p>
            <p>Количество документов: { this.props.group.number_of_documents !== '' ? this.props.group.number_of_documents : 'Не указано' }</p>
            <p>Количество фотоальбомов: { this.props.group.number_of_photo_albums !== '' ? this.props.group.number_of_photo_albums : 'Не указано' }</p>
            <p>Количество фотографий: { this.props.group.number_of_photos !== '' ? this.props.group.number_of_photos : 'Не указано' }</p>
            <p>Количество постов: { this.props.group.number_of_uploaded_posts !== '' ? this.props.group.number_of_uploaded_posts : 'Не указано' }</p>
            <p>Количество видео: { this.props.group.number_of_videos !== '' ? this.props.group.number_of_videos : 'Не указано' }</p>
            <p className='separator'>Дополнительная информация</p>
            <p>Дата создания: { this.props.group.created_at !== '' ? this.props.group.created_at : 'Не указано' }</p>
            <p>Дата обновления: { this.props.group.updated_at !== '' ? this.props.group.updated_at : 'Не указано' }</p>
          </div>

          <div className='table__details-close' onClick={ this.closeGroupDetails }>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 21.25H10C9.31667 21.25 8.75 20.6833 8.75 20C8.75 19.3167 9.31667 18.75 10 18.75H30C30.6833 18.75 31.25 19.3167 31.25 20C31.25 20.6833 30.6833 21.25 30 21.25Z" fill="#292D32"/>
              <path d="M20 31.25C19.3167 31.25 18.75 30.6833 18.75 30V10C18.75 9.31667 19.3167 8.75 20 8.75C20.6833 8.75 21.25 9.31667 21.25 10V30C21.25 30.6833 20.6833 31.25 20 31.25Z" fill="#292D32"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
      onCloseGroupDetails: () => { dispatch({ type: 'CLOSE_ROW_DATA' }) }
  }
}

export default connect(null, mapDispatchToProps)(GroupDetails)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class CommentDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.comment);
    return (
      <div className='table__details'>
        <div className='table__details-block'>
          <div className='table__details-block-title'>
            <h2>{ this.props.comment.id }</h2>
            <a href={ this.props.comment.link_to_comment } target='_blank' >Перейти в комментарий</a>
          </div>
          <div className='table__details-block-info'>
            <div className='row'>
              <div className='column'>
                <p className='separator'>Основная информация</p>
                <p>Автор: { this.props.comment.first_last_name !== '' ? <a href={ this.props.comment.link_to_the_author } target='_blank' className='name'>{ this.props.comment.first_last_name }</a> : 'Не указано' }</p>
                <p>Дата написания: { this.props.comment.date_of_publication !== '' ? this.props.comment.date_of_publication : 'Не указано' }</p>
                <p>Ссылка на комментарий: { this.props.comment.link_to_comment !== '' ? <a href={ this.props.comment.link_to_comment } target='_blank' className='name'>{ this.props.comment.link_to_comment }</a> : 'Не указано' }</p>
                <p>Количество лайков: { this.props.comment.number_of_likes !== '' ? this.props.comment.number_of_likes : 'Не указано' }</p>
                <p>Текст: { this.props.comment.text !== '' ? this.props.comment.text : 'Не указано' }</p>
              </div>
              <div className='column'>
                <p className='separator'>Дополнительно</p>
                <p>Вероятность: { this.props.comment.probability !== '' ? this.props.comment.probability : 'Не указано' }</p>
                <p>Тональность: { this.props.comment.tonality !== '' ? <span className={ `table__details-tonality ${ this.props.comment.tonality === 'neutral' ? 'neutral' : this.props.comment.tonality === 'positive' ? 'positive' : this.props.comment.tonality === 'negative' ? 'negative' : '' }` }>{ this.props.comment.tonality === 'neutral' ? 'Нейтральная' : this.props.comment.tonality === 'positive' ? 'Позитивная' : this.props.comment.tonality === 'negative' ? 'Негативная' : '' }</span> : 'Не указано' }</p>
              </div>
            </div>
          </div>

          <div className='table__details-close' onClick={ this.props.close }>
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

export default connect(null, null)(CommentDetails)

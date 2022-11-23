import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import LineChart from '../../../Charts/Line'
import PolarChart from '../../../Charts/Polar'
import CommentDetails from './CommentDetails'
import Dropdown from '../../../Default/Dropdown'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class UserDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewComment: false,
      comment: {},
      searchValue: '',
      dropdownValue: 'all',
      comments: []
    }
  }

  closeUserDetails = () => {
    this.props.onCloseUserDetails()
  }

  estimationUser(comments) {
    var tmp = 0
    comments.map((item) => {
      return tmp += parseFloat(item.probability)
    })
    var res = tmp / comments.length
    return res.toFixed(3)
  }

  getValues(comments) {
    var tmp = []
    comments.map((comment) => {
      return tmp.push(parseFloat(comment.probability))
    })
    return tmp
  }

  getLabels(comments) {
    var tmp = []
    comments.map((comment) => {
      return tmp.push(comment.id)
    })
    return tmp
  }

  getCountValues(comments) {
    var tmp = {
      positive: 0,
      neutral: 0,
      negative: 0
    }
    comments.map((item) => {
      if(item.tonality === 'positive') {
        return tmp.positive += 1
      }
      if(item.tonality === 'neutral') {
        return tmp.neutral += 1
      }
      if(item.tonality === 'negative') {
        return tmp.negative += 1
      }
    })
    return tmp
  }

  viewComment(comment) {
    this.setState({
      viewComment: true,
      comment: comment
    })
  }

  closeComment() {
    this.setState({
      viewComment: false,
      comment: {}
    })
  }

  dropdownHandler = (value) => {
    this.setState({ dropdownValue: value })
  }

  commentsTonalityFilter(word) {
    var tmp = this.props.user.COMMENTS || 'no-comments'
    if(tmp === 'no-comments') return
    var res = tmp.filter((item) => {
      if (word === 'all') return item
      else return item.tonality === word
    })
    return res
  }

  componentDidMount() {
    if(this.props.user.COMMENTS) {
      this.commentsTonalityFilter(this.state.dropdownValue)
    }
  }

  render() {
    // Фильтрация коммментариев по ключевому слову
    var searchHandler = this.commentsTonalityFilter(this.state.dropdownValue).filter((item) => {
      return item.text.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })

    return (
      <div className='table__details'>
        <div className='table__details-block'>
          <div className='table__details-block-title'>
            <h2>{ this.props.user.name ? this.props.user.name : '' } { this.props.user.second_name ? this.props.user.second_name : '' }</h2>
            <a href={ this.props.user.link } target='_blank' >Перейти в профиль</a>
          </div>
          <div className='table__details-block-info'>
              <div className='row'>
                <div className='column'>
                  <p className='separator'>Основная информация</p>
                  <p>Пол: { this.props.user.sex !== '' ? this.props.user.sex : 'Не указано' }</p>
                  <p>Дата рождения: { this.props.user.date_of_birth !== '' ?  this.props.user.date_of_birth : 'Не указано' }</p>
                  <p>Возраст: { this.props.user.years !== '' ? this.props.user.years : 'Не указано' }</p>
                  <p>Телефон: { this.props.user.phone !== '' ? this.props.user.phone : 'Не указано' }</p>
                  <p>Страна: { this.props.user.country !== '' ? this.props.user.country : 'Не указано' }</p>
                  <p>Город: { this.props.user.city !== '' ? this.props.user.city : 'Не указано' }</p>
                  <p>Семейное положение: { this.props.user.marital_status !== '' ? this.props.user.marital_status : 'Не указано' }</p>
                  <p>Политические убеждения: { this.props.user.political_beliefs !== '' ? this.props.user.political_beliefs : 'Не указано' }</p>
                  <p>Религия (Мировоззрение): { this.props.user.religion !== '' ? this.props.user.religion : 'Не указано' }</p>
                </div>
                <div className='column'>
                <p className='separator'>Работа</p>
                  <p>Компания: { this.props.user.company !== '' ? this.props.user.company : 'Не указано' }</p>
                  <p>Место работы: { this.props.user.current_employment !== '' ? this.props.user.current_employment : 'Не указано' }</p>
                </div>
                <div className='column'>
                <p className='separator'>Образование:</p>
                  <p>Школа: { this.props.user.school !== '' ? this.props.user.school : 'Не указано' }</p>
                  <p>Университет: { this.props.user.university !== '' ?  this.props.user.university : 'Не указано' }</p>
                </div>
                <div className='column'>
                  <p className='separator'>Дополнительная информация</p>
                  <p>Дата регистрации: { this.props.user.created_at !== '' ? this.props.user.created_at : 'Не указано' }</p>
                  <p>Последнее обновление: { this.props.user.updated_at !== '' ? this.props.user.updated_at : 'Не указано' }</p>
                  {/* <p>Последний визит: { this.props.user.visited_to_vk !== '' ? this.props.user.visited_to_vk : 'Не указано' }</p> */}
                  <p>Устройство: { this.props.user.divice_of_a_visit !== '' ? this.props.user.divice_of_a_visit : 'Не указано' }</p>
                </div>    
              </div>     
              {
                this.props.user.COMMENTS && this.props.user.COMMENTS.length !== 0 ? <>
                  <h3>Активность пользователя</h3>
                  <div className='row'>
                    <div className='column'>
                      <div className='row'>
                        <div className='column table__details-element'>
                          <span>Комментарии</span>
                          <div>{ this.props.user.COMMENTS.length }</div>
                        </div>
                        <div className='column table__details-element'>
                          <span>Оценка пользователя</span>
                          <div>{ this.estimationUser(this.props.user.COMMENTS) }</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='column'>
                          <input className='input' type="text" id='searchValue' name='searchValue' value={ this.state.searchValue } onChange={ (e) => { this.setState({ searchValue: e.target.value }) } } placeholder='Введите ключевое слово' />
                        </div>
                        <div className='column'>
                          <Dropdown classes='user-dropdown' handler={ this.dropdownHandler } />
                        </div>
                      </div>
                      <div className='table__details-comments'>
                        { searchHandler.length != 0 ? searchHandler.map((comment) => <Comment comment={ comment } classes='table__details-comment' key={ comment.id } view={ () => this.viewComment(comment) } />) : <div style={{ width: '100%', textAlign: 'center', color: '#A19B9B' }}>Комментариев нет</div> }
                      </div>
                    </div>
                    <div className='column center'>
                      <div className='table__details-chart-container'>
                        <h4>Комментарии пользователя</h4>
                        <div className='table__details-chart-60'>
                          <PolarChart
                            values={ this.getCountValues(this.props.user.COMMENTS) }
                          />
                        </div>
                      </div>
                      <div className='table__details-chart-container'>
                        <h4>Оценка активности пользователя</h4>
                        <div className='table__details-chart'>
                          <LineChart 
                            labels={ this.getLabels(this.props.user.COMMENTS) } 
                            values={ this.getValues(this.props.user.COMMENTS) }
                          />
                        </div>
                      </div>
                    </div>
                  </div>   
                </> : <h3>Пользователь не оставил комментариев</h3>
              }
          </div>

          <div className='table__details-close' onClick={ this.closeUserDetails }>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 21.25H10C9.31667 21.25 8.75 20.6833 8.75 20C8.75 19.3167 9.31667 18.75 10 18.75H30C30.6833 18.75 31.25 19.3167 31.25 20C31.25 20.6833 30.6833 21.25 30 21.25Z" fill="#292D32"/>
              <path d="M20 31.25C19.3167 31.25 18.75 30.6833 18.75 30V10C18.75 9.31667 19.3167 8.75 20 8.75C20.6833 8.75 21.25 9.31667 21.25 10V30C21.25 30.6833 20.6833 31.25 20 31.25Z" fill="#292D32"/>
            </svg>
          </div>

          { this.state.viewComment && this.state.comment ? <CommentDetails comment={ this.state.comment } close={ () => this.closeComment() } /> : '' }
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
      onCloseUserDetails: () => { dispatch({ type: 'CLOSE_ROW_DATA' }) }
  }
}

export default connect(null, mapDispatchToProps)(UserDetails)

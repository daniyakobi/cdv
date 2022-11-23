import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Loading from '../../../Loading/Loading'
import UserTable from './UserTable'
import UserPlates from './UserPlates'
import UserDetails from './UserDetails'
import GroupTable from './GroupTable'
import GroupDetails from './GroupDetails'
import PostTable from './PostTable'
import PostDetails from './PostDetails'
import CommentTable from './CommentTable'
import CommentDetails from "./CommentDetails";

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'
import dataBackground from '../../../../../assets/img/data.svg'
import VkTop from '../Vk/VkTop'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          loading: false,
          activeButton: '',
          tables: [
            { id: 1, url: '/api/social_users', title: 'Пользователи' },
            { id: 2, url: '/api/social_groups', title: 'Группы' },
            { id: 3, url: '/api/social_posts', title: 'Посты' },
            { id: 4, url: '/api/social_сomments', title: 'Комментарии' }
          ],
        }
    }

    getTablesHandler = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const apiUrl = e.target.dataset.url
        try {
          await axios.get(apiUrl)
            .then((res) => {
              this.setState({
                data: res.data,
                loading: false,
                activeButton: e.target.dataset.title
              })
            })
            .catch((e) => {
              this.setState({
                loading: false,
                activeButton: ''
              })
            });
        } catch (e) {
          this.setState({
            loading: false,
            activeButton: ''
          })
        }
    };

    closeCommentDetails = () => {
      this.props.onCloseCommentDetails()
    }

    render() {
        return (
            <>
              <VkTop title='Просмотр базы данных' />
              <div className={ `table ${ this.props.classes } ${ this.state.loading ? 'loading' : '' }` }>
              <div className='table__buttons'>
                {
                  this.state.tables.map((item => {
                    return (
                      <div className={ `table__buttons-button form__button long ${ this.state.activeButton === item.title ? 'active' : '' }` } data-title={ item.title } data-url={ item.url } key={ item.id } onClick={ this.getTablesHandler } >
                        { item.title }
                      </div>
                    )
                  }))
                }
              </div>
              <div className={ `table__body table__plates ${this.props.rowDetailsShow ? 'lock' : ''}` }>
                { !this.state.loading && this.state.data.length === 0 ? <img src={ dataBackground } alt='Фон таблицы' className='table__body-bg' /> : '' }
                { this.state.loading ?
                    <Loading /> :
                    this.state.data ?
                      <>
                        { this.state.activeButton === 'Пользователи' ? <UserPlates users={ this.state.data } /> : null }
                        { this.state.activeButton === 'Группы' ? <GroupTable groups={ this.state.data } /> : null }
                        { this.state.activeButton === 'Посты' ? <PostTable posts={ this.state.data } /> : null }
                        { this.state.activeButton === 'Комментарии' ? <CommentTable comments={ this.state.data } /> : null }
                      </>
                      : 'Данные не были получены'
                }
              </div>
              { this.props.rowDetailsShow && this.state.activeButton === 'Пользователи' ? <UserDetails user={ this.props.rowDetails } /> : '' }
              { this.props.rowDetailsShow && this.state.activeButton === 'Группы' ? <GroupDetails group={ this.props.rowDetails } /> : '' }
              { this.props.rowDetailsShow && this.state.activeButton === 'Посты' ? <PostDetails post={ this.props.rowDetails } /> : '' }
              { this.props.rowDetailsShow && this.state.activeButton === 'Комментарии' ? <CommentDetails comment={ this.props.rowDetails } close={ () => this.closeCommentDetails() } /> : '' }
              </div>
            </>
        )
    }
}

function mapStateToProps(state) {
  return {
    rowDetails: state.rowDetails,
    rowDetailsShow: state.rowDetailsShow
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onCloseCommentDetails: () => { dispatch({ type: 'CLOSE_ROW_DATA' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)

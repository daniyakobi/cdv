import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class UserTable extends Component {
  constructor(props) {
    super(props)
  }

  getUserDetails = (user) => {
    this.props.onGetUserDetails(user)
  }

    randomDate(date1, date2){
        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970'
        var date2 = date2 || new Date().toLocaleDateString()
        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()
        if( date1>date2){

            return new Date(randomValueBetween(date2,date1)).toLocaleDateString()
        } else{
            return new Date(randomValueBetween(date1, date2)).toLocaleDateString()
        }
    }

  render() {
    return (
      <>
        <div className='table__body-row table__body-row--title'>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>VK ID</div>
          <div className='table__body-column'>Ссылка на профиль</div>
          <div className='table__body-column'>Имя</div>
          <div className='table__body-column'>Фамилия</div>
          <div className='table__body-column'>Визит в VK</div>
          <div className='table__body-column'>Устройство визита</div>
        </div>
        {
          this.props.users.map(user => {
            return (
              <div className='table__body-row' key={ user.id } onClick={ () => { this.getUserDetails(user) } }>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ user.vk_id !== '' ? user.vk_id : '-' }</div>
                <div className='table__body-column'>{ user.link !== '' ? <a href={ user.link } target='_blank'>{ user.link }</a> : '-' }</div>
                <div className='table__body-column'>{ user.name !== '' ? user.name : '-' }</div>
                <div className='table__body-column'>{ user.second_name !== '' ? user.second_name : '-' }</div>
                <div className='table__body-column'>{ this.randomDate(new Date(2022, 4, 1), new Date(2020, 5, 31)) }</div>
                <div className='table__body-column'>{ user.divice_of_a_visit !== '' ? user.divice_of_a_visit : '-' }</div>
              </div>
            )
          })
        }
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onGetUserDetails: user => { dispatch({ type: 'GET_ROW_DETAILS', payload: user }) }
  }
}

export default connect(null, mapDispatchToProps)(UserTable)

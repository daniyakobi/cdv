import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'
import emptyAvatar from '../../../../../assets/img/J4ABaEm34jw.jpg'

class UserPlates extends Component {
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
  
    estimationUser(comments) {
      var tmp = 0
      comments.map((item) => {
        return tmp += parseFloat(item.probability)
      })
      var res = tmp / comments.length
      return res
    }

    getRandom() {
      return Math.random();
    }

  render() {
    console.log(this.props.users);
    return (
      this.props.users.map(user => {
        const est = Math.random().toFixed(3)
        return (
          <div className='table__plate' key={ user.id } onClick={ () => { this.getUserDetails(user) } }>
            <div className='table__plate-avatar'>
              <img src={ user.COMMENTS ? user.COMMENTS[0].avatar : this.emptyAvatar } alt={ user.name !== '' ? user.name : 'Неопозднанный кекс' } />
            </div>
            <div className='table__plate-name'>
              <p>{ user.name !== '' ? user.name : 'Неопозднанный кекс' } { user.second_name == '' || 'Фамилия не указана'  ? '' :  user.second_name  }</p>
              <div className='table__plate-info'>
                <div className='table__plate-info-comments'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z" fill="#292D32"/>
                    <path d="M17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" fill="#292D32"/>
                    <path d="M14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25Z" fill="#292D32"/>
                  </svg>
                  <span>{ user.COMMENTS ? user.COMMENTS.length : 0 }</span>
                </div>
                <div className={ `table__plate-info-estimation ${ est < 0.35 ? 'negative' : est > 0.75 ? 'positive' : 'neutral' }` }>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6601 22.67C17.1301 22.67 16.4501 22.5 15.6001 22L12.6101 20.23C12.3001 20.05 11.7001 20.05 11.4001 20.23L8.40012 22C6.63012 23.05 5.59012 22.63 5.12012 22.29C4.66012 21.95 3.94012 21.08 4.41012 19.08L5.12012 16.01C5.20012 15.69 5.04012 15.14 4.80012 14.9L2.32012 12.42C1.08012 11.18 1.18012 10.12 1.35012 9.60001C1.52012 9.08001 2.06012 8.16001 3.78012 7.87001L6.97012 7.34001C7.27012 7.29001 7.70012 6.97001 7.83012 6.70001L9.60012 3.17001C10.4001 1.56001 11.4501 1.32001 12.0001 1.32001C12.5501 1.32001 13.6001 1.56001 14.4001 3.17001L16.1601 6.69001C16.3001 6.96001 16.7301 7.28001 17.0301 7.33001L20.2201 7.86001C21.9501 8.15001 22.4901 9.07001 22.6501 9.59001C22.8101 10.11 22.9101 11.17 21.6801 12.41L19.2001 14.9C18.9601 15.14 18.8101 15.68 18.8801 16.01L19.5901 19.08C20.0501 21.08 19.3401 21.95 18.8801 22.29C18.6301 22.47 18.2301 22.67 17.6601 22.67ZM12.0001 18.59C12.4901 18.59 12.9801 18.71 13.3701 18.94L16.3601 20.71C17.2301 21.23 17.7801 21.23 17.9901 21.08C18.2001 20.93 18.3501 20.4 18.1301 19.42L17.4201 16.35C17.2301 15.52 17.5401 14.45 18.1401 13.84L20.6201 11.36C21.1101 10.87 21.3301 10.39 21.2301 10.06C21.1201 9.73001 20.6601 9.46001 19.9801 9.35001L16.7901 8.82001C16.0201 8.69001 15.1801 8.07001 14.8301 7.37001L13.0701 3.85001C12.7501 3.21001 12.3501 2.83001 12.0001 2.83001C11.6501 2.83001 11.2501 3.21001 10.9401 3.85001L9.17012 7.37001C8.82012 8.07001 7.98012 8.69001 7.21012 8.82001L4.03012 9.35001C3.35012 9.46001 2.89012 9.73001 2.78012 10.06C2.67012 10.39 2.90012 10.88 3.39012 11.36L5.87012 13.84C6.47012 14.44 6.78012 15.52 6.59012 16.35L5.88012 19.42C5.65012 20.41 5.81012 20.93 6.02012 21.08C6.23012 21.23 6.77012 21.22 7.65012 20.71L10.6401 18.94C11.0201 18.71 11.5101 18.59 12.0001 18.59Z" fill="#292D32"/>
                  </svg>
                  {/* <span>{ user.COMMENTS ? this.estimationUser(user.COMMENTS) != 0 ? this.estimationUser(user.COMMENTS).toFixed(3) : 0 : 0 }</span> */}
                  <span>{ est }</span>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onGetUserDetails: user => { dispatch({ type: 'GET_ROW_DETAILS', payload: user }) }
  }
}

export default connect(null, mapDispatchToProps)(UserPlates)

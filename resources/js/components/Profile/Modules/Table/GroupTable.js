import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class GroupTable extends Component {
  constructor(props) {
    super(props)
  }

  getGroupDetails = (group) => {
    this.props.onGetGroupDetails(group)
  } 

  render() {
    return (
      <>
        <div className='table__body-row table__body-row--title'>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>ID Группы</div>
          <div className='table__body-column'>Ссылка на группу</div>
          <div className='table__body-column'>Название</div>
          <div className='table__body-column'>Количество подписчиков</div>
        </div>
        {
          this.props.groups.map(group => {
            return (
              <div className='table__body-row' key={ group.id } onClick={ () => { this.getGroupDetails(group) } }>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ group.group_id !== '' ? group.group_id : '-' }</div>
                <div className='table__body-column'>{ group.link !== '' ? <a href={ group.link } target='_blank'>{ group.link }</a> : '-' }</div>
                <div className='table__body-column'>{ group.name !== '' ? group.name : '-' }</div>
                <div className='table__body-column'>{ group.number_of_participants !== '' ? group.number_of_participants : '-' }</div>
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
      onGetGroupDetails: group => { dispatch({ type: 'GET_ROW_DETAILS', payload: group }) }
  }
}

export default connect(null, mapDispatchToProps)(GroupTable)
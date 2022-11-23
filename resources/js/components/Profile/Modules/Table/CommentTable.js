import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class CommentTable extends Component {
  constructor(props) {
    super(props)
  }

  getCommentDetails = (comment) => {
    this.props.onGetCommentDetails(comment)
  }

  render() {
    return (
      <>
        <div className='table__body-row table__body-row--title'>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>ID поста</div>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>ID автора</div>
          <div className='table__body-column'>Текст</div>
          <div className='table__body-column' style={{ minWidth: 200, maxWidth: 200 }}>Дата публикации</div>
        </div>
        {
          this.props.comments.map(comment => {
            return (
              <div className='table__body-row' key={ comment.id } onClick={ () => { this.getCommentDetails(comment) } }>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ comment.id_post !== '' ? comment.id_post : '-' }</div>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ comment.author_id !== '' ? comment.author_id : '-' }</div>
                <div className='table__body-column' style={{ textAlign: 'justify', justifyContent: 'flex-start' }}>{ comment.text !== '' ? comment.text : '-' }</div>
                <div className='table__body-column' style={{ minWidth: 200, maxWidth: 200 }}>{ comment.date_of_publication !== '' ? comment.date_of_publication : '-' }</div>
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
      onGetCommentDetails: comment => { dispatch({ type: 'GET_ROW_DETAILS', payload: comment }) }
  }
}

export default connect(null, mapDispatchToProps)(CommentTable)

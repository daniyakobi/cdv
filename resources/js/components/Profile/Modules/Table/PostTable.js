import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class PostTable extends Component {
  constructor(props) {
    super(props)
  }

  getPostDetails = (post) => {
    this.props.onGetPostDetails(post)
  }

  render() {
    console.log(this.props.posts);
    return (
      <>
        <div className='table__body-row table__body-row--title'>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>ID поста</div>
          <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>ID группы</div>
          <div className='table__body-column'>Текст</div>
          <div className='table__body-column' style={{ minWidth: 200, maxWidth: 200 }}>Дата публикации</div>
        </div>
        {
          this.props.posts.map(post => {
            return (
              <div className='table__body-row' key={ post.id } onClick={ () => { this.getPostDetails(post) } }>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ post.post_id !== '' ? post.post_id : '-' }</div>
                <div className='table__body-column' style={{ minWidth: 100, maxWidth: 100 }}>{ post.group_id !== '' ? post.group_id  : '-' }</div>
                <div className='table__body-column' style={{ textAlign: 'justify', justifyContent: 'flex-start' }}>{ post.text !== '' ? post.text : '-' }</div>
                <div className='table__body-column' style={{ minWidth: 200, maxWidth: 200 }}>{ post.date_of_publication !== '' ? post.date_of_publication : '-' }</div>
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
      onGetPostDetails: post => { dispatch({ type: 'GET_ROW_DETAILS', payload: post }) }
  }
}

export default connect(null, mapDispatchToProps)(PostTable)

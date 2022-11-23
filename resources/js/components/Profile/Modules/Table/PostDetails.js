import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from "axios";

import '../../../../../sass/components/Profile/Modules/Table/Table.scss'

class PostDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
        group: {},
        loading: false,
        height: 0
    }
  }

  closePostDetails = () => {
    this.props.onClosePostDetails()
  }

  getGroup = async () => {
      this.setState({ loading: true, group: {} })
      try {
          const data = await axios.get(`api/social_groups/${this.props.post.group_id}`)
          if (data) this.setState({ loading: false, group: data.data })
      } catch (e) {
          this.setState({ loading: false, group: {} })
          console.log(e)
      }
  }

  componentDidMount() {
      this.getGroup()
      this.setState({ height: document.querySelector('.table__details-post').offsetHeight })
  }

  render() {
    return (
      <div className='table__details'>
        <div className='table__details-block'>
          <div className='table__details-block-title'>
              {
                  !this.state.loading && this.state.group ?
                      <h2><a href={ this.state.group.link } target='_blank'>{ this.state.group.name }</a></h2> : ''
              }
            <a href={ this.props.post.link } target='_blank'>Перейти в пост</a>
          </div>
          <div className='table__details-block-info'>
            <div className="row">
                <div className="table__details-post">
                    <p>{ this.props.post.text }</p>
                    <div className="table__details-post-thumb">
                        <img src={ this.props.post.illustrations } alt="Post"/>
                    </div>
                    <div className="table__details-post-more">
                        <div className="table__details-post-more-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#292D32"/>
                            </svg>
                            { this.props.post.number_of_likes }
                        </div>
                        <div className="table__details-post-more-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.41 21.75C4.29 21.75 3.58 21.37 3.13 20.92C2.25 20.04 1.63 18.17 3.61 14.2L4.48 12.47C4.59 12.24 4.59 11.76 4.48 11.53L3.61 9.79999C1.62 5.82999 2.25 3.94999 3.13 3.07999C4 2.19999 5.88 1.56999 9.84 3.55999L18.4 7.83999C20.53 8.89999 21.7 10.38 21.7 12C21.7 13.62 20.53 15.1 18.41 16.16L9.85 20.44C7.91 21.41 6.47 21.75 5.41 21.75ZM5.41 3.74999C4.87 3.74999 4.45 3.87999 4.19 4.13999C3.46 4.85999 3.75 6.72999 4.95 9.11999L5.82 10.86C6.14 11.51 6.14 12.49 5.82 13.14L4.95 14.87C3.75 17.27 3.46 19.13 4.19 19.85C4.91 20.58 6.78 20.29 9.18 19.09L17.74 14.81C19.31 14.03 20.2 13 20.2 11.99C20.2 10.98 19.3 9.94999 17.73 9.16999L9.17 4.89999C7.65 4.13999 6.34 3.74999 5.41 3.74999Z" fill="#292D32"/>
                                <path d="M10.84 12.75H5.44C5.03 12.75 4.69 12.41 4.69 12C4.69 11.59 5.03 11.25 5.44 11.25H10.84C11.25 11.25 11.59 11.59 11.59 12C11.59 12.41 11.25 12.75 10.84 12.75Z" fill="#292D32"/>
                            </svg>
                            { this.props.post.number_of_reposts }
                        </div>
                        <div className="table__details-post-more-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="#292D32"/>
                                <path d="M16 22.3199C15.66 22.3199 15.32 22.22 15.03 22.03L10.77 19.1899H7C3.56 19.1899 1.25 16.8799 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.6199 20.77 18.84 17.75 19.15V20.5699C17.75 21.2199 17.4 21.8099 16.83 22.1099C16.57 22.2499 16.28 22.3199 16 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799H11C11.15 17.6799 11.29 17.7199 11.42 17.8099L15.87 20.77C15.98 20.84 16.08 20.81 16.13 20.78C16.18 20.75 16.26 20.6899 16.26 20.5599V18.4299C16.26 18.0199 16.6 17.6799 17.01 17.6799C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7Z" fill="#292D32"/>
                            </svg>
                            { this.props.post.number_of_comments }
                        </div>
                        <div className="table__details-post-more-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z" fill="#292D32"/>
                                <path d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z" fill="#292D32"/>
                            </svg>
                            { this.props.post.number_of_views }
                        </div>
                    </div>
                </div>
                <div className="table__details-post-info" style={{ height: this.state.height }}>
                    <p>Дата создания: { this.props.post.created_at }</p>
                    <p>Дата публикации: { this.props.post.date_of_publication }</p>
                    <p>Дата изменения: { this.props.post.updated_at }</p>
                    <div className="table__details-post-comments">
                        <h3>Комментарии</h3>
                        {
                            this.props.post.COMMENTS.length !== 0 ?
                                this.props.post.COMMENTS.map((comment) => {
                                    return (
                                        <div className='table__details-post-comment'>
                                            <div className="table__details-post-comment-author">
                                                <img src={ comment.avatar } alt={ comment.first_last_name }/>
                                                <div>
                                                    <a href={ comment.link_to_the_author } target='_blank'>{ comment.first_last_name }</a>
                                                    <p className='table__details-post-comment-date'>{ comment.date_of_publication }</p>
                                                </div>
                                            </div>
                                            <p className='table__details-post-comment-text'>{ comment.text }</p>
                                        </div>
                                    )
                                }) : <span style={{ color: '#A19B9B' }}>Комментариев нет</span>
                        }
                    </div>
                </div>
            </div>
          </div>

          <div className='table__details-close' onClick={ this.closePostDetails }>
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
      onClosePostDetails: () => { dispatch({ type: 'CLOSE_ROW_DATA' }) }
  }
}

export default connect(null, mapDispatchToProps)(PostDetails)

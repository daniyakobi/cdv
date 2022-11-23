import React from 'react'

const Comment = ({ comment, classes, view }) => {
  return (
    <div className={ classes } onClick={ view }>
      <div className='title'>
        <img src={ comment.avatar } alt={ comment.first_last_name } />
        <div>
          <a href={ comment.link_to_the_author } target='_blank' className='name'>{ comment.first_last_name }</a>
          <p className='date'>{ comment.date_of_publication }</p>
        </div>
      </div>
      <div className='text'>
        { comment.text }
      </div>
      <span className={ `tonality ${ comment.tonality === 'neutral' ? 'neutral' : comment.tonality === 'positive' ? 'positive' : comment.tonality === 'negative' ? 'negative' : '' }` }>
        {
          comment.tonality === 'neutral' ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10 18.1C14.4735 18.1 18.1 14.4735 18.1 10C18.1 5.52649 14.4735 1.9 10 1.9C5.52649 1.9 1.9 5.52649 1.9 10C1.9 14.4735 5.52649 18.1 10 18.1ZM5.95 12.7C5.70147 12.7 5.5 12.4985 5.5 12.25C5.5 12.0015 5.70147 11.8 5.95 11.8H14.05C14.2985 11.8 14.5 12.0015 14.5 12.25C14.5 12.4985 14.2985 12.7 14.05 12.7H5.95ZM7.3 9.1C6.80294 9.1 6.4 8.69706 6.4 8.2C6.4 7.70294 6.80294 7.3 7.3 7.3C7.79706 7.3 8.2 7.70294 8.2 8.2C8.2 8.69706 7.79706 9.1 7.3 9.1ZM12.7 9.1C12.2029 9.1 11.8 8.69706 11.8 8.2C11.8 7.70294 12.2029 7.3 12.7 7.3C13.1971 7.3 13.6 7.70294 13.6 8.2C13.6 8.69706 13.1971 9.1 12.7 9.1Z" fill="black"/>
          </svg>
          : 
          comment.tonality === 'positive' ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.55317 8.07086H1V18.6949H5.55317V8.07086Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.55316 18.695H16.3745C16.7428 18.6986 17.0999 18.5682 17.3791 18.328C17.6583 18.0879 17.8407 17.7544 17.8923 17.3897L18.985 9.80111C19.0156 9.58473 18.9992 9.36429 18.9367 9.15487C18.8743 8.94545 18.7673 8.75199 18.6232 8.58771C18.4791 8.42342 18.3012 8.2922 18.1017 8.203C17.9022 8.11381 17.6858 8.06875 17.4673 8.0709H11.6241V3.51772C11.6241 3.1152 11.4642 2.72916 11.1795 2.44453C10.8949 2.1599 10.5089 2 10.1063 2L5.55316 8.0709" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          : 
          comment.tonality === 'negative' ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.55318 2.00006H1V12.6241H5.55318V2.00006Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.55316 2.00007H16.3745C16.7428 1.99645 17.0999 2.12686 17.3791 2.36701C17.6583 2.60715 17.8407 2.94064 17.8923 3.30532L18.985 10.8939C19.0156 11.1103 18.9992 11.3308 18.9367 11.5402C18.8743 11.7496 18.7673 11.9431 18.6232 12.1073C18.4791 12.2716 18.3012 12.4029 18.1017 12.492C17.9022 12.5812 17.6858 12.6263 17.4673 12.6241H11.6241V17.1773C11.6241 17.5798 11.4642 17.9659 11.1795 18.2505C10.8949 18.5351 10.5089 18.695 10.1063 18.695L5.55316 12.6241" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          : ''
        }
        <span className='tonality__tooltip'>{ comment.tonality === 'neutral' ? 'Нейтральный' : comment.tonality === 'positive' ? 'Позитивный' : comment.tonality === 'negative' ? 'Негативный' : '' }</span>
      </span>
      <span className='id'>{ comment.id }</span>
    </div>
  )
}

export default Comment
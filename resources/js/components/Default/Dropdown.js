import React, {useState} from 'react'

import '../../../sass/components/Default/Dropdown.scss'

const Dropdown = (props) => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('all')

  const selectHandler = (value) => {
    setSelect(value)
    props.handler(value)
    setOpen(!open)
  }

  return (
    <div className={ `dropdown ${ props.classes } ${ open ? 'open' : '' }` }>
      <div className={ `dropdown__button ${ select === 'all' ? 'all' : select === 'positive' ? 'positive' : select === 'neutral' ? 'neutral' : select === 'negative' ? 'negative' : '' }` } onClick={ () => { setOpen(!open) } }>
        {
          select === 'all' ? 
            <svg className='dropdown__title-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z" fill="#292D32"/>
              <path d="M17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" fill="#292D32"/>
              <path d="M14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25Z" fill="#292D32"/>
            </svg> : 
          select === 'positive' ? 
            <svg className='dropdown__title-icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55317 8.07086H1V18.6949H5.55317V8.07086Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.55316 18.695H16.3745C16.7428 18.6986 17.0999 18.5682 17.3791 18.328C17.6583 18.0879 17.8407 17.7544 17.8923 17.3897L18.985 9.80111C19.0156 9.58473 18.9992 9.36429 18.9367 9.15487C18.8743 8.94545 18.7673 8.75199 18.6232 8.58771C18.4791 8.42342 18.3012 8.2922 18.1017 8.203C17.9022 8.11381 17.6858 8.06875 17.4673 8.0709H11.6241V3.51772C11.6241 3.1152 11.4642 2.72916 11.1795 2.44453C10.8949 2.1599 10.5089 2 10.1063 2L5.55316 8.0709" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> : 
          select === 'neutral' ? 
            <svg className='dropdown__title-icon' svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10 18.1C14.4735 18.1 18.1 14.4735 18.1 10C18.1 5.52649 14.4735 1.9 10 1.9C5.52649 1.9 1.9 5.52649 1.9 10C1.9 14.4735 5.52649 18.1 10 18.1ZM5.95 12.7C5.70147 12.7 5.5 12.4985 5.5 12.25C5.5 12.0015 5.70147 11.8 5.95 11.8H14.05C14.2985 11.8 14.5 12.0015 14.5 12.25C14.5 12.4985 14.2985 12.7 14.05 12.7H5.95ZM7.3 9.1C6.80294 9.1 6.4 8.69706 6.4 8.2C6.4 7.70294 6.80294 7.3 7.3 7.3C7.79706 7.3 8.2 7.70294 8.2 8.2C8.2 8.69706 7.79706 9.1 7.3 9.1ZM12.7 9.1C12.2029 9.1 11.8 8.69706 11.8 8.2C11.8 7.70294 12.2029 7.3 12.7 7.3C13.1971 7.3 13.6 7.70294 13.6 8.2C13.6 8.69706 13.1971 9.1 12.7 9.1Z" fill="black"/>
            </svg> : 
          select === 'negative' ? 
            <svg className='dropdown__title-icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55318 2.00006H1V12.6241H5.55318V2.00006Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.55316 2.00007H16.3745C16.7428 1.99645 17.0999 2.12686 17.3791 2.36701C17.6583 2.60715 17.8407 2.94064 17.8923 3.30532L18.985 10.8939C19.0156 11.1103 18.9992 11.3308 18.9367 11.5402C18.8743 11.7496 18.7673 11.9431 18.6232 12.1073C18.4791 12.2716 18.3012 12.4029 18.1017 12.492C17.9022 12.5812 17.6858 12.6263 17.4673 12.6241H11.6241V17.1773C11.6241 17.5798 11.4642 17.9659 11.1795 18.2505C10.8949 18.5351 10.5089 18.695 10.1063 18.695L5.55316 12.6241" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> : ''
        }
        <span className="dropdown__title">{ select === 'all' ? 'Все' : select === 'positive' ? 'Позитивные' : select === 'neutral' ? 'Нейтральные' : select === 'negative' ? 'Негативные' : 'Неизвестная опция' }</span>
        <svg className='dropdown__arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.92 15.8C19.73 15.8 19.54 15.73 19.39 15.58L12.87 9.06C12.39 8.58 11.61 8.58 11.13 9.06L4.61002 15.58C4.32002 15.87 3.84002 15.87 3.55002 15.58C3.26002 15.29 3.26002 14.81 3.55002 14.52L10.07 8C11.13 6.94 12.86 6.94 13.93 8L20.45 14.52C20.74 14.81 20.74 15.29 20.45 15.58C20.3 15.72 20.11 15.8 19.92 15.8Z" fill="#292D32"/>
        </svg>
      </div>
      {
        open ? 
          <div className="dropdown__list-container">
            <div className="dropdown__list-wrapper">
              <ul className="dropdown__list">
                <li className={ `dropdown__option ${ select === 'all' ? 'lock' : '' }` } onClick={ (e) => { selectHandler('all') } }>
                  <svg className='dropdown__title-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z" fill="#292D32"/>
                    <path d="M17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" fill="#292D32"/>
                    <path d="M14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25Z" fill="#292D32"/>
                  </svg>
                  <span>Все</span>
                  <div className='lock-layer'></div>
                </li>
                <li className={ `dropdown__option positive ${ select === 'positive' ? 'lock' : '' }` } onClick={ (e) => { selectHandler('positive') } }>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.55317 8.07086H1V18.6949H5.55317V8.07086Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.55316 18.695H16.3745C16.7428 18.6986 17.0999 18.5682 17.3791 18.328C17.6583 18.0879 17.8407 17.7544 17.8923 17.3897L18.985 9.80111C19.0156 9.58473 18.9992 9.36429 18.9367 9.15487C18.8743 8.94545 18.7673 8.75199 18.6232 8.58771C18.4791 8.42342 18.3012 8.2922 18.1017 8.203C17.9022 8.11381 17.6858 8.06875 17.4673 8.0709H11.6241V3.51772C11.6241 3.1152 11.4642 2.72916 11.1795 2.44453C10.8949 2.1599 10.5089 2 10.1063 2L5.55316 8.0709" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Позитивные</span>
                  <div className='lock-layer'></div>
                </li>
                <li className={ `dropdown__option neutral ${ select === 'neutral' ? 'lock' : '' }` } onClick={ (e) => { selectHandler('neutral') } }>
                  <svg svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10 18.1C14.4735 18.1 18.1 14.4735 18.1 10C18.1 5.52649 14.4735 1.9 10 1.9C5.52649 1.9 1.9 5.52649 1.9 10C1.9 14.4735 5.52649 18.1 10 18.1ZM5.95 12.7C5.70147 12.7 5.5 12.4985 5.5 12.25C5.5 12.0015 5.70147 11.8 5.95 11.8H14.05C14.2985 11.8 14.5 12.0015 14.5 12.25C14.5 12.4985 14.2985 12.7 14.05 12.7H5.95ZM7.3 9.1C6.80294 9.1 6.4 8.69706 6.4 8.2C6.4 7.70294 6.80294 7.3 7.3 7.3C7.79706 7.3 8.2 7.70294 8.2 8.2C8.2 8.69706 7.79706 9.1 7.3 9.1ZM12.7 9.1C12.2029 9.1 11.8 8.69706 11.8 8.2C11.8 7.70294 12.2029 7.3 12.7 7.3C13.1971 7.3 13.6 7.70294 13.6 8.2C13.6 8.69706 13.1971 9.1 12.7 9.1Z" fill="black"/>
                  </svg>
                  <span>Нейтральные</span>
                  <div className='lock-layer'></div>
                </li>
                <li className={ `dropdown__option negative ${ select === 'negative' ? 'lock' : '' }` } onClick={ (e) => { selectHandler('negative') } }>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.55318 2.00006H1V12.6241H5.55318V2.00006Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.55316 2.00007H16.3745C16.7428 1.99645 17.0999 2.12686 17.3791 2.36701C17.6583 2.60715 17.8407 2.94064 17.8923 3.30532L18.985 10.8939C19.0156 11.1103 18.9992 11.3308 18.9367 11.5402C18.8743 11.7496 18.7673 11.9431 18.6232 12.1073C18.4791 12.2716 18.3012 12.4029 18.1017 12.492C17.9022 12.5812 17.6858 12.6263 17.4673 12.6241H11.6241V17.1773C11.6241 17.5798 11.4642 17.9659 11.1795 18.2505C10.8949 18.5351 10.5089 18.695 10.1063 18.695L5.55316 12.6241" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Негативные</span>
                  <div className='lock-layer'></div>
                </li>
              </ul>
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default Dropdown
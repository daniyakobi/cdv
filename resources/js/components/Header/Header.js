import React from 'react'
import '../../../sass/components/Header/Header.scss'

import { Link } from 'react-router-dom'

import logo from '../../../assets/img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img src={ logo } alt="Code da-Vinchi" />
                    </Link>
                </div>
                {/*<div className='header__account'>*/}
                {/*    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#FFDEA0"/>*/}
                {/*        <path d="M15 15.5625C12.6225 15.5625 10.6875 13.6275 10.6875 11.25C10.6875 8.8725 12.6225 6.9375 15 6.9375C17.3775 6.9375 19.3125 8.8725 19.3125 11.25C19.3125 13.6275 17.3775 15.5625 15 15.5625ZM15 8.0625C13.245 8.0625 11.8125 9.495 11.8125 11.25C11.8125 13.005 13.245 14.4375 15 14.4375C16.755 14.4375 18.1875 13.005 18.1875 11.25C18.1875 9.495 16.755 8.0625 15 8.0625Z" fill="#FFDEA0"/>*/}
                {/*        <path d="M21.4426 23.0625C21.1351 23.0625 20.8801 22.8075 20.8801 22.5C20.8801 19.9125 18.2401 17.8125 15.0001 17.8125C11.7601 17.8125 9.12012 19.9125 9.12012 22.5C9.12012 22.8075 8.86512 23.0625 8.55762 23.0625C8.25012 23.0625 7.99512 22.8075 7.99512 22.5C7.99512 19.2975 11.1376 16.6875 15.0001 16.6875C18.8626 16.6875 22.0051 19.2975 22.0051 22.5C22.0051 22.8075 21.7501 23.0625 21.4426 23.0625Z" fill="#FFDEA0"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Header

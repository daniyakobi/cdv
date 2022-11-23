import React from 'react'
import { Route, Routes } from 'react-router-dom'

import '../../../sass/components/Profile/Profile.scss'

import Account from './Account/Account'
import Vk from './Modules/Vk/Vk'

const Profile = () => {
    return (
        <div className='profile'>
            <Routes>
                <Route path='/vk/*' element={ <Vk /> } />
                {/* <Route path='/telegram' element={ <Telegram /> }/>
                <Route path='/instagram' element={ <Instagram /> }/>
                <Route path='/facebook' element={ <Facebook /> }/>
                <Route path='/twitter' element={ <Twitter /> }/>
                <Route path='/youtube' element={ <Youtube /> }/>
                <Route path='/settings' element={ <Settings /> }/> */}

                <Route path="*" element={ <Account /> } />
            </Routes>
        </div>
    )
}

export default Profile

import { Route, Routes } from 'react-router-dom'
import '../../../sass/components/Main/Main.scss';

import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth'

import { connect } from "react-redux";
import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            loading: false
        }
    }

    setAuth = value => {
        this.setState({ isAuth: value })
    }

    isAuthHandler = () => {
        this.setState({ loading: true })
        const apiUrl = '/api/is_logged'
        try {
            axios.get(apiUrl).then((res) => {
                this.setState({ isAuth: true, loading: false })
                if(this.state.isAuth) localStorage.setItem('userData', JSON.stringify({ isAuth: this.state.isAuth }))
            });
        } catch (e) {
            this.setState({ isAuth: false, loading: false })
            console.log(e)
        }
    }

    isLogoutHandler = () => {
        this.setState({ loading: true })
        const apiUrl = '/api/logout'
        try {
            axios.get(apiUrl).then((res) => {
                this.setState({ isAuth: false, loading: false })
                localStorage.removeItem('userData')
            });
        } catch (e) {
            this.setState({ isAuth: true, loading: false })
            console.log(e)
        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data && data.isAuth) {
            this.isAuthHandler()
        }
    }

    render() {
        return (
            <div className={ `app-container ${ !this.state.loading && this.state.isAuth ? '' : 'auth-container' }` }>
                {
                    !this.state.loading && this.state.isAuth ?
                        <>
                            <Sidebar classes='' isLogoutHandler={ this.isLogoutHandler } />
                            <Routes>
                                <Route path='/' element={ <Profile /> }/>
                                <Route path="*" element={ <Profile /> } />
                            </Routes>
                        </>
                    :
                        <Routes>
                            <Route path='/' element={ <Auth setAuth={ this.setAuth } /> }/>
                            <Route path="*" element={ <Auth setAuth={ this.setAuth } /> } />
                        </Routes>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuthUser: user => { dispatch({ type: 'SET_AUTH_USER', payload: user }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

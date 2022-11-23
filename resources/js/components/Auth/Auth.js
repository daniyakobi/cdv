import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux'

import '../../../sass/components/Auth/Auth.scss'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            loading: false
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true })
        const apiUrl = `/api/auth?login=${ this.state.login }&password=${ this.state.password }`
        try {
            if(this.state) {
                axios.get(apiUrl).then((res) => {
                    const user = res.data;
                    this.props.onAuthUser(user)
                    this.props.setAuth(true)
                    localStorage.setItem('userData', JSON.stringify({ isAuth: true }))
                    this.setState({ loading: false })
                });
            }
        } catch (e) {
            this.setState({ loading: false })
            this.props.setAuth(false)
            localStorage.removeItem('userData')
            console.log(e);
        }
    }

    render() {
        return (
            <div className='auth'>
                <form className='auth__form form' onSubmit={ this.handleSubmit }>
                    <div className='form__block'>
                        <h2>Авторизация</h2>
                    </div>
                    <div className="form__block group">
                        <input type="text" id='login' name='login' value={ this.state.login } onChange={ (e) => { this.setState({login: e.target.value }) } } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='keyword'>Логин</label>
                    </div>
                    <div className="form__block group">
                        <input type="password" id='password' name='password' value={ this.state.password } onChange={ (e) => { this.setState({password: e.target.value }) } } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='countGroup'>Пароль</label>
                    </div>
                    <button className='form__button long'>Войти</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuthUser: user => { dispatch({ type: 'SET_AUTH_USER', payload: user }) },
    }
}

export default connect(null, mapDispatchToProps)(Auth);

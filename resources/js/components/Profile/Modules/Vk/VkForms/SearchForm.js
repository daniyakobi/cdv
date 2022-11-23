import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import '../../../../../../sass/components/Profile/Modules/Vk/Vk.scss'
import '../../../../../../sass/style/form.scss'
import VkTop from '../VkTop'
import LoadingAnalys from '../../../../Loading/LoadingAnalys'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            countGroup: '',
            countComment: '',
            countPosts: '',
            vkToken: '',
            startAnalys: 'not-running'
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ startAnalys: 'launched' })
        const apiUrl = '/api/start_analis/'
        try {
            if(this.state) {
                axios.post(apiUrl, this.state).then((res) => {
                    const data = res.data;
                    this.props.onGetGroupList(data)
                    this.setState({ startAnalys: 'completed' })
                });
            }
        } catch (e) {
            console.log(e);
            this.setState({ startAnalys: 'interrupted' })
        }
    };

    closeAnalys() {
        this.setState({ startAnalys: 'not-running' })
    }

    render() {

        if(this.state.startAnalys !== 'not-running') {
            return <LoadingAnalys close={ () => this.closeAnalys() } status={ this.state.startAnalys } /> 
        }

        return (
            <>
                <VkTop title='Анализ' />
                <form className='vk__form form' onSubmit={ this.handleSubmit }>
                    <div className="form__block group">      
                        <input type="text" id='keyword' name='keyword' value={ this.state.keyword } onChange={ (e) => this.setState({ keyword: e.target.value }) } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='keyword'>Ключевое слово</label>
                    </div>
                    <div className="form__block group">      
                        <input type="text" id='countGroup' name='count_groups' value={ this.state.countGroup } onChange={(e) => this.setState({ countGroup: e.target.value }) } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='countGroup'>Количество групп</label>
                    </div>
                    <div className="form__block group">      
                        <input type="text" id='countComment' name='count_сomments' value={ this.state.countComment } onChange={(e) => this.setState({ countComment: e.target.value }) } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='countComment'>Количество комментариев</label>
                    </div>
                    <div className="form__block group">      
                        <input type="text" id='countPosts' name='count_posts' value={ this.state.countPosts } onChange={(e) => this.setState({ countPosts: e.target.value }) } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='countPosts'>Количество постов</label>
                    </div>
                    <div className="form__block group">      
                        <input type="text" id='vkToken' name='vk_token' value={ this.state.vkToken } onChange={(e) => this.setState({ vkToken: e.target.value }) } required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor='vkToken'>ВК токен</label>
                    </div>
                    <button className='form__button long'>Анализ</button>
                </form>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetGroupList: groupList => { dispatch({ type: 'GET_GROUP_LIST', payload: groupList }) }
    }
}

export default connect(null, mapDispatchToProps)(SearchForm)
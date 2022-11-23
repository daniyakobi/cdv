import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import '../../../../../../sass/components/Profile/Modules/Vk/Vk.scss'
import '../../../../../../sass/style/form.scss'
import VkTop from '../VkTop'

class CsvForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          file: {},
          message: '',
          sendingStatus: false,
          activeButton: false,
          radioSelect: '',
          apiUrl: ''
        }
    }

    handleUsersSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = this.state.apiUrl
        const formData = new FormData();
        if (this.state.file instanceof File) {
          formData.append('uploaded_file', this.state.file)
        }
        try {
            if(formData) {
                let config = {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }
                await axios.post(apiUrl, formData, config)
                  .then((res) => {
                    this.setState({
                      message: res.data.message,
                      sendingStatus: true
                    })
                  })
                  .catch((e) => {
                    this.setState({
                      message: e,
                      sendingStatus: false
                    })
                  });
            }
        } catch (e) {
            console.log(e);
        }
    };

    uploadFile = (file) => {
      if(!['text/csv'].includes(file.type)) {
        this.setState({
          file: file,
          message: 'Разрешены только файлы формата CSV',
          sendingStatus: false,
          activeButton: false
        })
        return false
      }
      // if(file.size > 5 * 1024 * 1024) {
      //   this.setState({
      //     file: file,
      //     message: `Файл должен быть менее 5 Мб. Размер вашего файла = ${ file.size }`,
      //     sendingStatus: false,
      //     activeButton: false
      //   })
      //   return false
      // }
      return true
    }

    fileHandler = e => {
      let file = e.target.files[0]
      if (file instanceof File) {
        if(this.uploadFile(file)) {
          this.setState({
            file: file,
            message: 'Файл готов к отправке',
            sendingStatus: true,
            activeButton: true
          })
        }
      }
    }

    radioHandler = e => {
      this.setState({
        radioSelect: e.target.dataset.value,
        apiUrl: e.target.dataset.url,
        activeButton: true
      })
    }

    clearFile = e => {
      this.setState({
        file: {},
        message: '',
        sendingStatus: false,
        activeButton: false,
        loadFile: false
      })
    }

    render() {
        return (
            <>
              <VkTop title='Обновление баз данных' />
              <form className='vk__form form' onSubmit={ this.handleUsersSubmit }>
                <div className="form__block form__block--wrap group">
                 { this.props.inputs.map(input => {
                        return (
                            <div className={ `form__block-radio ${ this.state.radioSelect == input.value ? 'select' : '' }` } data-value={ input.value } data-url={ input.url } key={ input.id } onClick={ this.radioHandler } >
                              { input.icon }
                              <span>{ input.name }</span>
                            </div>
                        )
                    })
                 }
                </div>
                <div className="form__block form__block--row group">
                  <div className='form__block-input'>
                    <input className='form__block-input-file' type="file" id="userFile" name="uploaded_file" onChange={ this.fileHandler } />
                    <div className='form__block-input-button form__button'>Выберите файл</div>
                    {
                      this.state.file.name ?
                        <div className='form__block-input-clear' onClick={ this.clearFile }>
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.773 13.2877L13.2877 21.773C12.9978 22.0629 12.517 22.0629 12.227 21.773C11.9371 21.4831 11.9371 21.0022 12.227 20.7123L20.7123 12.227C21.0022 11.9371 21.4831 11.9371 21.773 12.227C22.0629 12.5169 22.0629 12.9978 21.773 13.2877Z" fill="#FFFFFF"/>
                            <path d="M21.773 21.773C21.4831 22.0629 21.0022 22.0629 20.7123 21.773L12.227 13.2877C11.9371 12.9978 11.9371 12.5169 12.227 12.227C12.517 11.9371 12.9978 11.9371 13.2877 12.227L21.773 20.7123C22.0629 21.0022 22.0629 21.4831 21.773 21.773Z" fill="#FFFFFF"/>
                          </svg>
                        </div>
                      : <></>
                    }
                    <div className='form__block-input-title'><p>{ this.state.file ? this.state.file.name : '' }</p></div>
                  </div>
                  <button className='form__button long' disabled={ this.state.activeButton && this.state.radioSelect ? false : true }>Загрузить</button>
                </div>
                <p className={ `form__message ${this.state.sendingStatus ? 'form__message--accept' : 'form__message--error'}` }>
                  { this.state.message }
                </p>
              </form>
            </>
        )
    }
}

export default connect(null, null)(CsvForm)

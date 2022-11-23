import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import '../../../../../../sass/components/Profile/Modules/Vk/Vk.scss'
import '../../../../../../sass/style/form.scss'

class CsvForms extends Component {
    constructor(props) {
        super(props)
        this.state = {
          file: {},
          message: '',
          sendingStatus: false,
          activeButton: true
        }
    }

    handleUsersSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = this.props.input.url
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
                axios.post(apiUrl, formData, config)
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
          message: 'Разрешены только файлы формата CSV',
          sendingStatus: false,
          activeButton: false
        })
        return false
      }
      // if(file.size > 5 * 1024 * 1024) {
      //   this.setState({
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

    render() {
        return (
            <form className='vk__form form' onSubmit={ this.handleUsersSubmit }>
                <div className="form__block group">
                    <h1>Загрузка { this.props.input.name }:</h1>
                </div>
                <div className="form__block form__block--row group">
                  <input type="file" id="userFile" name="uploaded_file" onChange={ this.fileHandler } />
                  <button className='form__button long' disabled={ this.state.activeButton ? false : true }>Загрузить</button>
                </div>
                <p className={ `form__message ${this.state.sendingStatus ? 'form__message--accept' : 'form__message--error'}` }>
                  { this.state.message }
                </p>
            </form>
        )
    }
}

export default connect(null, null)(CsvForms)

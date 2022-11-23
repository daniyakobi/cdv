import React from 'react'
import Loading from './Loading'

import './../../../sass/components/Loading/Loading.scss'

import launched from '../../../assets/img/launched.svg'
import completed from '../../../assets/img/completed.svg'
import interrupted from '../../../assets/img/cancel.svg'
import error from '../../../assets/img/not_found.svg'

const LoadingAnalys = ({ status, close }) => {
  return (
    <div className='start-analys lock'>
      <div className={ `start-analys__info ${ status === 'launched' ? 'launched' : status === 'completed' ? 'completed' : status === 'interrupted' ? 'interrupted' : 'error' }` }>
        <h2>{ status === 'launched' ? 'Анализ запущен' : status === 'completed' ? 'Анализ завершен' : status === 'interrupted' ? 'Анализ прерван' : 'Неизвестный статус' }</h2>
        { status === 'launched' ? 
          <div className='start-analys__launched'><Loading /></div> 
        : status === 'completed' ? 
          <div className='start-analys__completed'>
            <button className='form__button long'>Посмотреть результат</button>
          </div>
        : status === 'interrupted' ? 
          <div className='start-analys__interrupted'>
            <button className='form__button long' onClick={ close }>Закрыть</button>
          </div>
        : <div className='start-analys__error'>
            <button className='form__button long' onClick={ close }>Закрыть</button>
          </div> }
        
        <p>{ status === 'launched' ? 'Не покидайте сайт!' : status === 'completed' ? 'Анализ завершен!' : status === 'interrupted' ? 'Что-то пошло не так' : 'Неизвестная ошибка' }</p>
      </div>
      <img src={ status === 'launched' ? launched : status === 'completed' ? completed : status === 'interrupted' ? interrupted : error } className='start-analys__bg' alt={ status === 'launched' ? 'Анализ запущен' : status === 'completed' ? 'Анализ завершен' : status === 'interrupted' ? 'Анализ прерван' : 'Неизвестный статус' } />
    </div>
  )
}

export default LoadingAnalys
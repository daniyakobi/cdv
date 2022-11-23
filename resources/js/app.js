import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer';
import '../sass/index.scss';
import Main from './components/Main/Main';
import Header from "./components/Header/Header";

const store = createStore(rootReducer)

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <div className='wrapper'>
                <Header/>
                <Main />
            </div>
        </Provider>
    </BrowserRouter>
)

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux';

import rootReducer from './Redux/Reducer/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import SimpleReactLightbox from 'simple-react-lightbox'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(
                   rootReducer,
                    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                    // applyMiddleware(thunk)
                    //Su dung redux thunk middleware voi devtool
                    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

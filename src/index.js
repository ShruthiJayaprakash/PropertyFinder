import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import * as reducers from './reducers';

// import {createLogger} from 'redux-logger'
// const logger = createLogger({
// });

const reducer = combineReducers(reducers);
const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}>
  <BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

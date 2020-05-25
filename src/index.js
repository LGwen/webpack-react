
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import RootRouter from './router'
import './style/main.css';
// import './polyfills';
const store = createStore(rootReducer);
__webpack_public_path__ = './';// chunk 动态路径
ReactDOM.render(
  <RootRouter store={store}/>,
  document.getElementById('root')
);

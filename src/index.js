import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/AppComponent';
import {Provider} from 'react-redux';
import {store} from './store/configureStore'

ReactDOM.render(
  <Provider store={store}>
    {console.log(store)}
    <App/>
  </Provider>,
  document.getElementById('root')
);

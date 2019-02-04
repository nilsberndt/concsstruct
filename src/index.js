import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './containers/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import { createStore } from 'redux';
import indexReducer from './reducers/index-reducer';

const store = createStore(
  indexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  

  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));


serviceWorker.unregister();


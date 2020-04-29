import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import '@fortawesome/fontawesome-free/css/all.min.css';

const middlewares = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension({ name: 'lordApp' }) : f => f
);

const appStore = createStore(rootReducer, undefined, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

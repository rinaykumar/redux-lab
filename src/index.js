import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import{ createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

// Allows components to access store via context
import { Provider } from 'react-redux';

// Wrap everything in this to get URL info
import { BrowserRouter } from 'react-router-dom';

// Create global datastore for app
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

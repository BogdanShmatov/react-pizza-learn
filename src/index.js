import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import './scss/app.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App/>
              {/* <Route exact path='/' component={App} /> */}
              {/* <Route exact path='/head' component={Header} /> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


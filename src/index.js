import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import './scss/app.scss';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
       {/* <Route exact path='/' component={App} /> */}
       {/* <Route exact path='/head' component={Header} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


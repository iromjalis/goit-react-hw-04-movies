import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import css from './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App classname={css.App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

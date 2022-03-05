import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { ContextDataProvider } from './ContextData';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ContextDataProvider>
      <GlobalStyle/>
      <App />
    </ContextDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

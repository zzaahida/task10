import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AdProvider } from './AdContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <AdProvider>
      <App />
    </AdProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// Import React
import React from 'react';

// Import ReactDOM
import { render } from 'react-dom';

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import style from 'framework7/css/framework7.bundle.css';

// Init F7-React Plugin
Framework7.use(Framework7React);

// Import Main App component
import App from './app/Application';
import './assets/css/style.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

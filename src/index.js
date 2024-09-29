import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import messagesEs from './locales/es.json';
import messagesEn from './locales/en.json';

const messages = {
  es: messagesEs,
  en: messagesEn,
};

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

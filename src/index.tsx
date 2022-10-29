import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './service/youtube';

const youtube = new Youtube(`${process.env.REACT_APP_KEY}`);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);



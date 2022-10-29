import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './service/youtube';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_KEY },
})

const youtube = new Youtube(httpClient);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);



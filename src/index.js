import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let urlString = window.location.href;
let url = new URL(urlString);
let trackId = url.searchParams.get("fromresume");
if(trackId != null) {
  fetch('http://joelseidel.com:6969/resume/' + trackId);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

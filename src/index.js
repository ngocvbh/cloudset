import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchScreen from './search_screen/SearchScreen'

const root = ReactDOM.createRoot(document.getElementById('root'));

//Need to find a way to place the searchbutton under the search bar, might need to look up some examples

root.render(
  <React.StrictMode>
    <SearchScreen/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

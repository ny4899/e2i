import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// bootstrap icon 
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

// css 
import "./Assets/CSS/main.css"
import "./Assets/CSS/topnav.css"
import "./Assets/CSS/root.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

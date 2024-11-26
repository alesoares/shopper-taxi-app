import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Home from './components/Home';
import Viagem from './components/Viagem';
import Viagens from './components/Viagens';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Viagem />
    <Viagens />
  </React.StrictMode>
);

reportWebVitals();

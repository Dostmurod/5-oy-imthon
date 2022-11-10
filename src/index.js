import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { valueCon } from './context';
import Footer from "./components/Footer"


function Apps(){

  const [value, setValue] = React.useState('Dostmurod')
  
  return(
    <BrowserRouter>
    <valueCon.Provider  value={[value, setValue]}>
    <React.StrictMode>
      <App />
      <Footer/>
    </React.StrictMode>
    </valueCon.Provider>
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Apps/>
);


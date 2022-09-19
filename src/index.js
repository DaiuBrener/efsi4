import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Banner from './components/Banner'
import NavBar from './components/Header'
import Inscripcion from './img/inscipcion.jpeg';
import Footer from './components/Footer'
import Card from './components/Card'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Banner/>
    <Card
          title="Inscripción ciclo lectivo 2021 - Nivel Secundario"
          text="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo
          2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
          img= {Inscripcion}
    />
    <Footer footer="Agustin Rabinowicz Luciana Szwimer y Fausto Oliva © 5A 2022"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


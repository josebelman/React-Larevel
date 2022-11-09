import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


// Páginas del Sitio Web
import Home from './Componentes/home/Home';
import Acerca from './Componentes/acercade/Acerca';
 

// Configuración de la rutas del Sitio Web 
ReactDOM.render(
  <Router>
    <div>
    <Switch>

{/* Páginas */}
<Route exact path='/' component={Home} />
<Route exact path='/Acerca' component={Acerca} />



</Switch>
    </div>
  </Router>,
document.getElementById('root')
);
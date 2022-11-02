import { Router, Routes } from 'react-router-dom';
import './App.css';

import NavbarComp from './Componentes/NavBar/NavbarComp.jsx';
import Beneficios from './Componentes/Paginas/Beneficios.jsx';


function App() {
  return (
    <div className='Container'>
    <NavbarComp />
    <Beneficios></Beneficios>
    </div>
  );
}

export default App;

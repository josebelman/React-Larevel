import { Router, Routes } from 'react-router-dom';
import './App.css';

import NavbarComp from './Componentes/NavBar/NavbarComp.jsx';
import Beneficios from './Componentes/Paginas/Beneficios.jsx';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='Container-Beneficios'>
    <NavbarComp />
    <Beneficios></Beneficios>
    <Footer></Footer>
    </div>
  );
}

export default App;

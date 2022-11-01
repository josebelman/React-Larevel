import { Router, Routes } from 'react-router-dom';
import './App.css';
import CardBeneficios from './Componentes/Card/CardBeneficios';
import NavbarComp from './Componentes/NavBar/NavbarComp';
import Beneficios from './Componentes/Paginas/Beneficios';

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Router path ='/Beneficios' exact component = {Beneficios}/>
        <Router/>
      </Routes>
    </Router>
  
  );
}

export default App;

import React from 'react';
import './Barra.css'

class Menu extends React.Component {
 
    render() {
   
        return (
   
            // Acá coloco mi menú de Navegación 
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
			<img
						alt=""
						src="/images/icon/Logo.png"
						width="40"
						height="40"
						className="d-inline-block align-top"
					  />
			  <div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				  <li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">Inicio</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#/Servicios">Beneficios</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#/Nosotros">Filosfia Empresarial</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#/Contacto">Acerca De</a>
				  </li>      
				</ul>
			  </div>
			</div>
		  </nav>
            
   
        )
      
    }
   
  }
   
  export default Menu;
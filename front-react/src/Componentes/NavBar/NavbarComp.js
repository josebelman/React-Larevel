
import React from 'react';
class NavbarComp extends React.Component {
  
  render() {
   
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <img
              alt=""
              src="/images/icon/Logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Beneficios">Beneficios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Filosofia">Filosfia Empresarial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Acerca">Acerca De</a>
        </li>      
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default NavbarComp;



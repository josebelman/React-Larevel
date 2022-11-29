import React from 'react';
import './Footer.css';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><a href="#"></a></p>
            <p>&copy; {(new Date().getFullYear())} Acambaro Gto. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;
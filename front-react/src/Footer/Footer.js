import React from 'react';
import './Footer.css';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
   
 <div className="container">
 <div className="row">
   <div className="col col-lg-8">
   <footer className="container">
         <p className="float-right"><a href="#"></a></p>
         <p>&copy; {(new Date().getFullYear())} Acambaro Gto. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
     </footer>
   </div>
   <div className="col col-lg-1">
   <a href='https://www.facebook.com/gobiernoacambaro'>  <img src="/images/icon/Facebook.png" alt="Facebook"/> </a>
   </div>
   <div className="col col-sm-1">
   <a href='https://gobiernoacambaro.gob.mx/'>  <img src="/images/icon/oficial.png" alt="Pagina oficial"/> </a>
   </div>
   <div className="col col-sm-1">
   <a href='https://www.google.com/maps/place/Benito+Ju%C3%A1rez+280,+Zona+Centro,+38600+Ac%C3%A1mbaro,+Gto./@20.0353766,-100.7192538,17z/data=!3m1!4b1!4m6!3m5!1s0x842cd671bdf1fc2f:0x2b75b3c8c099fa60!8m2!3d20.0353766!4d-100.7192538!16s%2Fg%2F11c575vtlz/'>  <img src="/images/icon/mapa.png" alt="Facebook"/> </a>
   </div>
 </div>
</div>
    )
    
  }
 
}
 
export default Footer;
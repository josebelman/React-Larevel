import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require(`../imagenes/p-${props.imagen}.jpg`)}
            alt='Foto mision'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>

            </div>
        </div>
    );
}

export default Testimonio;
import React from 'react';
import estilos from './Slider.module.css';

const imagenes = [
	"./images/logo.png",
	"./images/acabaro_3.jpg",
	"./images/acueducto.jpg",
	"./images/pasaporte2.jpg",
	"./images/aves.jpg",

];
//var imagenes = new Array();

function Slider() {
	// Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className={estilos.container}>
			<button onClick={anteriorImagen}>←</button>
			{imagenes.map((imagen, index) => {
				return (
					<div
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen}>→</button>
		</div>
	);
}

export default Slider;
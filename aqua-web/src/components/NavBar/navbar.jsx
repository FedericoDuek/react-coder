import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'aqua-web/src/navbar/navbar.css'; //Importa CSS 

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget /> {/* Integra el componente CartWidget en NavBar */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
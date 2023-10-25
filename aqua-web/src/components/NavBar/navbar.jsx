//NavBar

import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import './navbar.css';

const NavBar = ({ quantity }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to="/">Mi Tienda</Link>

            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link to="/">Inicio</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/category/1">Productos</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contacto">Contacto</Link>
                    </li>

                    <li className="nav-item">
                        <CartWidget quantity={quantity} />
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default NavBar; 
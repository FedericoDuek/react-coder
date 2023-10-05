import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

export const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado para representar la cantidad de elementos en el carrito

    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> 
            <span className="badge badge-primary">{itemCount}</span> 
        </div>
    );
};
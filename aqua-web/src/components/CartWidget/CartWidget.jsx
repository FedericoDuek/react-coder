import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
export const CartWidget = () => {
    const itemCount = 5;
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> 
            <span className="badge badge-primary">{itemCount}</span> 
        </div>
    );
};
//CartWidget
import React from 'react';

const CartWidget = ({quantity}) => {
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> 
            <span className="badge badge-primary">{quantity}</span> 
        </div>
    );
};

export default CartWidget;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css'; 

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container container mt-5"> 
            <h2>{greeting}</h2>
        </div>
    );
};
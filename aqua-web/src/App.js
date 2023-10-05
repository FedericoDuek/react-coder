import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CartWidget/ItemListContainer';

function App() {
  return (
    <body className="container"> 
      <NavBar id="navbar" className="nav-link" /> 
      <ItemListContainer className="item-list-container" greeting="Bienvenido a Aqua!" /> 
    </body>
  );
}

export default App;
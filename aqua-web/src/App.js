import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {

  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <BrowserRouter>

      <NavBar cartQuantity={cartQuantity} />

      <Routes>

        <Route path="/" element={
          <ItemListContainer />
        } />

        <Route path="/category/:id" element={
          <ItemListContainer />
        } />

        <Route path="/item/:id" element={
          <ItemDetailContainer />
        } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
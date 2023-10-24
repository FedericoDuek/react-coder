import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CartWidget/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </div>
    </Router>
  );
}

export default App;
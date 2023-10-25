import React, { useEffect, useState } from 'react'; // Importa useState desde React
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Usa useState para definir el estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/jewelry'); // Corrige la URL de la API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data from Fake Store API', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect está vacío para que la llamada se haga solo una vez al cargar el componente

  return (
    <div className="item-list-container container mt-5">
      <h2>{greeting}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer; // Exporta el componente para que pueda ser utilizado en otros lugares de tu aplicación
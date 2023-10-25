import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from '../data/items'; 

const ItemDetailContainer = ({ cartQuantity, setCartQuantity }) => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const fetchedItem = await getItem(itemId);
      setItem(fetchedItem);
    }
    fetchItem();
  }, [itemId]);

  const addToCart = () => {
    // Lógica para agregar el artículo al carrito
    // Por ejemplo, puedes incrementar la cantidad en el carrito usando setCartQuantity
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <ItemDetail item={item} />
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
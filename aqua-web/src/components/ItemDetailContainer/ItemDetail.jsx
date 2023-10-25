// ItemDetail.jsx 
import React, {useState} from 'react';

const ItemDetail = ({ item }) => {

    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
    }

    return (
        <div className="item-detail">

            <img src={item.image} alt={item.name} />

            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>

                {!added &&
                    <button onClick={handleAdd}>Agregar al Carrito</button>
                }
            </div>

        </div>
    );
};

export default ItemDetail;
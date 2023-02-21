import React from "react";
import { Link } from "react-router-dom";
const Item = ({ id, imagen, titulo, categoria, cantidad }) => {
    return (
    <div className="container">
        <div className="products" key={id}>
            <div className="carts">
                <img src={imagen}/>
                <p>{titulo} </p>
                <p>Categoría: {categoria}</p>
                <p>Stock:{cantidad}</p>
                <button className="boton">
                <Link to={`/item/${id}`}>Detalles</Link>
                </button>
            </div>
           
            
            </div>
    </div>
    );
};

export default Item;

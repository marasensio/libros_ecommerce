import React from 'react'
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const categFilter = Data.filter((book) => book.categoria === categoria);
  return (
    <div>
      <h1 className='subtitulo'>Libros por Categoría </h1>
          
        
      {categoria ? <ItemList book={categFilter} /> : <ItemList book={Data} />}
    </div>
  );
};

/*const ItemListContainer = ({greeting}) => {
  return (
    <div className='saludo'>{greeting}</div>
  )
}*/

export default ItemListContainer
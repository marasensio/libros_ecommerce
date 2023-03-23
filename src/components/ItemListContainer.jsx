import React from 'react'
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, QuerySnapshot} from "firebase/firestore";

const ItemListContainer = () => {
  const [books, SetBooks] = useState ([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const bookCollection = collection(db, "libros");
    getDocs(bookCollection).then((querySnapshot) => {
      const books = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      SetBooks(books);
    });
  }, []);

  const categFilter = books.filter((book) => book.categoria === categoria);
  return (
    <div>
      <h1 className='subtitulo'>Libros por Categoría </h1>
          
        
      {categoria ? <ItemList book={categFilter} /> : <ItemList book={books} />}
    </div>
  );
};

/*const ItemListContainer = ({greeting}) => {
  return (
    <div className='saludo'>{greeting}</div>
  )
}*/

export default ItemListContainer
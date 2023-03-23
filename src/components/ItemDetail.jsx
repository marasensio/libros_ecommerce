import { useParams } from "react-router-dom";
//import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetail = ({ books }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
    const db = getFirestore();

    const libroRef = doc(db, "libros", `${id}`);

    getDoc(libroRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

    
    const bookFilter = books.filter((book) => book.id == id);
  
    return (
      <>
        {bookFilter.map((book) => (
          <div className="container_detail">
          <div className="products" key={book.id}>
            <div className="carts">
                <img src={book.img}/>
                <h3 className="card_title">{book.titulo} </h3>
                <p>Autor: {book.autor}</p>
                <p>Editorial: {book.editorial}</p>
                <p>Descripción: {book.descripcion}</p>
                <p>Categoría: {book.categoria}</p>
                <p>Stock:{book.cantidad}</p>
                
            </div>
            
            </div>
            
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
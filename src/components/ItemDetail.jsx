import { useParams } from "react-router-dom";


const ItemDetail = ({ book }) => {
    const { id } = useParams();
    
    const bookFilter = book.filter((book) => book.id == id);
  
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
            <div>
            
            </div>
            </div>
            
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
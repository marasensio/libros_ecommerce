import Item from "./Item";


const ItemList = ({ book }) => {
    return (
        
        <div>
        {book?.map((book) => (
            <Item
            key={book.id}
            id={book.id}
            imagen={book.img}
            titulo={book.titulo}
            autor={book.autor}
            editorial={book.editorial}
            description={book.descripcion}
            precio={book.precio}
            cantidad={book.cantidad}
            categoria={book.categoria}
            />
        ))}
        </div>
        
    
    );
};

export default ItemList;
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    const db = getFirestore();
    const booksCollection = collection(db, "libros");
    getDocs(booksCollection).then((querySnapshot) => {
        const books = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    setData(books);
    });
    }, []);

return <ItemDetail books={data} />;
};
    
export default ItemDetailContainer;
import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div className='contenedor'>
        <Image src='https://eaqrmnkwok8.exactdn.com/wp-content/uploads/Tocado-de-Seshat.jpg?strip=all&lossy=1&resize=453%2C523&ssl=1'
            borderRadius='40%'
            boxSize='200px'
            alt="diosa egipcia"  
            
        />
        <Link to={"/"} className='titulo'>Seshat - Libros OnLine</Link>
        
        
        
        <div className='btn'>
        <Link to={"/libros"}>
          <button>Libros</button> 
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Categoría</button>
          <div className="dropdown-content">
              <Link to={`/categoria/${"novedades"}`}>
              <a href="#"> Novedades </a>
              </Link>
              <Link to={`/categoria/${"recomendado"}`}>
              <a href="#"> Recomendados </a>
              </Link>
              <Link to={`/categoria/${"top10"}`}>
              <a href="#"> Top 10 </a>
              </Link>
              <Link to={`/categoria/${"comic"}`}>
              <a href="#"> Comics y Manga </a>
              </Link>
              <Link to={`/categoria/${"infantil"}`}>
              <a href="#"> Infantiles </a>
              </Link>
          </div>
        </div>
        
  
        
        <CartWidget/>
    </div>
  )
}

export default NavBar
import React from 'react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div className='contenedor'>
        <Image src='https://eaqrmnkwok8.exactdn.com/wp-content/uploads/Tocado-de-Seshat.jpg?strip=all&lossy=1&resize=453%2C523&ssl=1'
            borderRadius='40%'
            boxSize='200px'
            alt="diosa egipcia"  
        />
        <h1 className='titulo'>Seshat - Libros OnLine</h1>
        

        <div className="dropdown">
          <button className="dropbtn">Libros </button>
          <div className="dropdown-content">
              <a href="#"> Novedades </a>
              <a href="#"> Recomendados </a>
              <a href="#"> Los + vendidos </a>
              <a href="#"> Comics y Manga </a>
              <a href="#"> Infantiles </a>
          </div>
        </div>
        
  
        
        <CartWidget/>
    </div>
  )
}

export default NavBar
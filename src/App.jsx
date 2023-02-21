import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'


const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/libros" element={<ItemListContainer />} />
          <Route
            exact
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          />
        
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
  
  )
}

export default App

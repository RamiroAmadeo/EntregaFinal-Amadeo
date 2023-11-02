import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from './context/CartContext'
import Carrito from './components/Carrito'


function App() {

  const [carrito, setCarrito] = useState([]);

  const cantidadEnCarrito = () => {
    return(
      carrito.reduce((acc, prod) => acc + prod.contador, 0)
    )
  }

  const compraTotal = () => {
    return(
      carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
    );
  };

  return (
    <>
    <CartContext.Provider value={ {carrito, setCarrito, cantidadEnCarrito, compraTotal} }>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
              <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
              <Route path='/productos/:categoria' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
              <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </BrowserRouter>
    </CartContext.Provider>
    </>
  )
}

export default App

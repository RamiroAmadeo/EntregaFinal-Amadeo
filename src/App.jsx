import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
              <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
              <Route path='/productos/:categoria' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
              <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App

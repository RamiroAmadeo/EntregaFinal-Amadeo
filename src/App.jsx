import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Hamburguesas caseras!"/>}/>
              <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
              <Route path='/productos/:categoria' element={<ItemListContainer greeting="Hamburguesas caseras!"/>}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App

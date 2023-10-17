import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer'
import ItemList from './components/ItemList'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
          <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
          <Route path='/productos/:categoria' element={<ItemListContainer greeting="Tienda Natural Online"/>}/>
      </Routes>
    </>
  )
}

export default App

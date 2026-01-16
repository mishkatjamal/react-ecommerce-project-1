

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductsDetails/>}/>
      </Routes>

    </div>
  )
}

export default App
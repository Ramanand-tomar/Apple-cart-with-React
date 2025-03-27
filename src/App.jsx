import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import All_products from "./components/All_products"
import Product_details from "./pages/Product_details"
import ProductBuCategory from "./pages/ProductBuCategory"
import Search_products from "./pages/Search_products"
// import Trending_Slider from "./components/Trending_Slider"


const App = () => {
  return (
    <Router>
      <Navbar/>
      {/* <Trending_Slider/> */}
      <Routes>
        <Route path='/' element={<All_products></All_products>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product/:id' element={<Product_details></Product_details>}></Route>
        <Route path='/product/category/:cat' element={<ProductBuCategory></ProductBuCategory>}></Route>
        <Route path='/product/search/:term' element={<Search_products></Search_products>}></Route>
        

      </Routes>
      
    </Router>
  )
}

export default App
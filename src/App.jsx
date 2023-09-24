import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Nopage from './pages/Nopage'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Categorie from './pages/Categorie'
import Purshase from "./pages/PurshaseS"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/Purshase/*" element={<Purshase />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categorie" element={<Categorie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

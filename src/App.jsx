import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {
  const [products, setProducts]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      setProducts(response.data);
      setLoading(false);
      setError(null)
    })
    .catch((e)=>{
      setError(e.message ||"Something went wrong!");
      setLoading(false)
    })
  }, []);

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  useEffect(()=>{
    console.log("cart", cart);
  }, [cart])

  const addToCart=(product)=>{
    setCart((prevCart)=>{
      const existingItem=prevCart.find((item)=> item.id ===product.id)

      if(existingItem){
        return prevCart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }

      return [...prevCart, {...product, quantity: 1}];
    })
  }

  const totalItems= cart.reduce((total, item)=> total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} cartCount={totalItems} />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} loading={loading} error={error} onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
import  axios  from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'


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
        <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-8">
          Explore Products
        </h1>

        {loading && (
          <p className="text-center text-lg text-gray-600 dark:text-gray-400">
            Loading products...
          </p>
        )}
        
        {error && (
          <p className="text-center text-red-500 font-medium">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
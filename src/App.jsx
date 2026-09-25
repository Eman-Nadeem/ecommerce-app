import  axios  from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'


const App = () => {
  const [products, setProducts]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);
  const [darkMode, setDarkMode] = useState(false)


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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
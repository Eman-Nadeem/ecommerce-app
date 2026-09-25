import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";

const ProductDetail = ({ onAddToCart }) => {
  const { id }=useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading]=useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setProduct(res.data)
      setLoading(false);
    })
    .catch((e)=>{
      setError(e.message)
      setLoading(false)
    })
  }, [id])  

  if(loading){
    return <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-semibold">Loading Product...</p>
    </div>
  }

  if(error){
    return <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-semibold">Error: {error}</p>
    </div>
  }
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Back to Home Button */}
      <Link to="/" className="inline-block mb-6 text-indigo-600 hover:underline font-medium">
        ← Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
        {/* Large Product Image */}
        <div className="flex items-center justify-center p-6 bg-white rounded-xl">
          <img 
            src={`https://wsrv.nl/?url=${product.image}`} 
            alt={product.title} 
            className="max-h-96 object-contain"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {product.category}
            </span>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h1>
            <p className="mt-2 text-amber-500 font-medium text-sm">
              ★ {product.rating?.rate} ({product.rating?.count} reviews)
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {product.description}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
              ${product.price}
            </span>

            <button
            onClick={() => onAddToCart(product)}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 cursor-pointer shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
            Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
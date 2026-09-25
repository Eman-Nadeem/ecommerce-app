import ProductCard from '../components/ProductCard'

const Home = ({ products, loading, error, onAddToCart }) => {

   return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
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
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default Home
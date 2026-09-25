const ProductCard = ({ product, onAddToCart }) => {

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
      
      {/* 1. Image Container */}
      <div className="flex h-48 w-full items-center justify-center rounded-xl bg-white p-4">
        <img
          src={`https://wsrv.nl/?url=${product.image}`}
          alt={product.title}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. Details Container */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {product.category}
            </span>
            <span className="flex items-center gap-1 font-medium text-amber-500">
              ★ {product.rating?.rate}
            </span>
          </div>

          {/* Product Title */}
          <h3 
            className="mt-2 text-sm font-semibold text-gray-800 line-clamp-1 dark:text-gray-100" 
            title={product.title}
          >
            {product.title}
          </h3>
        </div>

        {/* 3. Bottom Row: Price & Button */}
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button onClick={()=>onAddToCart(product)} className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
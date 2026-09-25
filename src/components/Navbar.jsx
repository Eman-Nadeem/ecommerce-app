// src/components/Navbar.jsx
const Navbar = ({ darkMode, setDarkMode, cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛍️</span>
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            MiniStore
          </span>
        </div>

        <div className="flex gap-2">
          {/* Cart Icon with Dynamic Badge */}
            <button className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
  
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700 transition-all cursor-pointer"
            title="Toggle Theme"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

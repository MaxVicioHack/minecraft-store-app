import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded mr-2 flex items-center justify-center">
                <span className="text-white font-bold">MC</span>
              </div>
              <span className="text-white font-bold text-xl">MineCraft Store</span>
            </a>
          </div>
          
          {/* Navegación - Escritorio */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-green-500 transition duration-300">Inicio</a>
            <div className="relative group">
              <a href="#" className="text-white hover:text-green-500 transition duration-300 flex items-center">
                Catálogo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Mods</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Skins</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Plugins</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Ver todo</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-white hover:text-green-500 transition duration-300">Guías</a>
            <a href="#" className="text-white hover:text-green-500 transition duration-300">Soporte</a>
          </nav>
          
          {/* Botones de acción - Escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-green-500 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="text-white hover:text-green-500 transition duration-300 relative" onClick={toggleCart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300">
              Iniciar Sesión
            </button>
          </div>
          
          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-white hover:text-green-500 transition duration-300 relative" onClick={toggleCart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      <div className={`md:hidden bg-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Inicio
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Mods
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Skins
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Plugins
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Guías
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Soporte
          </a>
          <a href="#" className="block px-3 py-2 rounded-md bg-green-600 text-white font-medium">
            Iniciar Sesión
          </a>
        </div>
      </div>
      
      {/* Mini carrito */}
      <div className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 ${isCartOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <h3 className="text-white font-medium mb-2">Tu Carrito (2)</h3>
          
          <div className="space-y-2 max-h-60 overflow-y-auto mb-4">
            <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
              <div className="w-10 h-10 bg-cover bg-center rounded" style={{ backgroundImage: `url('/src/assets/product4.jpg')` }}></div>
              <div className="flex-grow">
                <h4 className="text-sm text-white">MagicCraft</h4>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">1 x $6.99</span>
                  <span className="text-xs text-white">$6.99</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
              <div className="w-10 h-10 bg-cover bg-center rounded" style={{ backgroundImage: `url('/src/assets/product2.jpg')` }}></div>
              <div className="flex-grow">
                <h4 className="text-sm text-white">Warrior Elite</h4>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">1 x $2.99</span>
                  <span className="text-xs text-white">$2.99</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-between mb-4">
            <span className="text-white">Total:</span>
            <span className="text-white font-bold">$9.98</span>
          </div>
          
          <div className="flex gap-2">
            <a href="#" className="block text-center bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded transition duration-300 flex-grow">
              Ver carrito
            </a>
            <a href="#" className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded transition duration-300 flex-grow">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

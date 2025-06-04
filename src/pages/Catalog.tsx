import { useState } from 'react';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Categorías de productos
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'mods', name: 'Mods' },
    { id: 'skins', name: 'Skins' },
    { id: 'plugins', name: 'Plugins' }
  ];
  
  // Datos de ejemplo para productos
  const products = [
    {
      id: 1,
      name: 'TechCraft',
      category: 'mods',
      price: 5.99,
      image: '/src/assets/product1.jpg',
      description: 'Añade maquinaria y tecnología avanzada a tu mundo Minecraft.',
      tags: ['tecnología', 'maquinaria', 'automatización']
    },
    {
      id: 2,
      name: 'Warrior Elite',
      category: 'skins',
      price: 2.99,
      image: '/src/assets/product2.jpg',
      description: 'Skin de guerrero medieval con armadura detallada.',
      tags: ['guerrero', 'medieval', 'armadura']
    },
    {
      id: 3,
      name: 'EconomyPlus',
      category: 'plugins',
      price: 8.99,
      image: '/src/assets/product3.jpg',
      description: 'Sistema económico completo para servidores con tiendas y monedas.',
      tags: ['economía', 'servidor', 'tiendas']
    },
    {
      id: 4,
      name: 'MagicCraft',
      category: 'mods',
      price: 6.99,
      image: '/src/assets/product4.jpg',
      description: 'Añade hechizos, varitas mágicas y nuevos elementos místicos.',
      tags: ['magia', 'hechizos', 'aventura']
    },
    {
      id: 5,
      name: 'Futuristic City',
      category: 'mods',
      price: 7.99,
      image: '/src/assets/product5.jpg',
      description: 'Transforma tu mundo con edificios y estructuras futuristas.',
      tags: ['ciudad', 'futurista', 'construcción']
    },
    {
      id: 6,
      name: 'Ninja Shadow',
      category: 'skins',
      price: 2.49,
      image: '/src/assets/product6.jpg',
      description: 'Skin de ninja con traje negro y accesorios detallados.',
      tags: ['ninja', 'sigilo', 'combate']
    },
    {
      id: 7,
      name: 'ServerGuard Pro',
      category: 'plugins',
      price: 12.99,
      image: '/src/assets/product7.jpg',
      description: 'Protección avanzada para servidores con anti-griefing y seguridad.',
      tags: ['seguridad', 'protección', 'admin']
    },
    {
      id: 8,
      name: 'Fantasy RPG',
      category: 'mods',
      price: 9.99,
      image: '/src/assets/product8.jpg',
      description: 'Convierte Minecraft en un juego RPG con clases, misiones y niveles.',
      tags: ['rpg', 'fantasía', 'aventura']
    }
  ];
  
  // Filtrar productos por categoría y término de búsqueda
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  // Mapeo de categorías a colores
  const categoryColors = {
    mods: 'bg-green-600',
    skins: 'bg-purple-600',
    plugins: 'bg-blue-600'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Catálogo de Productos</h1>
      
      {/* Barra de búsqueda */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Filtros de categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === category.id 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Resultados */}
      <div className="mb-4">
        <p className="text-gray-400">Mostrando {filteredProducts.length} resultados</p>
      </div>
      
      {/* Cuadrícula de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className={`inline-block ${categoryColors[product.category as keyof typeof categoryColors]} text-white text-xs px-2 py-1 rounded`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <span className="text-yellow-400">★★★★☆</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{product.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {product.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                <div className="flex gap-2">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-3 rounded transition duration-300">
                    Detalles
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Paginación */}
      <div className="flex justify-center mt-10">
        <nav className="flex items-center gap-1">
          <button className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600">
            &lt;
          </button>
          <button className="px-3 py-1 rounded bg-green-600 text-white">1</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600">2</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600">3</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600">
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Catalog;

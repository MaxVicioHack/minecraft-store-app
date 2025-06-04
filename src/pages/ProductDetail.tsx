import { useState } from 'react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  
  // Datos de ejemplo para un producto
  const product = {
    id: 4,
    name: 'MagicCraft',
    category: 'mods',
    price: 6.99,
    images: [
      '/src/assets/product4.jpg',
      '/src/assets/product4-detail1.jpg',
      '/src/assets/product4-detail2.jpg',
    ],
    description: 'Añade hechizos, varitas mágicas y nuevos elementos místicos a tu mundo de Minecraft. Transforma tu experiencia de juego con nuevas mecánicas basadas en magia.',
    longDescription: `
      MagicCraft es un mod completo que introduce un sistema de magia en Minecraft. Con este mod podrás:
      
      • Crear y utilizar más de 50 hechizos diferentes
      • Fabricar varitas mágicas con distintos materiales y propiedades
      • Descubrir nuevos minerales y recursos mágicos en el mundo
      • Enfrentarte a nuevos mobs con habilidades mágicas
      • Construir altares y estructuras para rituales mágicos
      • Desbloquear nuevas dimensiones místicas
      
      Este mod está diseñado para integrarse perfectamente con la experiencia vanilla de Minecraft, añadiendo contenido sin romper el balance del juego.
    `,
    version: '2.4.3',
    compatibility: 'Minecraft 1.16.5 - 1.19.2',
    author: 'MagicDev Studios',
    releaseDate: '15/03/2025',
    lastUpdate: '28/05/2025',
    rating: 4.8,
    reviewCount: 156,
    tags: ['magia', 'hechizos', 'aventura', 'dimensiones', 'mobs'],
    requirements: 'Forge 36.2.0 o superior',
    installationSteps: [
      'Instala Minecraft Forge para tu versión de Minecraft',
      'Descarga el archivo .jar del mod',
      'Coloca el archivo en la carpeta "mods" de tu directorio de Minecraft',
      'Inicia Minecraft con el perfil de Forge'
    ]
  };
  
  // Incrementar cantidad
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  // Decrementar cantidad
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  // Datos de ejemplo para productos relacionados
  const relatedProducts = [
    {
      id: 5,
      name: 'Elemental Magic',
      category: 'mods',
      price: 5.99,
      image: '/src/assets/product5.jpg',
    },
    {
      id: 8,
      name: 'Fantasy RPG',
      category: 'mods',
      price: 9.99,
      image: '/src/assets/product8.jpg',
    },
    {
      id: 12,
      name: 'Wizard Pack',
      category: 'skins',
      price: 3.49,
      image: '/src/assets/product6.jpg',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Migas de pan */}
      <div className="text-sm text-gray-400 mb-6">
        <a href="#" className="hover:text-green-500">Inicio</a> &gt; <a href="#" className="hover:text-green-500">Mods</a> &gt; <span className="text-white">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Galería de imágenes */}
        <div>
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer ${index === 0 ? 'ring-2 ring-green-500' : ''}`}>
                <img 
                  src={image} 
                  alt={`${product.name} - imagen ${index + 1}`} 
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Información del producto */}
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mr-2">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-gray-400 ml-1">({product.rating} - {product.reviewCount} reseñas)</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
          
          <p className="text-xl font-bold text-white mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-300 mb-6">{product.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-gray-400 w-32">Versión:</span>
              <span className="text-white">{product.version}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-gray-400 w-32">Compatibilidad:</span>
              <span className="text-white">{product.compatibility}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-gray-400 w-32">Autor:</span>
              <span className="text-white">{product.author}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-gray-400 w-32">Última actualización:</span>
              <span className="text-white">{product.lastUpdate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <button 
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-l-lg"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input 
                type="number" 
                className="bg-gray-800 border-0 text-center text-white w-12 h-8"
                value={quantity}
                readOnly
              />
              <button 
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-r-lg"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 flex-grow">
              Añadir al carrito
            </button>
            
            <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Pestañas de información */}
      <div className="mb-12">
        <div className="border-b border-gray-700 mb-6">
          <div className="flex flex-wrap -mb-px">
            <button className="text-green-500 border-b-2 border-green-500 py-2 px-4 font-medium">
              Descripción
            </button>
            <button className="text-gray-400 hover:text-white py-2 px-4 font-medium">
              Instalación
            </button>
            <button className="text-gray-400 hover:text-white py-2 px-4 font-medium">
              Reseñas
            </button>
            <button className="text-gray-400 hover:text-white py-2 px-4 font-medium">
              Soporte
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line">{product.longDescription}</p>
            
            <h3 className="text-xl font-bold mt-6 mb-4">Requisitos</h3>
            <p>{product.requirements}</p>
            
            <h3 className="text-xl font-bold mt-6 mb-4">Instalación</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {product.installationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      {/* Productos relacionados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

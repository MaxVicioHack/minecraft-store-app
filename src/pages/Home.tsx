

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Principal */}
      <div className="relative bg-green-900 rounded-lg overflow-hidden mb-10">
        <div className="absolute inset-0 bg-[url('/src/assets/banner-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MineCraft Store</h1>
          <p className="text-xl text-white mb-6">Los mejores mods, skins y plugins para tu experiencia Minecraft</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Ver Productos
          </button>
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-[url('/src/assets/mods-category.jpg')] bg-cover bg-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Mods</h3>
              <p className="text-gray-300 mb-4">Transforma tu juego con nuevas mecánicas, objetos y aventuras</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Explorar Mods
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-[url('/src/assets/skins-category.jpg')] bg-cover bg-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Skins</h3>
              <p className="text-gray-300 mb-4">Personaliza tu apariencia con skins únicas y de alta calidad</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Ver Skins
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-[url('/src/assets/plugins-category.jpg')] bg-cover bg-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Plugins</h3>
              <p className="text-gray-300 mb-4">Mejora tu servidor con herramientas y funcionalidades avanzadas</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Descubrir Plugins
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Producto 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-40 bg-[url('/src/assets/product1.jpg')] bg-cover bg-center"></div>
            <div className="p-4">
              <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2">Mod</span>
              <h3 className="text-lg font-semibold text-white mb-1">TechCraft</h3>
              <p className="text-gray-300 text-sm mb-3">Añade maquinaria y tecnología avanzada</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">$5.99</span>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-40 bg-[url('/src/assets/product2.jpg')] bg-cover bg-center"></div>
            <div className="p-4">
              <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-2">Skin</span>
              <h3 className="text-lg font-semibold text-white mb-1">Warrior Elite</h3>
              <p className="text-gray-300 text-sm mb-3">Skin de guerrero medieval con armadura</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">$2.99</span>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-40 bg-[url('/src/assets/product3.jpg')] bg-cover bg-center"></div>
            <div className="p-4">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">Plugin</span>
              <h3 className="text-lg font-semibold text-white mb-1">EconomyPlus</h3>
              <p className="text-gray-300 text-sm mb-3">Sistema económico completo para servidores</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">$8.99</span>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-40 bg-[url('/src/assets/product4.jpg')] bg-cover bg-center"></div>
            <div className="p-4">
              <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2">Mod</span>
              <h3 className="text-lg font-semibold text-white mb-1">MagicCraft</h3>
              <p className="text-gray-300 text-sm mb-3">Hechizos y magia para tus aventuras</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">$6.99</span>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition duration-300">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <h4 className="text-white font-bold">Alex_Miner</h4>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300">"Los mods que compré transformaron completamente mi experiencia de juego. La calidad es excelente y el soporte es rápido."</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <h4 className="text-white font-bold">CraftMaster99</h4>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300">"Las skins son increíbles, muy detalladas y únicas. Definitivamente volveré a comprar más productos aquí."</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <h4 className="text-white font-bold">ServerAdmin42</h4>
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300">"Los plugins funcionan perfectamente en mi servidor. La documentación es clara y el rendimiento es excelente. Recomendado."</p>
          </div>
        </div>
      </div>

      {/* Llamada a la acción */}
      <div className="bg-green-900 rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para mejorar tu experiencia Minecraft?</h2>
        <p className="text-white mb-6">Explora nuestra colección completa de mods, skins y plugins</p>
        <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-lg transition duration-300">
          Ver Catálogo Completo
        </button>
      </div>
    </div>
  );
};

export default Home;

import { useState } from 'react';

const Cart = () => {
  // Estado para los items del carrito
  const [cartItems, setCartItems] = useState([
    {
      id: 4,
      name: 'MagicCraft',
      category: 'mods',
      price: 6.99,
      image: '/src/assets/product4.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Warrior Elite',
      category: 'skins',
      price: 2.99,
      image: '/src/assets/product2.jpg',
      quantity: 1
    }
  ]);

  // Función para actualizar la cantidad
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para eliminar un item
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Impuestos (ejemplo: 10%)
  const taxRate = 0.10;
  const taxes = subtotal * taxRate;
  
  // Total
  const total = subtotal + taxes;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Carrito de Compras</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Productos ({cartItems.length})</h2>
              </div>
              
              {/* Items del carrito */}
              <div>
                {cartItems.map(item => (
                  <div key={item.id} className="p-4 border-b border-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-20 h-20 bg-cover bg-center rounded" style={{ backgroundImage: `url(${item.image})` }}></div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mr-2">
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                        <span>${item.price.toFixed(2)} por unidad</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <button 
                            className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-l-lg"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            className="bg-gray-800 border-0 text-center text-white w-12 h-8"
                            value={item.quantity}
                            readOnly
                          />
                          <button 
                            className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-r-lg"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          className="text-red-500 hover:text-red-400"
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 flex justify-between">
                <button className="text-green-500 hover:text-green-400">
                  ← Continuar comprando
                </button>
                
                <button className="text-red-500 hover:text-red-400">
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
          
          {/* Resumen de compra */}
          <div>
            <div className="bg-gray-800 rounded-lg overflow-hidden sticky top-4">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Resumen de compra</h2>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Impuestos (10%)</span>
                  <span className="text-white">${taxes.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between py-2 border-t border-gray-700 mt-2">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-white font-bold">${total.toFixed(2)}</span>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mt-6 transition duration-300">
                  Proceder al pago
                </button>
                
                <div className="mt-4 text-center text-sm text-gray-400">
                  <p>Aceptamos PayPal y tarjetas de crédito</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="w-8 h-6 bg-blue-600 rounded"></div>
                    <div className="w-8 h-6 bg-red-600 rounded"></div>
                    <div className="w-8 h-6 bg-yellow-600 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-white">¿Tienes un cupón?</span>
                  <button className="text-green-500 hover:text-green-400">
                    Aplicar
                  </button>
                </div>
                <input 
                  type="text" 
                  placeholder="Código de cupón" 
                  className="w-full px-3 py-2 mt-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-white mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-400 mb-8">Parece que aún no has añadido ningún producto a tu carrito</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300">
            Explorar productos
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

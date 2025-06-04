import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  // Estado simple para manejar la navegación
  const [currentPage] = useState('home');

  // Función para renderizar la página actual
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'catalog':
        return <Catalog />;
      case 'product':
        return <ProductDetail />;
      case 'cart':
        return <Cart />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

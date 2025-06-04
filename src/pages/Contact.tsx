import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contacto y Soporte</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Información de contacto */}
        <div>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Información de Contacto</h2>
            <p className="text-gray-300 mb-6">
              Estamos aquí para ayudarte con cualquier pregunta sobre nuestros productos, instalación o soporte técnico.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-600 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-300">soporte@minecraftstore.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Discord</h3>
                  <p className="text-gray-300">discord.gg/minecraftstore</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Horario de Atención</h3>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300">Fines de semana: 10:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">¿Cómo instalo un mod?</h3>
                <p className="text-gray-300">
                  Todos nuestros mods incluyen instrucciones detalladas de instalación. En general, necesitarás Minecraft Forge o Fabric instalado, y luego colocar el archivo .jar en tu carpeta de mods.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">¿Qué métodos de pago aceptan?</h3>
                <p className="text-gray-300">
                  Aceptamos PayPal, tarjetas de crédito/débito (Visa, Mastercard, American Express) y transferencias bancarias.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">¿Ofrecen reembolsos?</h3>
                <p className="text-gray-300">
                  Sí, ofrecemos reembolsos dentro de los 14 días posteriores a la compra si el producto no funciona como se describe o si tienes problemas técnicos que no podemos resolver.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">¿Son compatibles con la última versión de Minecraft?</h3>
                <p className="text-gray-300">
                  Cada producto indica claramente las versiones de Minecraft con las que es compatible. Nos esforzamos por mantener actualizados nuestros productos con las últimas versiones.
                </p>
              </div>
            </div>
            
            <button className="text-green-500 hover:text-green-400 mt-4">
              Ver todas las preguntas frecuentes →
            </button>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Envíanos un mensaje</h2>
          <p className="text-gray-300 mb-6">
            Completa el siguiente formulario y te responderemos lo antes posible.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Asunto</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="compra">Consulta de compra</option>
                  <option value="reembolso">Solicitud de reembolso</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2"
                required
              />
              <label htmlFor="privacy" className="text-gray-300 text-sm">
                He leído y acepto la <a href="#" className="text-green-500 hover:text-green-400">política de privacidad</a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

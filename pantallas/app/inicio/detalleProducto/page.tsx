'use client';

import { ArrowLeft, ShoppingCart, Share2, Heart, User, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  // Datos del producto (en una aplicación real vendrían de una API)
  const product = {
    id: 101,
    name: 'Smartphone X1 Pro',
    category: 'Electrónicos',
    description: 'El último smartphone con cámara profesional de 108MP, pantalla AMOLED de 6.7" y procesador de última generación. Ideal para fotografía profesional y gaming intensivo.',
    price: 12999,
    oldPrice: 14999,
    discount: 13,
    image: 'https://m.media-amazon.com/images/I/71s72QE+voL.jpg',
    specs: [
      { label: 'Pantalla', value: '6.7" AMOLED 120Hz' },
      { label: 'Procesador', value: 'Snapdragon 8 Gen 2' },
      { label: 'Memoria', value: '12GB RAM + 256GB' },
      { label: 'Cámara', value: 'Triple 108MP + 12MP + 8MP' },
      { label: 'Batería', value: '5000mAh con carga rápida' },
      { label: 'Sistema', value: 'Android 13' }
    ],
    addedBy: {
      name: 'María González',
      role: 'Administradora de Productos',
      avatar: '/placeholder-avatar.jpg'
    },
    addedDate: '15/03/2023',
    stock: 25,
    sku: 'PROD-SM-X1-256'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Botón de regreso */}
        <Link href="/inicio" className="inline-flex items-center text-[#174940] hover:text-[#0F332D] mb-4 transition">
          <ArrowLeft size={18} className="mr-1" />
          Volver al catálogo
        </Link>

        {/* Contenedor principal */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Información del producto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Galería de imágenes */}
            <div>
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-lg h-20 cursor-pointer hover:ring-2 hover:ring-[#63B23D] transition">
                    <img 
                      src={product.image} 
                      alt={`Vista ${item}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Detalles del producto */}
            <div>
              {/* Encabezado */}
              <div className="mb-4">
                <span className="inline-block bg-[#174940]/10 text-[#174940] text-xs px-2 py-1 rounded mb-2">
                  {product.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-[#0F332D]">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <span className="text-[#63B23D] font-bold text-xl mr-3">${product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="text-[#999999] line-through text-sm">${product.oldPrice.toLocaleString()}</span>
                  )}
                  {product.discount && (
                    <span className="ml-2 bg-[#63B23D]/20 text-[#63B23D] text-xs px-2 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Información de registro */}
              <div className="bg-[#f8f9fa] rounded-lg p-4 mb-6 border border-[#999999]/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#174940] flex items-center justify-center text-white">
                      {product.addedBy.avatar ? (
                        <img src={product.addedBy.avatar} alt={product.addedBy.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <User size={18} />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#999999]">Agregado por:</p>
                    <p className="font-medium text-[#0F332D]">{product.addedBy.name}</p>
                    <p className="text-xs text-[#999999] flex items-center gap-1">
                      <Calendar size={12} />
                      {product.addedDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#0F332D] mb-2">Descripción</h3>
                <p className="text-[#0F332D]/90">{product.description}</p>
              </div>

              {/* Especificaciones */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#0F332D] mb-3">Especificaciones</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex">
                      <span className="text-[#999999] w-24 flex-shrink-0">{spec.label}:</span>
                      <span className="text-[#0F332D] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKU y Stock */}
              <div className="flex gap-6 text-sm mb-6">
                <div>
                  <span className="text-[#999999]">SKU:</span>
                  <span className="ml-2 text-[#0F332D] font-medium">{product.sku}</span>
                </div>
                <div>
                  <span className="text-[#999999]">Disponibilidad:</span>
                  <span className="ml-2 text-[#63B23D] font-medium">
                    {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
                  </span>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex flex-wrap gap-3">
                <button className="flex-1 bg-[#63B23D] hover:bg-[#4a8a2e] text-white py-3 px-6 rounded-lg font-medium transition flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Agregar al carrito
                </button>
                <button className="p-3 border border-[#999999]/30 hover:bg-gray-50 rounded-lg transition">
                  <Heart size={18} className="text-[#0F332D]" />
                </button>
                <button className="p-3 border border-[#999999]/30 hover:bg-gray-50 rounded-lg transition">
                  <Share2 size={18} className="text-[#0F332D]" />
                </button>
              </div>
            </div>
          </div>

          {/* Sección adicional (podría ser reviews o productos relacionados) */}
          <div className="border-t border-[#999999]/20 p-6">
            <h3 className="text-xl font-semibold text-[#0F332D] mb-4">Productos relacionados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Esto sería dinámico en una app real */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border border-[#999999]/20 rounded-lg p-3 hover:shadow-md transition cursor-pointer">
                  <div className="bg-gray-100 rounded-lg h-32 mb-2"></div>
                  <h4 className="font-medium text-[#0F332D] truncate">Producto relacionado {item}</h4>
                  <p className="text-[#63B23D] font-semibold text-sm">${(10000 + item * 2000).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
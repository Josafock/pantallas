'use client';

import { ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

const categories = [
  {
    id: 1,
    name: 'Electrónicos',
    products: [
      { id: 101, name: 'Smartphone X1', price: '$12,999', image: 'https://m.media-amazon.com/images/I/71s72QE+voL.jpg', description: 'Smartphone con cámara de 108MP y pantalla AMOLED.' },
      { id: 102, name: 'Laptop Pro', price: '$24,499', image: 'https://cdn1.coppel.com/images/catalog/pm/2236633-1.jpg', description: 'Laptop con procesador Intel i7 y 16GB RAM.' },
      { id: 103, name: 'Tablet Lite', price: '$5,999', image: 'https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg', description: 'Tablet con pantalla de 10.5" y 64GB de almacenamiento.' },
      { id: 104, name: 'Smartwatch', price: '$3,299', image: 'https://fralugio.com/cdn/shop/files/M9_Pro_Max_NFC_MP3_Smartwatch.jpg?v=1740172369', description: 'Smartwatch con monitoreo de salud y GPS.' },
      { id: 105, name: 'Auriculares', price: '$1,799', image: '/placeholder-electronics.jpg' },
      { id: 106, name: 'Teclado Mecánico', price: '$2,499', image: '/placeholder-electronics.jpg' },
    ]
  },
  {
    id: 2,
    name: 'Oficina',
    products: [
      { id: 301, name: 'Silla Ergonómica', price: '$6,499', image: 'https://iseating.com.mx/cdn/shop/files/Silla_de_oficina_Ejecutiva_Caselli_C.jpg?v=1739427495', description: 'Silla ergonómica con soporte lumbar y reposabrazos ajustables.' },
      { id: 302, name: 'Escritorio Moderno', price: '$8,999', image: 'https://ofixmx.vtexassets.com/arquivos/ids/181548/ESCRITORIO-PARA-COMPUTADORA-CON-GABINETE-CENIZO.jpg?v=638417613953470000', description: 'Escritorio con diseño minimalista y espacio para cables.' },
      { id: 303, name: 'Organizador de Cable', price: '$299', image: 'https://m.media-amazon.com/images/I/71o06D9QGVL.jpg', description: 'Organizador de cables para mantener tu espacio ordenado.' },
      { id: 304, name: 'Set de Notas', price: '$499', image: 'https://mixpromocionales.com/35785/set-de-notas-amser.jpg', description: 'Set de notas adhesivas y marcadores de colores.' },
    ]
  },
  {
    id: 3,
    name: 'Hogar',
    products: [
      { id: 201, name: 'Juego de Sábanas', price: '$1,299', image: '/placeholder-home.jpg' },
      { id: 202, name: 'Lámpara Moderna', price: '$2,499', image: '/placeholder-home.jpg' },
      { id: 203, name: 'Jarrón Decorativo', price: '$899', image: '/placeholder-home.jpg' },
      { id: 204, name: 'Cortinas Blackout', price: '$3,199', image: '/placeholder-home.jpg' },
      { id: 205, name: 'Set de Cubiertos', price: '$2,999', image: '/placeholder-home.jpg' },
    ]
  }
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: ''
  });
  const [scrollPositions, setScrollPositions] = useState({});
  const scrollRefs = useRef({});

  const scrollLeft = (categoryId) => {
    if (scrollRefs.current[categoryId]) {
      scrollRefs.current[categoryId].scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (categoryId) => {
    if (scrollRefs.current[categoryId]) {
      scrollRefs.current[categoryId].scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6">
      <div className="max-w-5xl mx-auto">
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4'>
          <h1 className="text-3xl font-bold text-[#0F332D]">Catálogo de Productos</h1>

          <div className="flex gap-3 w-full md:w-auto">
            {/* Barra de búsqueda */}
            <div className="relative flex-1 md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-[#999999]" />
              </div>
              <input
                type="text"
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-2 w-full border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Botón de filtros */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 border border-[#999999]/30 hover:bg-gray-50 rounded-lg transition flex items-center justify-center"
            >
              <span className="text-[#174940]">Filtrar</span>
              <Filter size={18} className="text-[#0F332D] ml-1" />
            </button>
          </div>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#174940]">{category.name}</h2>
              <button className="text-[#63B23D] hover:text-[#4a8a2e] flex items-center gap-1 transition">
                Ver todos <ChevronRight size={18} />
              </button>
            </div>

            <div className="relative">
              {/* Botón izquierdo */}
              <button
                onClick={() => scrollLeft(category.id)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#174940] p-2 rounded-full shadow-md transition -ml-4"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Contenedor de productos */}
              <div
                ref={(el) => scrollRefs.current[category.id] = el}
                className="flex overflow-x-auto gap-6 py-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none' }}
              >
                {category.products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-center h-64 w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-[#0F332D] truncate">{product.name}</h3>
                      <h4 className='text-sm text-gray-400' >{product.description}</h4>
                      <p className="text-[#63B23D] font-semibold mt-1">{product.price}</p>
                      <div className='flex justify-between items-center mt-3'>
                        <Link href='/inicio/detalleProducto' className="mt-3 w-24 py-2 bg-[#174940] hover:bg-[#0F332D] text-white rounded-lg text-sm transition text-center">
                          Ver detalles
                        </Link>
                        <button className="mt-3 w-20 py-2 bg-[#174940] hover:bg-[#0F332D] text-white rounded-lg text-sm transition text-center">
                          Cotizar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón derecho */}
              <button
                onClick={() => scrollRight(category.id)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#174940] p-2 rounded-full shadow-md transition -mr-4"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
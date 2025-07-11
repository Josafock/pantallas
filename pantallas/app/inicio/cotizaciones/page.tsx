'use client';

import { ShoppingCart, Download } from 'lucide-react';
import { useState } from 'react';

export default function CotizacionesPage() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Producto Ejemplo 1',
      precio: 100,
      cantidad: 2,
    },
    {
      id: 2,
      nombre: 'Producto Ejemplo 2',
      precio: 150,
      cantidad: 1,
    },
  ]);

  const [porcentajes, setPorcentajes] = useState({
    porcentaje1: 10,
    porcentaje2: 15,
    porcentaje3: 20,
  });

  const calcularPrecioFinal = (precio, cantidad, porcentaje) => {
    const subtotal = precio * cantidad;
    return subtotal + (subtotal * (porcentaje / 100));
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  return (
    <div className="flex-1 p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#174940] flex items-center gap-3">
            <ShoppingCart size={28} className="text-[#63B23D]" />
            Cotizaciones
          </h1>
          <p className="text-gray-600">Administra y genera tus cotizaciones</p>
        </header>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#0F332D]">Porcentajes de Ganancia</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Porcentaje 1</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D]"
                  value={porcentajes.porcentaje1}
                  onChange={(e) => setPorcentajes({...porcentajes, porcentaje1: parseFloat(e.target.value) || 0})}
                  min="0"
                  step="0.1"
                />
                <span className="ml-2 text-gray-500">%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Porcentaje 2</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D]"
                  value={porcentajes.porcentaje2}
                  onChange={(e) => setPorcentajes({...porcentajes, porcentaje2: parseFloat(e.target.value) || 0})}
                  min="0"
                  step="0.1"
                />
                <span className="ml-2 text-gray-500">%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Porcentaje 3</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D]"
                  value={porcentajes.porcentaje3}
                  onChange={(e) => setPorcentajes({...porcentajes, porcentaje3: parseFloat(e.target.value) || 0})}
                  min="0"
                  step="0.1"
                />
                <span className="ml-2 text-gray-500">%</span>
              </div>
            </div>
          </div>
        </div>

        {productos.length > 0 ? (
          <>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#174940] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left w-12">#</th>
                      <th className="py-3 px-4 text-left">Producto</th>
                      <th className="py-3 px-4 text-right">Precio Unit.</th>
                      <th className="py-3 px-4 text-right">Cantidad</th>
                      <th className="py-3 px-4 text-right">Subtotal</th>
                      <th className="py-3 px-4 text-right">Precio +{porcentajes.porcentaje1}%</th>
                      <th className="py-3 px-4 text-right">Precio +{porcentajes.porcentaje2}%</th>
                      <th className="py-3 px-4 text-right">Precio +{porcentajes.porcentaje3}%</th>
                      <th className="py-3 px-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {productos.map((producto, index) => (
                      <tr key={producto.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">{index + 1}</td>
                        <td className="py-3 px-4 font-medium">{producto.nombre}</td>
                        <td className="py-3 px-4 text-right">${producto.precio.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right">{producto.cantidad}</td>
                        <td className="py-3 px-4 text-right font-medium">
                          ${(producto.precio * producto.cantidad).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-[#63B23D]">
                          ${calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje1).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-[#63B23D]">
                          ${calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje2).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-[#63B23D]">
                          ${calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje3).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => eliminarProducto(producto.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 font-bold">
                    <tr>
                      <td colSpan="4" className="py-3 px-4 text-right">Total:</td>
                      <td className="py-3 px-4 text-right">${calcularTotal().toFixed(2)}</td>
                      <td className="py-3 px-4 text-right text-[#63B23D]">
                        ${productos.reduce((total, producto) => 
                          total + calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje1), 0).toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right text-[#63B23D]">
                        ${productos.reduce((total, producto) => 
                          total + calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje2), 0).toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right text-[#63B23D]">
                        ${productos.reduce((total, producto) => 
                          total + calcularPrecioFinal(producto.precio, producto.cantidad, porcentajes.porcentaje3), 0).toFixed(2)}
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#63B23D] hover:bg-[#4D9A2E] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Generar todos los PDF
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-gray-400 mb-4">
              <ShoppingCart size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No hay productos en la cotización</h3>
            <p className="text-gray-500">Los productos agregados aparecerán aquí</p>
          </div>
        )}
      </div>
    </div>
  );
}
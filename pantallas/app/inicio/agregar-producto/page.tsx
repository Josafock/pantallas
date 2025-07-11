'use client';

import { Upload, PlusCircle, DollarSign, Link as LinkIcon, Type, Tag, AlignLeft } from 'lucide-react';
import { useState } from 'react';

export default function AddProductPage() {
  const [product, setProduct] = useState({
    nombre: '',
    categoria: '',
    imagen: null,
    descripcion: '',
    linkCompra: '',
    precio: '',
    sku: '',
    stock: ''
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct(prev => ({ ...prev, imagen: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto a guardar:', product);
    // Aquí iría la lógica para guardar el producto
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#174940] p-6 text-white">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <PlusCircle size={28} className="text-[#63B23D]" />
              Agregar Nuevo Producto
            </h1>
            <p className="text-[#999999] mt-1">Complete todos los campos para registrar un nuevo producto</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <Type size={16} /> Nombre del Producto
              </label>
              <input
                type="text"
                name="nombre"
                value={product.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                placeholder="Ej: Smartphone XYZ 2023"
                required
              />
            </div>

            {/* Categoría y SKU */}
            <div>
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <Tag size={16} /> Categoría
              </label>
              <select
                name="categoria"
                value={product.categoria}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                required
              >
                <option value="">Seleccione una categoría</option>
                <option value="electronica">Electrónica</option>
                <option value="hogar">Hogar</option>
                <option value="ropa">Ropa</option>
                <option value="alimentos">Alimentos</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            {/* Imagen */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <Upload size={16} /> Imagen del Producto
              </label>
              <div className="flex items-center gap-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#999999]/30 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload size={24} className="text-[#999999]" />
                    <p className="mb-2 text-sm text-[#999999]">
                      <span className="font-semibold">Click para subir</span> o arrastra la imagen
                    </p>
                    <p className="text-xs text-[#999999]">PNG, JPG (MAX. 5MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
                {previewImage && (
                  <div className="w-32 h-32 rounded-lg overflow-hidden border border-[#999999]/30">
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <AlignLeft size={16} /> Descripción
              </label>
              <textarea
                name="descripcion"
                value={product.descripcion}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                placeholder="Describa las características principales del producto..."
                required
              />
            </div>

            {/* Precio y Stock */}
            <div>
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <DollarSign size={16} /> Precio
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#999999]">$</span>
                <input
                  type="number"
                  name="precio"
                  value={product.precio}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-2 border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Link de compra */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F332D] mb-1 flex items-center gap-2">
                <LinkIcon size={16} /> Link de Compra
              </label>
              <input
                type="url"
                name="linkCompra"
                value={product.linkCompra}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#999999]/30 rounded-lg focus:ring-2 focus:ring-[#63B23D] focus:border-[#63B23D] transition"
                placeholder="https://www.tienda.com/producto"
              />
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-[#999999]/20">
              <button
                type="submit"
                className="px-6 py-2 bg-[#63B23D] text-white rounded-lg hover:bg-[#4a8a2e] transition flex items-center gap-2"
              >
                <PlusCircle size={18} />
                Guardar Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
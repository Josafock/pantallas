'use client';

import { HardDrive, Database, Layers, Activity, Zap, ZapOff, Plus, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';

const storages = [
  {
    tipo: 'ZFS',
    estado: 'Activo',
    total: 1000,
    disponible: 400,
    iops: 15000,
    latencia: '2.5ms'
  },
  {
    tipo: 'NFS',
    estado: 'Inactivo',
    total: 500,
    disponible: 0,
    iops: 8000,
    latencia: '4.1ms'
  },
  {
    tipo: 'Ceph',
    estado: 'Activo',
    total: 2000,
    disponible: 1800,
    iops: 25000,
    latencia: '1.8ms'
  },
  {
    tipo: 'NFS',
    estado: 'Activo',
    total: 2000,
    disponible: 1800,
    iops: 2500,
    latencia: '1.8ms'
  },
];

const storageIcons = {
  'ZFS': <HardDrive className="text-orange-500" size={20} />,
  'NFS': <Database className="text-blue-500" size={20} />,
  'Ceph': <Layers className="text-purple-500" size={20} />
};

export default function AlmacenamientoPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Header */}
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-white shadow-sm"
            >
              <Filter size={20} className="text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <HardDrive className="text-orange-500" size={24} />
              <span>Almacenamiento</span>
            </h1>
            <button className="p-2 rounded-lg bg-orange-500 text-white">
              <Plus size={20} />
            </button>
          </div>
        )}

        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex justify-between items-center mb-6 md:mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <HardDrive className="text-orange-500" size={28} />
                Gestión de Almacenamiento Compartido
              </h1>
              <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
                Monitoreo y administración de sistemas de almacenamiento
              </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition shadow-sm flex items-center gap-2">
              <Zap size={16} />
              <span>Nuevo Volumen</span>
            </button>
          </div>
        )}

        {/* Mobile Filters */}
        {isMobile && showFilters && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-medium text-gray-800">Filtrar por:</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm">
                <option>Tipo: Todos</option>
                <option>ZFS</option>
                <option>NFS</option>
                <option>Ceph</option>
              </select>
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm">
                <option>Estado: Todos</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
            <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg text-sm">
              Aplicar Filtros
            </button>
          </div>
        )}

        {/* Storage Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {storages.map((storage) => {
            const usado = storage.total - storage.disponible;
            const porcentaje = (usado / storage.total) * 100;
            const estadoActivo = storage.estado === 'Activo';

            const colorMap = {
              'ZFS': 'bg-orange-500',
              'NFS': 'bg-blue-500',
              'Ceph': 'bg-purple-500'
            };

            return (
              <div
                key={`${storage.tipo}-${storage.iops}`}
                className="border border-gray-200 rounded-xl bg-white p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1 md:p-2 bg-gray-100 rounded-lg">
                      {storageIcons[storage.tipo as keyof typeof storageIcons]}
                    </div>
                    <div>
                      <h2 className="text-base md:text-lg font-semibold text-gray-900">{storage.tipo}</h2>
                      <p className="text-xs text-gray-500">
                        {storage.tipo === 'Ceph' ? 'Distribuido' : storage.tipo === 'ZFS' ? 'Avanzado' : 'En red'}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium flex items-center gap-1 ${
                      estadoActivo
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {estadoActivo ? <Zap size={12} /> : <ZapOff size={12} />}
                    {storage.estado}
                  </span>
                </div>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-1">
                      <span>Espacio usado</span>
                      <span>{porcentaje.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${colorMap[storage.tipo as keyof typeof colorMap]}`}
                        style={{ width: `${porcentaje}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{usado} GB usado</span>
                      <span>{storage.disponible} GB libre</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-gray-500 flex items-center gap-1 mb-1">
                        <Activity size={12} className="md:mr-1" />
                        <span>IOPS</span>
                      </div>
                      <div className="font-medium">{storage.iops.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-gray-500 flex items-center gap-1 mb-1">
                        <Activity size={12} className="md:mr-1" />
                        <span>Latencia</span>
                      </div>
                      <div className="font-medium">{storage.latencia}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 md:pt-4 border-t border-gray-100">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs md:text-sm font-medium py-1 md:py-2 px-2 md:px-3 rounded-lg transition">
                    Detalles
                  </button>
                  <button 
                    className={`flex-1 text-xs md:text-sm font-medium py-1 md:py-2 px-2 md:px-3 rounded-lg transition ${
                      estadoActivo 
                        ? 'bg-red-100 hover:bg-red-200 text-red-800' 
                        : 'bg-green-100 hover:bg-green-200 text-green-800'
                    }`}
                  >
                    {estadoActivo ? 'Desactivar' : 'Activar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Floating Action Button */}
        {isMobile && (
          <button className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg z-10">
            <Plus size={24} />
          </button>
        )}
      </div>
    </main>
  );
}
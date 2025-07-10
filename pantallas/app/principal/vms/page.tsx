'use client';

import { Power, PowerOff, Camera, MoveRight, Server, HardDrive, Cpu, MemoryStick, Plus, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const vms = [
  {
    id: 1,
    nombre: 'vm-ubuntu-01',
    so: 'Ubuntu 22.04',
    estado: 'Encendida',
    cpu: '2 vCPU',
    ram: '4 GB',
    disco: '60 GB',
    ip: '192.168.1.101'
  },
  {
    id: 2,
    nombre: 'vm-windows-02',
    so: 'Windows Server 2019',
    estado: 'Apagada',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '120 GB',
    ip: '192.168.1.102'
  },
  {
    id: 3,
    nombre: 'vm-windows-03',
    so: 'Windows Server 2019',
    estado: 'Apagada',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '90 GB',
    ip: '192.168.1.103'
  },
  {
    id: 4,
    nombre: 'vm-windows-04',
    so: 'Windows Server 2022',
    estado: 'Encendida',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '110 GB',
    ip: '192.168.1.104'
  },
];

export default function VMListPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-6 lg:px-10 py-4 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Header */}
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg bg-white shadow-sm"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              Máquinas Virtuales
            </h1>
            <div className="w-10"></div> {/* Spacer for balance */}
          </div>
        )}

        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex justify-between items-center mb-6 md:mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Administración de Máquinas Virtuales
              </h1>
              <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
                Gestiona tus recursos virtualizados
              </p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition shadow-sm flex items-center gap-1">
              <Plus size={16} />
              <span className="hidden sm:inline">Crear nueva VM</span>
              <span className="sm:hidden">Nueva</span>
            </button>
          </div>
        )}

        {/* Mobile Filter/Options Menu */}
        {isMobile && showMobileMenu && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-medium text-gray-800">Filtros</h2>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm">
                <option>Estado: Todos</option>
                <option>Encendidas</option>
                <option>Apagadas</option>
              </select>
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm">
                <option>SO: Todos</option>
                <option>Windows</option>
                <option>Ubuntu</option>
              </select>
            </div>
            <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg text-sm">
              Aplicar Filtros
            </button>
          </div>
        )}

        {/* VM Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {vms.map((vm) => (
            <div
              key={vm.id}
              className="rounded-xl bg-white border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className={`p-1 md:p-2 rounded-lg ${vm.estado === 'Encendida' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    <Server size={18} />
                  </div>
                  <div>
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">
                      {vm.nombre}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">{vm.so}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{vm.ip}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium ${
                    vm.estado === 'Encendida'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {vm.estado}
                </span>
              </div>

              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                  <Cpu size={14} className="text-indigo-500" />
                  <span><span className="font-medium">CPU:</span> {vm.cpu}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                  <MemoryStick size={14} className="text-indigo-500" />
                  <span><span className="font-medium">RAM:</span> {vm.ram}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                  <HardDrive size={14} className="text-indigo-500" />
                  <span><span className="font-medium">Disco:</span> {vm.disco}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2 pt-2 border-t border-gray-100">
                <button
                  className={`flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    vm.estado === 'Encendida'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  } shadow-sm flex-1 md:flex-none`}
                >
                  {vm.estado === 'Encendida' ? (
                    <>
                      <PowerOff size={14} className="md:mr-1" />
                      <span className="hidden sm:inline">Apagar</span>
                    </>
                  ) : (
                    <>
                      <Power size={14} className="md:mr-1" />
                      <span className="hidden sm:inline">Iniciar</span>
                    </>
                  )}
                  <span className="sm:hidden">{vm.estado === 'Encendida' ? 'Off' : 'On'}</span>
                </button>

                <button className="flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-xs md:text-sm font-medium transition shadow-sm text-gray-700 flex-1 md:flex-none">
                  <Camera size={14} className="text-blue-500 md:mr-1" />
                  <span className="hidden sm:inline">Snapshot</span>
                  <span className="sm:hidden">Snap</span>
                </button>

                <button className="flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs md:text-sm font-medium transition shadow-sm flex-1 md:flex-none">
                  <MoveRight size={14} className="md:mr-1" />
                  <span className="hidden sm:inline">Migrar</span>
                  <span className="sm:hidden">Move</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Floating Action Button */}
        {isMobile && (
          <button className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-10">
            <Plus size={24} />
          </button>
        )}
      </div>
    </main>
  );
}
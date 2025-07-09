// app/vms/page.tsx

'use client';

import { Power, PowerOff, Camera, MoveRight } from 'lucide-react';

const vms = [
  {
    id: 1,
    nombre: 'vm-ubuntu-01',
    so: 'Ubuntu 22.04',
    estado: 'Encendida',
    cpu: '2 vCPU',
    ram: '4 GB',
    disco: '60 GB',
  },
  {
    id: 2,
    nombre: 'vm-windows-02',
    so: 'Windows Server 2019',
    estado: 'Apagada',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '120 GB',
  },
  {
    id: 3,
    nombre: 'vm-windows-03',
    so: 'Windows Server 2019',
    estado: 'Apagada',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '90 GB',
  },
  {
    id: 4,
    nombre: 'vm-windows-04',
    so: 'Windows Server 2021',
    estado: 'Apagada',
    cpu: '4 vCPU',
    ram: '8 GB',
    disco: '110 GB',
  },
];

export default function VMListPage() {
  return (
    <main className="min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 tracking-tight">
          Administración de Máquinas Virtuales
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {vms.map((vm) => (
            <div
              key={vm.id}
              className="rounded-2xl border border-[#cccccc33] p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {vm.nombre}
                  </h2>
                  <p className="text-sm   ">{vm.so}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    vm.estado === 'Encendida'
                      ? 'bg-[#4caf50]/20 text-[#4caf50]'
                      : 'bg-[#e53935]/20 text-[#e53935]'
                  }`}
                >
                  {vm.estado}
                </span>
              </div>

              <div className="text-sm  space-y-1 mb-5">
                <p>
                  <span className="font-medium">CPU:</span> {vm.cpu}
                </p>
                <p>
                  <span className="font-medium">RAM:</span> {vm.ram}
                </p>
                <p>
                  <span className="font-medium">Disco:</span>{' '}
                  {vm.disco}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    vm.estado === 'Encendida'
                      ? 'bg-[#e53935] hover:bg-[#c62828]'
                      : 'bg-[#4caf50] hover:bg-[#388e3c]'
                  }`}
                >
                  {vm.estado === 'Encendida' ? (
                    <>
                      <PowerOff size={16} /> Apagar
                    </>
                  ) : (
                    <>
                      <Power size={16} /> Iniciar
                    </>
                  )}
                </button>

                <button className="flex items-center gap-1 px-4 py-2 bg-[#cccccc]/10 hover:bg-[#cccccc]/20 border border-[#cccccc55] rounded-lg text-sm font-medium transition">
                  <Camera size={16} /> Snapshot
                </button>

                <button className="flex items-center gap-1 px-4 py-2 bg-[#f89406] hover:bg-[#e67e00] text-white rounded-lg text-sm font-medium transition">
                  <MoveRight size={16} /> Migrar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

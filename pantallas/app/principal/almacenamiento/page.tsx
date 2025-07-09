'use client';

const storages = [
  {
    tipo: 'ZFS',
    estado: 'Activo',
    total: 1000,
    disponible: 400,
  },
  {
    tipo: 'NFS',
    estado: 'Inactivo',
    total: 500,
    disponible: 0,
  },
  {
    tipo: 'Ceph',
    estado: 'Activo',
    total: 2000,
    disponible: 1800,
  },
];

// Paletas derivadas del naranja para barras y textos:
const barraColores = [
  '#f89406', // naranja original
  '#ffb300', // amarillo ámbar
  '#ff7043', // rojo anaranjado suave
];

const tituloColor = '#ef6c00'; // naranja oscuro, para no usar siempre el naranja vivo

export default function AlmacenamientoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-8" style={{ color: tituloColor }}>
        Gestión de Almacenamiento Compartido
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {storages.map((storage, index) => {
          const usado = storage.total - storage.disponible;
          const porcentaje = (usado / storage.total) * 100;
          const estadoActivo = storage.estado === 'Activo';

          // Selecciona color para barra basado en índice (rotar)
          const colorBarra = barraColores[index % barraColores.length];

          // Color para estado activo/inactivo, usando verdes y rojos suaves
          const estadoColor = estadoActivo
            ? 'bg-green-200 text-green-700'
            : 'bg-red-200 text-red-700';

          return (
            <div
              key={storage.tipo}
              className="border border-gray-200 rounded-2xl shadow-sm p-5 bg-white hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{storage.tipo}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${estadoColor}`}
                >
                  {storage.estado}
                </span>
              </div>

              <div className="mb-4 space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Total:</strong> {storage.total} GB
                </p>
                <p>
                  <strong>Disponible:</strong> {storage.disponible} GB
                </p>
                <p>
                  <strong>Usado:</strong> {usado} GB
                </p>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${porcentaje}%`, backgroundColor: colorBarra }}
                ></div>
              </div>
              <p className="text-xs mt-1 text-right text-gray-500">
                {porcentaje.toFixed(0)}% en uso
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

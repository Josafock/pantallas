'use client';

import {
  Cpu,
  Server,
  Database,
  Box,
  List,
  CheckCircle,
  XCircle,
  ShieldAlert,
  RefreshCcw,
} from "lucide-react";

export default function DashboardPage() {
  const cpuUsage = 65;
  const memoryUsed = 3.2;
  const memoryTotal = 8;
  const storageUsed = 500;
  const storageTotal = 1024;
  const activeVMs = 12;
  const backups = 5;
  const alerts = 3;

  const nodes = [
    { name: "node-01", status: "online" },
    { name: "node-02", status: "online" },
    { name: "node-03", status: "offline" },
    { name: "node-04", status: "online" },
    { name: "node-05", status: "online" },
  ];

  const events = [
    { time: "10:15", desc: 'VM "web-01" migrada a node-02' },
    { time: "09:50", desc: 'Snapshot de "db-01" completado' },
    { time: "08:30", desc: "node-03 desconectado" },
  ];

  return (
    <section className="space-y-6 bg-white text-black p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Dashboard Proxmox</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <Cpu className="w-8 h-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">CPU Usage</p>
            <p className="text-xl font-semibold">{cpuUsage}%</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <Server className="w-8 h-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Memory</p>
            <p className="text-xl font-semibold">
              {memoryUsed} GB / {memoryTotal} GB
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <Database className="w-8 h-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Storage</p>
            <p className="text-xl font-semibold">
              {storageUsed} GB / {storageTotal} GB
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center">
          <Box className="w-8 h-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Active VMs</p>
            <p className="text-xl font-semibold">{activeVMs}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Estado de Nodos</h2>
          <ul className="space-y-2">
            {nodes.map((node) => (
              <li key={node.name} className="flex items-center gap-3">
                {node.status === "online" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <span className="font-medium">{node.name}</span>
                  <span className="block text-xs text-gray-500">
                    {node.status === "online" ? "Online" : "Offline"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex items-center">
          <RefreshCcw className="w-8 h-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Backups realizados</p>
            <p className="text-xl font-semibold">{backups}</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex items-center">
          <ShieldAlert className="w-8 h-8 text-red-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Alertas recientes</p>
            <p className="text-xl font-semibold">{alerts}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-medium mb-4">Eventos Recientes</h2>
          <ul className="space-y-3">
            {events.map((evt, i) => (
              <li key={i} className="flex items-start gap-3">
                <List className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-sm">{evt.desc}</p>
                  <p className="text-xs text-gray-400">{evt.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium mb-4">Gráfico de Rendimiento</h2>
          <img
            src="https://quickchart.io/chart?c={type:'line',data:{labels:['Ene','Feb','Mar','Abr','May'],datasets:[{label:'CPU %',data:[65,59,80,81,56]}]}}"
            alt="Gráfico de rendimiento"
            className="rounded w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
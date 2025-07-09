'use client';

import {
  LayoutDashboard,
  Server,
  HardDrive,
  RefreshCw,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    label: 'Panel principal',
    icon: <LayoutDashboard size={20} />,
    href: '/principal/dashboard',
  },
  {
    label: 'Máquinas Virtuales',
    icon: <Server size={20} />,
    href: '/principal/vms',
  },
  {
    label: 'Almacenamiento',
    icon: <HardDrive size={20} />,
    href: '/principal/almacenamiento',
  },
  {
    label: 'Migración de VMs',
    icon: <RefreshCw size={20} />,
    href: '/principal/migracion',
  },
  {
    label: 'Respaldo y Snapshots',
    icon: <ShieldCheck size={20} />,
    href: '/principal/respaldo',
  },
  {
    label: 'Capacitación y Ayuda',
    icon: <Users size={20} />,
    href: '/principal/ayuda',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 h-screen fixed md:relative border-r border-gray-300 bg-[#E82E00] shadow-md">
      <div className="p-6 text-center text-2xl font-bold text-white">
        Proxmox UI
      </div>

      <nav className="px-4 mt-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-[#f89406] text-white hover:bg-[#e87e00]'
                  : 'text-[#f3e9dc] hover:bg-[#955c20]'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

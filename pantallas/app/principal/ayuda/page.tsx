'use client';

import { BookOpen, Video, GraduationCap, LifeBuoy, MessageSquare, HelpCircle, Phone, Mail } from 'lucide-react';

export default function CapacitacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-3 flex items-center justify-center gap-3">
            <LifeBuoy size={36} className="text-indigo-600" />
            Centro de Capacitación y Ayuda
          </h1>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto">
            Recursos para facilitar tu aprendizaje y crecimiento profesional
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Manuales */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-indigo-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <BookOpen size={28} className="text-indigo-200" />
                <h2 className="text-2xl font-semibold">Manuales</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Documentación detallada de todos los sistemas y procesos.
              </p>
              <ul className="space-y-2 text-indigo-700">
                <li className="flex items-center gap-2">
                  <span className="bg-indigo-100 p-1 rounded-full">
                    <BookOpen size={14} className="text-indigo-600" />
                  </span>
                  Manual de usuario básico
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-indigo-100 p-1 rounded-full">
                    <BookOpen size={14} className="text-indigo-600" />
                  </span>
                  Guías de administración
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-indigo-100 p-1 rounded-full">
                    <BookOpen size={14} className="text-indigo-600" />
                  </span>
                  Procedimientos avanzados
                </li>
              </ul>
              <button className="mt-6 w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                Ver todos los manuales
              </button>
            </div>
          </div>

          {/* Videos */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <Video size={28} className="text-blue-200" />
                <h2 className="text-2xl font-semibold">Video Tutoriales</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Aprende visualmente con nuestros tutoriales paso a paso.
              </p>
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center p-4">
                    <Video size={40} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Vista previa del video</p>
                  </div>
                </div>
                <p className="text-sm font-medium mt-2 text-blue-600">Introducción al sistema</p>
              </div>
              <button className="mt-2 w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                Explorar videoteca
              </button>
            </div>
          </div>

          {/* Cursos */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-purple-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <GraduationCap size={28} className="text-purple-200" />
                <h2 className="text-2xl font-semibold">Cursos Internos</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Programas estructurados para desarrollar tus habilidades.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-2 mt-1">
                    <GraduationCap size={14} />
                  </span>
                  <div>
                    <h3 className="font-medium">Onboarding</h3>
                    <p className="text-sm text-gray-500">Curso de incorporación para nuevos empleados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-2 mt-1">
                    <GraduationCap size={14} />
                  </span>
                  <div>
                    <h3 className="font-medium">Certificación Avanzada</h3>
                    <p className="text-sm text-gray-500">Domina todos los módulos del sistema</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                Ver catálogo de cursos
              </button>
            </div>
          </div>
        </div>

        {/* FAQ and Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle size={28} className="text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Preguntas Frecuentes</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-indigo-700">¿Cómo restablezco mi contraseña?</h3>
                <p className="text-gray-600 text-sm mt-1">Puedes restablecerla desde la página de inicio de sesión...</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-indigo-700">¿Dónde encuentro los reportes mensuales?</h3>
                <p className="text-gray-600 text-sm mt-1">Todos los reportes están disponibles en el módulo de Analytics...</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-indigo-700">¿El sistema tiene app móvil?</h3>
                <p className="text-gray-600 text-sm mt-1">Actualmente estamos desarrollando la versión móvil...</p>
              </div>
            </div>
            <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
              Ver todas las preguntas
            </button>
          </div>

          {/* Soporte */}
          <div className="bg-indigo-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={28} className="text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Contactar Soporte</h2>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                ¿No encontraste lo que necesitabas? Nuestro equipo de soporte está disponible para ayudarte.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-indigo-700 mb-2">Horario de atención:</h3>
                <p className="text-gray-600">Lunes a Viernes: 8:00 - 18:00 hrs</p>
                <p className="text-gray-600">Sábados: 9:00 - 14:00 hrs</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-indigo-700 mb-2">Canales de contacto:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-indigo-100 p-1 rounded-full">
                      <MessageSquare size={14} className="text-indigo-600" />
                    </span>
                    Chat en línea
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-indigo-100 p-1 rounded-full">
                      <LifeBuoy size={14} className="text-indigo-600" />
                    </span>
                    Ticket de soporte
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-indigo-100 p-1 rounded-full">
                      <Phone size={14} className="text-indigo-600" />
                    </span>
                    +1 234 567 890
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-indigo-100 p-1 rounded-full">
                      <Mail size={14} className="text-indigo-600" />
                    </span>
                    soporte@empresa.com
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <MessageSquare size={18} /> Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
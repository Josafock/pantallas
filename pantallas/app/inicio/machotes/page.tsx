'use client';

import { FileText, Download, Eye } from 'lucide-react';
import { useState } from 'react';

const templates = [
  {
    id: 1,
    title: 'Formato 1',
    description: 'Formato estándar ',
    category: 'Legal',
    lastUpdated: '15/03/2023',
    downloads: 124
  },
  {
    id: 2,
    title: 'Formato 2',
    description: 'Acuerdos',
    category: 'Legal',
    lastUpdated: '22/01/2023',
    downloads: 89
  },
  {
    id: 3,
    title: 'Formato 3',
    description: 'Proovedores',
    category: 'Administrativo',
    lastUpdated: '05/04/2023',
    downloads: 210
  },
  {
    id: 4,
    title: 'Formato 4',
    description: 'Carta de presentación',
    category: 'RRHH',
    lastUpdated: '10/02/2023',
    downloads: 76
  },
  {
    id: 5,
    title: 'Formato 5',
    description: 'Plantilla para reporte',
    category: 'Finanzas',
    lastUpdated: '28/03/2023',
    downloads: 153
  }
];

export default function MachotesPage() {
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const handlePreview = (templateId) => {
    setPreviewTemplate(templateId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#174940] p-6 text-white">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <FileText size={28} className="text-[#63B23D]" />
              Machotes
            </h1>
            <p className="text-[#999999] mt-1">Selecciona el formato que necesites</p>
          </div>

          {/* Lista de machotes */}
          <div className="p-6">
            <div className="space-y-4">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className="border border-[#999999]/20 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#0F332D]">{template.title}</h3>
                      <p className="text-sm text-[#999999] mt-1">{template.description}</p>
                      <div className="flex gap-4 mt-2">
                        <span className="text-xs bg-[#174940]/10 text-[#174940] px-2 py-1 rounded">
                          {template.category}
                        </span>
                        <span className="text-xs text-[#999999]">
                          Actualizado: {template.lastUpdated}
                        </span>
                        <span className="text-xs text-[#999999]">
                          {template.downloads} descargas
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handlePreview(template.id)}
                        className="p-2 text-[#63B23D] hover:bg-[#63B23D]/10 rounded-full transition"
                        title="Vista previa"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Vista previa (se muestra solo cuando está activa) */}
                  {previewTemplate === template.id && (
                    <div className="mt-4 pt-4 border-t border-[#999999]/10">
                      <div className="bg-gray-50 rounded-lg p-4 h-40 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <FileText size={32} className="mx-auto mb-2" />
                          <p>Vista previa de {template.title}</p>
                          <p className="text-xs mt-1">(Esta sería una vista previa real del documento)</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
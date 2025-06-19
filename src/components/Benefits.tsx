"use client";
import { TrendingUp, Clock, Award, Target } from "lucide-react";

const Benefits = () => {
  const heatmapData = [
    { name: 'Performance', value: 98, color: 'bg-green-500' },
    { name: 'Seguridad', value: 95, color: 'bg-blue-500' },
    { name: 'UX/UI', value: 97, color: 'bg-purple-500' },
    { name: 'SEO', value: 93, color: 'bg-teal-500' },
    { name: 'Mobile', value: 96, color: 'bg-orange-500' },
    { name: 'Soporte', value: 99, color: 'bg-red-500' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calidad <span className="text-gradient">Garantizada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nuestros objetivos visuales basados en métricas reales de rendimiento
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Heat Map Visualization */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Mapa de Calor - Rendimiento
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {heatmapData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Crecimiento Escalable</h4>
                <p className="text-gray-400">Arquitecturas diseñadas para crecer con tu negocio</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Entrega Rápida</h4>
                <p className="text-gray-400">Metodologías ágiles para resultados en tiempo récord</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Calidad Premium</h4>
                <p className="text-gray-400">Estándares internacionales de desarrollo y testing</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Pixel Perfect</h4>
                <p className="text-gray-400">Diseños exactos al pixel con atención al detalle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

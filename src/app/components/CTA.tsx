import { Calendar, ArrowRight, PhoneCall } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para Transformar Tu Práctica?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Únete a los oftalmólogos y directores clínicos líderes que confían en RetiScan 
          para screening de retinopatía diabética preciso y eficiente. Agenda tu 
          demostración personalizada hoy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-orange-900/50 hover:shadow-orange-900/70 transition-all duration-300 flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            Agendar una Demo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3">
            <PhoneCall className="w-6 h-6" />
            Hablar con Ventas
          </button>
        </div>
        
        <div className="mt-10 flex items-center justify-center gap-8 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Prueba Gratuita 14 Días</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Sin Tarjeta de Crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Configuración en 24 Horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
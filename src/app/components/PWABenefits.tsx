import { Download, RefreshCw, Wifi, Zap, Shield, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const benefits = [
  {
    icon: Download,
    title: 'Sin Descarga',
    description: 'Accede directamente desde tu navegador sin ocupar espacio en tu dispositivo'
  },
  {
    icon: RefreshCw,
    title: 'Siempre Actualizado',
    description: 'Mejoras automáticas con las últimas características y modelos de IA'
  },
  {
    icon: Wifi,
    title: 'Funciona Offline',
    description: 'Captura y analiza incluso sin conexión a internet estable'
  },
  {
    icon: Zap,
    title: 'Ultra Rápido',
    description: 'Análisis en tiempo real con tecnología de optimización PWA'
  },
  {
    icon: Shield,
    title: 'Seguro y Privado',
    description: 'Datos cifrados con estándares médicos HIPAA'
  },
  {
    icon: Globe,
    title: 'Multiplataforma',
    description: 'Funciona en cualquier dispositivo: móvil, tablet o desktop'
  }
];

export function PWABenefits() {
  return (
    <section id="beneficios" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-400">PROGRESSIVE WEB APP</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tecnología PWA al Servicio de la Salud
          </h2>
          <p className="text-xl text-slate-300">
            Experiencia de aplicación nativa con la flexibilidad de la web. Lo mejor de ambos mundos.
          </p>
        </div>
        
        {/* Device Mockup Section */}
        <div className="mb-20">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Mobile mockup */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-slate-800 rounded-[3rem] p-3 border-8 border-slate-700 shadow-2xl">
                  <div className="bg-slate-900 rounded-[2.3rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="h-6 bg-slate-900 flex items-center justify-center">
                      <div className="w-32 h-4 bg-slate-800 rounded-full"></div>
                    </div>
                    {/* Phone screen */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 min-h-[500px]">
                      <div className="space-y-4">
                        <div className="h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                          RetiScan Móvil
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-3"></div>
                          <div className="h-3 bg-slate-200 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop mockup */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-slate-800 rounded-2xl p-2 border-4 border-slate-700 shadow-2xl">
                  <div className="bg-slate-900 rounded-xl overflow-hidden">
                    {/* Browser bar */}
                    <div className="h-8 bg-slate-800 flex items-center px-3 gap-2 border-b border-slate-700">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">
                        retiscan.app
                      </div>
                    </div>
                    {/* Desktop screen */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 min-h-[400px]">
                      <div className="space-y-4">
                        <div className="h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center px-6 text-white font-bold text-xl shadow-lg">
                          RetiScan Dashboard
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-xl p-4 shadow-lg">
                            <div className="w-full h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-3"></div>
                            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-lg">
                            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-3"></div>
                            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Seamless badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full shadow-2xl border-4 border-white">
                <span className="font-bold text-white">Experiencia Perfecta</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
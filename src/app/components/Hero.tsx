import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Subtle tech-inspired background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(30 58 138) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-blue-900">Detección de Retinopatía Diabética por IA</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-slate-900">Potencia Tu Clínica con </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Detección de Retinopatía por IA
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Preciso, rápido y accesible desde cualquier dispositivo. Despliega screening 
            oftalmológico de nivel empresarial con análisis de aprendizaje profundo que 
            iguala la precisión de especialistas certificados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-3">
              <Eye className="w-5 h-5" />
              Ver Planes de Suscripción
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-white hover:bg-slate-50 text-blue-900 border-2 border-slate-200 hover:border-blue-300 rounded-xl font-semibold transition-all duration-300">
              Solicitar Demo
            </button>
          </div>
          
          <div className="pt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">94.7%</div>
              <div className="text-sm text-slate-600">Precisión Diagnóstica</div>
            </div>
            <div className="text-center border-x border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">50K+</div>
              <div className="text-sm text-slate-600">Análisis Procesados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">&lt;2min</div>
              <div className="text-sm text-slate-600">Tiempo Promedio</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Image */}
        <div className="relative">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-3xl blur-3xl"></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1764336222789-28fd1846c6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpbmElMjBleWUlMjBzY2FuJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjkzMTIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Análisis de retina con inteligencia artificial"
              className="w-full h-auto"
            />
            
            {/* Floating AI analysis card */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-slate-200/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IA</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Estado del Análisis</div>
                  <div className="text-sm font-bold text-slate-900">Procesando...</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating data points */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full"></div>
          </div>
          <div className="absolute top-1/3 -right-6 w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Smartphone, Cloud, Wifi, Zap, Shield, Activity } from 'lucide-react';

export function ProductShowcase() {
  return (
    <section id="producto" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-700">EL PRODUCTO</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            La Potencia de la PWA de RetiScan
          </h2>
          <p className="text-xl text-slate-600">
            Una plataforma diagnóstica basada en la nube que transforma cualquier dispositivo 
            en una estación profesional de screening de retinopatía. Despliega al instante, escala sin esfuerzo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mobile App Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            
            {/* Phone Frame */}
            <div className="relative max-w-sm mx-auto">
              <div className="bg-slate-900 rounded-[3.5rem] p-4 shadow-2xl border-8 border-slate-800">
                <div className="bg-white rounded-[2.8rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-slate-900 h-8 flex items-center justify-center">
                    <div className="w-32 h-5 bg-slate-800 rounded-full"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="bg-gradient-to-br from-slate-50 to-white">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Activity className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-xs opacity-80">RetiScan PWA</div>
                            <div className="font-bold">Panel de Control</div>
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                      </div>
                      
                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-2xl font-bold">127</div>
                          <div className="text-xs opacity-80">Escaneos Hoy</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-2xl font-bold">8</div>
                          <div className="text-xs opacity-80">Alto Riesgo</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recent Scans */}
                    <div className="p-6 space-y-3">
                      <div className="text-sm font-semibold text-slate-900 mb-4">Análisis Recientes</div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-slate-900">Paciente #4721</div>
                            <div className="text-xs text-slate-500">Hace 2 min</div>
                          </div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            Bajo Riesgo
                          </div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-slate-900">Paciente #4720</div>
                            <div className="text-xs text-slate-500">Hace 5 min</div>
                          </div>
                          <div className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                            Alto Riesgo
                          </div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-slate-900">Paciente #4719</div>
                            <div className="text-xs text-slate-500">Hace 12 min</div>
                          </div>
                          <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            Moderado
                          </div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div className="border-t border-slate-200 p-4">
                      <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
                          <div className="w-8 h-1 bg-cyan-500 rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-cyan-600" />
                  <div>
                    <div className="text-xs text-slate-500">En la Nube</div>
                    <div className="text-sm font-bold text-slate-900">Siempre Activo</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-6 top-2/3 bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <Wifi className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-xs text-slate-500">Funciona Offline</div>
                    <div className="text-sm font-bold text-slate-900">Tecnología PWA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Poder Diagnóstico Empresarial en Tu Bolsillo
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                RetiScan PWA ofrece screening de retinopatía diabética de grado clínico 
                mediante una Progressive Web Application accesible desde cualquier dispositivo moderno. 
                Sin descargas de tiendas de aplicaciones, sin instalaciones complejas.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Accesibilidad Multiplataforma</h4>
                  <p className="text-slate-600">
                    Despliega en smartphones, tablets y estaciones de trabajo. Una plataforma, 
                    dispositivos ilimitados. Perfecto para unidades móviles y prácticas multilocalización.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Análisis por Aprendizaje Profundo en Tiempo Real</h4>
                  <p className="text-slate-600">
                    Nuestra red neuronal convolucional procesa imágenes retinales en menos de 2 minutos, 
                    identificando microaneurismas, hemorragias y exudados con 94.7% de precisión.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Infraestructura Cloud Conforme a HIPAA</h4>
                  <p className="text-slate-600">
                    Almacenamiento seguro de expedientes clínicos con cifrado end-to-end, respaldos automáticos 
                    y registros de auditoría completos. Todos los centros de datos certificados SOC 2 Type II.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
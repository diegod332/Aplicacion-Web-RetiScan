import { Award, Users, LineChart, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const stats = [
  { icon: Users, value: '50K+', label: 'Pacientes Analizados' },
  { icon: Award, value: '94.7%', label: 'Precisión del Modelo' },
  { icon: LineChart, value: '98%', label: 'Satisfacción de Usuarios' },
  { icon: Shield, value: 'HIPAA', label: 'Certificado de Seguridad' }
];

export function TrustSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkzMTIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profesional médico usando RetiScan"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Certificación</div>
                  <div className="text-sm font-bold text-slate-900">FDA Aprobado</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
                <span className="text-sm font-semibold text-blue-700">CONFIANZA MÉDICA</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Respaldado por Profesionales de la Salud
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                RetiScan ha sido desarrollado en colaboración con oftalmólogos líderes 
                y entrenado con millones de imágenes retinales validadas clínicamente.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nuestra tecnología de inteligencia artificial ha demostrado resultados 
                comparables a especialistas en la detección temprana de retinopatía diabética, 
                ayudando a prevenir la pérdida de visión en miles de pacientes.
              </p>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <Icon className="w-8 h-8 text-cyan-600 mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
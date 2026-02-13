import { Shield, Lock, Database, FileCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SplitText } from '@/app/components/SplitText';
import { GlowCard } from '@/app/components/GlowCard';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Seguridad por Diseño',
    description: 'Nuestra arquitectura ha sido rigurosamente validada mediante modelado de amenazas para prevenir vectores de ataque comunes incluyendo inyección SQL, XSS y ataques CSRF.'
  },
  {
    icon: Lock,
    title: 'Cifrado End-to-End',
    description: 'Todos los datos de expedientes clínicos están cifrados en tránsito usando TLS 1.3 y en reposo con cifrado AES-256. Las claves de cifrado se gestionan mediante módulos de seguridad hardware (HSM).'
  },
  {
    icon: Database,
    title: 'Protección de Integridad de Datos',
    description: 'Mecanismos avanzados de detección de manipulación garantizan la integridad de los datos biométricos del paciente. Todas las transacciones usan checksums criptográficos y logs de auditoría inmutables.'
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento HIPAA y SOC 2',
    description: 'Certificado conforme a estándares HIPAA, HITECH y SOC 2 Type II. Auditorías de seguridad regulares y pruebas de penetración de terceros garantizan el cumplimiento continuo.'
  }
];

const complianceBadges = [
  { name: 'HIPAA', status: 'Conforme' },
  { name: 'SOC 2 Type II', status: 'Certificado' },
  { name: 'GDPR', status: 'Listo' },
  { name: 'ISO 27001', status: 'Certificado' }
];

export function SecuritySection() {
  const title = useScrollReveal('fade-up');
  const c0 = useScrollReveal('fade-up', { delay: 100 });
  const c1 = useScrollReveal('fade-up', { delay: 250 });
  const c2 = useScrollReveal('fade-up', { delay: 400 });
  const c3 = useScrollReveal('fade-up', { delay: 550 });
  const cardReveals = [c0, c1, c2, c3];
  const threat = useScrollReveal('zoom-in', { delay: 200 });
  const badges = useScrollReveal('fade-up', { delay: 300 });

  return (
    <section id="seguridad" className="relative py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(30 58 138) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={title.ref} style={title.style} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-700">SEGURIDAD Y CONFIANZA</span>
          </div>
          <SplitText as="h2" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Seguridad de Nivel Empresarial para Datos Biométricos
          </SplitText>
          <p className="text-xl text-slate-700">
            Proteger la información sensible de salud del paciente es nuestra máxima prioridad.
            RetiScan emplea protocolos de seguridad de grado militar y sigue los marcos de ciberseguridad NIST.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const reveal = cardReveals[index];
            return (
              <div key={index} ref={reveal.ref} style={reveal.style} className="group">
                <GlowCard glowColor="rgba(0, 204, 255, 0.12)" className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-lg cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>

        {/* Threat Modeling Highlight */}
        <div ref={threat.ref} style={threat.style} className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-16 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Modelado Integral de Amenazas</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Nuestra plataforma se somete a modelado de amenazas continuo utilizando la metodología STRIDE
                (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service,
                Elevation of Privilege). Cada componente ha sido analizado para detectar vulnerabilidades:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Prevención de Inyección SQL vía Consultas Parametrizadas',
                  'Validación y Sanitización de Entradas en Todos los Puntos',
                  'Control de Acceso Basado en Roles (RBAC)',
                  'Verificaciones Criptográficas de Integridad en Todos los Datos'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div ref={badges.ref} style={badges.style} className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Certificado y Auditado</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceBadges.map((badge, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-green-300 transition-all duration-500 group cursor-default">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-lg text-slate-900 mb-1">{badge.name}</div>
                <div className="text-sm text-green-600 font-medium">{badge.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm max-w-3xl mx-auto">
            Todas las medidas de seguridad son verificadas independientemente mediante pruebas de penetración trimestrales
            por hackers éticos certificados y auditorías de seguridad anuales por firmas líderes en ciberseguridad.
          </p>
        </div>
      </div>
    </section>
  );
}
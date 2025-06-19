"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { scrollToContact } from "@/lib/utils";
import {
  Database,
  Globe,
  Rocket,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const Services = () => {
  // const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y responsivas con las últimas tecnologías",
      details:
        "Creamos aplicaciones web completas utilizando React, Vue.js, Angular y las tecnologías más modernas. Nuestros desarrollos incluyen diseño responsivo, optimización SEO, integración con APIs y bases de datos escalables.",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicaciones móviles nativas y híbridas para iOS y Android",
      details:
        "Desarrollamos aplicaciones móviles nativas e híbridas que funcionan perfectamente en iOS y Android. Utilizamos React Native, Flutter y tecnologías nativas para crear experiencias de usuario excepcionales.",
    },
    {
      icon: Database,
      title: "Sistemas Backend",
      description: "APIs robustas y bases de datos escalables para tu negocio",
      details:
        "Construimos sistemas backend sólidos con APIs RESTful y GraphQL, bases de datos optimizadas y arquitecturas escalables. Utilizamos Node.js, Python, y tecnologías cloud para garantizar el mejor rendimiento.",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Implementación de las mejores prácticas de seguridad web",
      details:
        "Implementamos protocolos de seguridad avanzados, encriptación de datos, autenticación multifactor y auditorías de seguridad completas para proteger tu información y la de tus usuarios.",
    },
    {
      icon: Rocket,
      title: "Optimización",
      description: "Performance y SEO optimizado para máxima velocidad",
      details:
        "Optimizamos la velocidad de carga, implementamos técnicas de SEO avanzadas y mejoramos el rendimiento general de tu aplicación para garantizar la mejor experiencia de usuario posible.",
    },
    {
      icon: Users,
      title: "Consultoría",
      description: "Asesoramiento técnico y estratégico para tu proyecto",
      details:
        "Ofrecemos consultoría especializada en arquitectura de software, selección de tecnologías, planificación de proyectos y estrategias de desarrollo para maximizar el éxito de tu negocio digital.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de desarrollo web con calidad premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-blue-400 group-hover:text-teal-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-gray-700/50 text-white max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4 text-2xl font-bold text-white mb-4">
                    <service.icon className="w-8 h-8 text-blue-400" />
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {service.details}
                  </p>
                  <div className="flex justify-end pt-4">
                    <DialogClose asChild>
                      <button  onClick={scrollToContact} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 font-semibold">
                        Solicitar Cotización
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

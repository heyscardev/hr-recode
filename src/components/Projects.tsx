"use client";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: "E-commerces",
      category: "Comercio Electrónico",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description:
        "Plataformas para vender productos y servicios online hecha a medida para tu marca",
    },
    {
      title: "Sistema CRM",
      category: "Gestión Empresarial",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description:
        "Sistema de gestión de clientes con analytics avanzados para tu negocio",
    },
    {
      title: "Apps de IA",
      category: "IA",
      image: "/ia-app.jpg",
      description:
        "trabajamos con las ultimas tecnologias de inteligencia artificial para crear aplicaciones que te ayuden a mejorar tu negocio y ahorrar tiempo",
    },
    ...(isMobile
      ? [
          {
            title: "Apps Fintech",
            category: "Finanzas",
            image:
              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
            description:
              "Aplicación para gestionar cualquier tipo de tecnologia financiera como criptomonedas, acciones, etc",
          },
        ]
      : []),
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hacemos <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Casos reales donde convertimos ideas en productos digitales de alto
            impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

"use client";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/utils";
import { ArrowRight, Code, Zap } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      aria-label="Sección principal de bienvenida"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-blue-400 opacity-60" />
      </div>
      <div
        className="absolute top-40 right-16 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Zap className="w-6 h-6 text-teal-400 opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image
            priority
            src="/logo.png"
            width={128}
            height={128}
            alt="Heyscar Recode Logo"
            className="w-32 h-32 mx-auto mb-6 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
            Heyscar Recode
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Desarrollamos sistemas web{" "}
          <span className="text-blue-400 font-semibold">premium</span>, con
          <span className="text-teal-400 font-semibold">
            {" "}
            precisión milimétrica
          </span>{" "}
          y tecnolo
        </p>
        <p
          className="text-md text-gray-400 uppercase tracking-widest mb-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          innovación · calidad · resultados
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
          >
            Contactar Ahora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-400 text-sm">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-400 text-sm">Satisfacción Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

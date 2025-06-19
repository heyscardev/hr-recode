"use client";

import { ArrowLeft, Home, Search, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex items-center justify-center">
      {/* Floating objects background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating icons */}
        <div className="absolute top-20 left-20 animate-float opacity-20">
          <Search className="w-8 h-8 text-blue-400" />
        </div>
        <div
          className="absolute bottom-32 right-20 animate-float opacity-20"
          style={{ animationDelay: "2s" }}
        >
          <Zap className="w-10 h-10 text-teal-400" />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-6 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4 animate-fade-in">
            404
          </h1>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Main message */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Oops! Página no encontrada
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Parece que te has perdido en el espacio digital. La página que
            buscas no existe o ha sido movida.
          </p>
          <p className="text-gray-400">
            Ruta solicitada:{" "}
            <span className="text-blue-400 font-mono">{pathname}</span>
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/"
            className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 font-semibold flex items-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Volver al Inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-8 py-4 rounded-xl hover:border-blue-500/50 transition-all duration-300 font-semibold flex items-center gap-3 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Página Anterior
          </button>
        </div>

        {/* Additional info */}
        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-gray-400 text-sm">
              Si crees que esto es un error, por favor contacta con nuestro
              equipo de soporte.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default NotFound;

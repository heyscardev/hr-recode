"use client";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <Image
              src="/logo.png" 
              width={128}
              height={128}
              alt="Heyscar Recode Logo" 
              className="w-16 h-16 mx-auto opacity-80"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Heyscar Recode</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Desarrollando el futuro digital con calidad premium y tecnología de vanguardia
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <button onClick={() => scrollToElement("services")} className="text-gray-400 hover:text-white transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToElement("projects")} className="text-gray-400 hover:text-white transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToElement("contact")} className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Heyscar Recode. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

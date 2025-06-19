"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";

import { sendContactinfo } from "@/actions/SendContactinfo";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendContactinfo(formData);
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Error al enviar el mensaje",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos de tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos listos para convertir tu idea en realidad digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">Heyscarromero@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-3">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Linkedin</p>
                    <a
                      href="https://www.linkedin.com/company/heyscar-recode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
                    >
                      Heyscar Recode
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white">Disponible Globalmente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                ¿Listo para empezar?
              </h4>
              <p className="text-gray-300 mb-6">
                Obtén una consulta gratuita y descubre cómo podemos ayudarte a
                alcanzar tus objetivos digitales.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                  Consulta Gratuita
                </span>
                <span className="px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-lg text-teal-300 text-sm">
                  Respuesta en 24h
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Nombre
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 group"
              >
                {isSending ? "Enviando..." : "Enviar Mensaje"}
                {isSending ? (
                  <Loader2 className="ml-2 w-4 h-4 animate-spin transition-transform" />
                ) : (
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

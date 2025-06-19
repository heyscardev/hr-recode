import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import FloatingObjects from "@/components/FloatingObjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <FloatingObjects />
      <Hero />
      <Services />
      <Projects />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

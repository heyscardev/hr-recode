"use client";
import { Code, Database, Globe, Smartphone, Zap, Shield, Rocket, Users, Terminal, Cpu } from "lucide-react";

const FloatingObjects = () => {
  const floatingIcons = [
    { Icon: Code, delay: '0s', duration: '20s', x: '10%', y: '20%' },
    { Icon: Database, delay: '2s', duration: '25s', x: '85%', y: '15%' },
    { Icon: Globe, delay: '4s', duration: '30s', x: '15%', y: '60%' },
    { Icon: Smartphone, delay: '1s', duration: '22s', x: '90%', y: '70%' },
    { Icon: Zap, delay: '3s', duration: '18s', x: '5%', y: '80%' },
    { Icon: Shield, delay: '5s', duration: '28s', x: '75%', y: '45%' },
    { Icon: Rocket, delay: '1.5s', duration: '24s', x: '25%', y: '85%' },
    { Icon: Users, delay: '6s', duration: '26s', x: '60%', y: '10%' },
    { Icon: Terminal, delay: '2.5s', duration: '32s', x: '40%', y: '90%' },
    { Icon: Cpu, delay: '4.5s', duration: '19s', x: '95%', y: '35%' }
  ];

  const geometricShapes = [
    { type: 'circle', delay: '0s', duration: '15s', x: '20%', y: '30%', size: '8px' },
    { type: 'square', delay: '3s', duration: '20s', x: '70%', y: '60%', size: '6px' },
    { type: 'triangle', delay: '1.5s', duration: '18s', x: '35%', y: '15%', size: '10px' },
    { type: 'circle', delay: '4s', duration: '22s', x: '80%', y: '80%', size: '4px' },
    { type: 'square', delay: '2s', duration: '25s', x: '10%', y: '70%', size: '7px' },
    { type: 'triangle', delay: '5s', duration: '16s', x: '90%', y: '25%', size: '9px' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={`icon-${index}`}
          className="absolute animate-float-slow opacity-10 hover:opacity-20 transition-opacity"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            animationDuration: item.duration
          }}
        >
          <item.Icon className="w-8 h-8 text-blue-400" />
        </div>
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute animate-drift opacity-5 ${
            shape.type === 'circle' ? 'rounded-full bg-gradient-to-r from-blue-400 to-teal-400' :
            shape.type === 'square' ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
            'bg-gradient-to-r from-green-400 to-yellow-400 clip-triangle'
          }`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            animationDelay: shape.delay,
            animationDuration: shape.duration
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse-slow" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-xl animate-pulse-slow" 
           style={{ animationDuration: '12s', animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl animate-pulse-slow" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />
    </div>
  );
};

export default FloatingObjects;

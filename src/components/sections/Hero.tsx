'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import WayLogo from "@/components/sections/WayLogo";
// import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1c2545_0%,#0a0f1f_50%,#000000_100%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Yellow/Gold Orb - Top Right */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsl(48 98% 51%) 0%, transparent 70%)',
            animationDuration: '4s'
          }}
        />
        {/* Blue/Teal Orb - Bottom Left */}
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsl(188 100% 30%) 0%, transparent 70%)',
            animationDuration: '5s',
            animationDelay: '1s'
          }}
        />
        {/* Center Accent Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[150px]"
          style={{ 
            background: 'radial-gradient(ellipse, hsl(48 98% 51%) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Metallic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Metallic Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Diagonal Light Beams */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div 
          className="absolute -top-1/2 -left-1/4 w-[200%] h-32 rotate-[-35deg] bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <div 
          className="absolute top-1/4 -right-1/4 w-[150%] h-24 rotate-[25deg] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>

      {/* Exhaust Pipe Silhouettes - Left */}
      {/* <div className="absolute left-0 bottom-0 w-1/4 h-3/4 opacity-[0.08]">
        <svg viewBox="0 0 150 400" className="w-full h-full" preserveAspectRatio="xMinYMax meet">
          <defs>
            <linearGradient id="pipeGradientL" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="380" rx="40" ry="18" fill="url(#pipeGradientL)" />
          <rect x="30" y="100" width="40" height="280" rx="20" fill="url(#pipeGradientL)" />
          <ellipse cx="50" cy="100" rx="25" ry="10" fill="url(#pipeGradientL)" />
          <ellipse cx="100" cy="390" rx="30" ry="12" fill="url(#pipeGradientL)" opacity="0.6" />
          <rect x="85" y="200" width="30" height="190" rx="15" fill="url(#pipeGradientL)" opacity="0.6" />
        </svg>
      </div> */}

      {/* Exhaust Pipe Silhouettes - Right */}
      {/* <div className="absolute right-0 bottom-0 w-1/4 h-3/4 opacity-[0.08]">
        <svg viewBox="0 0 150 400" className="w-full h-full" preserveAspectRatio="xMaxYMax meet">
          <defs>
            <linearGradient id="pipeGradientR" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="380" rx="40" ry="18" fill="url(#pipeGradientR)" />
          <rect x="80" y="80" width="40" height="300" rx="20" fill="url(#pipeGradientR)" />
          <ellipse cx="100" cy="80" rx="25" ry="10" fill="url(#pipeGradientR)" />
          <ellipse cx="50" cy="390" rx="30" ry="12" fill="url(#pipeGradientR)" opacity="0.6" />
          <rect x="35" y="180" width="30" height="210" rx="15" fill="url(#pipeGradientR)" opacity="0.6" />
        </svg>
      </div> */}

      {/* Edge Glow Lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div 
        className="absolute left-0 top-32 bottom-0 flex items-center pointer-events-none select-none z-[1]"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span 
          className="font-display text-[10rem] md:text-[16rem] lg:text-[20rem] font-black uppercase tracking-[0.15em] text-white/[0.03] leading-none -ml-8 md:-ml-12"
        >
          WAY
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 way-container text-center py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Logo - Large and Prominent */}
          <div className="mb-10 animate-fade-in relative">
            <div className="absolute inset-0 blur-3xl opacity-40 bg-accent/60 scale-150" />
            <WayLogo 
              size="large" 
              className="relative w-auto h-32 md:h-44 lg:h-52 drop-shadow-[0_0_40px_rgba(253,208,7,0.4)]" 
            />
          </div>

          {/* Headline (H1) */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white mb-6 animate-fade-in"
            style={{ 
              animationDelay: '0.15s',
              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 60px rgba(253,208,7,0.1)'
            }}
          >
            Fábrica de{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(253,208,7,0.5)]">
              Escapamentos
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            e Catalisadores
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Produtos de alta qualidade com certificação Inmetro.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-10 py-7 shadow-[0_0_50px_rgba(253,208,7,0.35)] hover:shadow-[0_0_80px_rgba(253,208,7,0.5)] transition-all duration-500 hover:scale-105"
              onClick={(e) => e.preventDefault()}
            >
              Solicite Sua Cotação
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-white/40" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

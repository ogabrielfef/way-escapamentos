'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/assets/hero-bg.jpg)` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-way-dark/80 via-way-dark/60 to-way-dark/90" />

      {/* Content */}
      <div className="relative z-10 way-container text-center pt-32 pb-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <span className="way-badge mb-6 inline-block animate-scale-in">
            Fábrica desde 2015
          </span>

          {/* Main Heading */}
          <h1 className="way-heading text-primary-foreground text-4xl md:text-6xl lg:text-7xl mb-6" style={{ animationDelay: '0.1s' }}>
            Fábrica de{" "}
            <span className="text-accent">Escapamentos</span> e Catalisadores
          </h1>

          {/* Subheading */}
          <p className="way-subheading text-primary-foreground/80 max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.2s' }}>
            Parque industrial moderno com certificação Inmetro. 
            Produtos de alta qualidade para todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={(e) => e.preventDefault()}>
              Baixar Catálogo
            </Button>
            <Button variant="wayOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={(e) => e.preventDefault()}>
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

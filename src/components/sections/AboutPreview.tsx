import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: Factory,
    value: "2015",
    label: "Fundação",
  },
  {
    icon: Award,
    value: "100%",
    label: "Certificação Inmetro",
  },
  {
    icon: Users,
    value: "1.000+",
    label: "Clientes Atendidos",
  },
];

const AboutPreview = () => {
  return (
    <section className="way-section bg-secondary">
      <div className="way-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              Sobre Nós
            </span>
            <h2 className="way-heading text-foreground mt-2 mb-6">
              Bem-vindos à{" "}
              <span className="text-primary">Way Escapamentos!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos uma fábrica especializada na produção de escapamentos e catalisadores 
              de alta qualidade, com certificação Inmetro e um moderno parque industrial 
              localizado em Careaçu, Sul de Minas Gerais.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Atendemos tanto pessoa física quanto jurídica, com produtos diversificados, 
              preços justos e soluções customizadas em INOX.
            </p>

            <Link href="/sobre">
              <Button variant="wayPrimary" size="lg" className="group">
                Conheça Nossa História
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 animate-fade-in">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="bg-background rounded-lg p-6 text-center shadow-way hover:shadow-way-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="block font-display text-2xl lg:text-3xl font-bold text-primary mb-1">
                  {item.value}
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

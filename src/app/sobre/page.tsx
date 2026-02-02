'use client'

import { Button } from "@/components/ui/button";
import { CheckCircle, Factory, Award, Users, MapPin, Target, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const timeline = [
  {
    year: "2015",
    title: "Fundação",
    description: "Início das atividades com foco em qualidade e atendimento personalizado.",
  },
  {
    year: "2017",
    title: "Certificação Inmetro",
    description: "Conquista da certificação Inmetro para todos os produtos da linha.",
  },
  {
    year: "2019",
    title: "Expansão Industrial",
    description: "Ampliação do parque industrial com novos equipamentos e tecnologia.",
  },
  {
    year: "2021",
    title: "Catálogo Nacional",
    description: "Lançamento do catálogo completo atendendo as principais montadoras do Brasil.",
  },
  {
    year: "2023",
    title: "Linha INOX Premium",
    description: "Lançamento da linha de produtos customizados em aço inox 304.",
  },
];

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description: "Produtos com certificação e rigoroso controle de qualidade.",
  },
  {
    icon: Users,
    title: "Compromisso",
    description: "Atendimento dedicado às necessidades de cada cliente.",
  },
  {
    icon: Factory,
    title: "Inovação",
    description: "Investimento contínuo em tecnologia e processos modernos.",
  },
];

const features = [
  "Fábrica própria com parque industrial moderno",
  "Certificação Inmetro em todos os produtos",
  "Atendimento para pessoa física e jurídica",
  "Produtos customizados em INOX 304",
  "Catálogo completo com diversas montadoras",
  "Preços justos direto da fábrica",
  "Equipe técnica especializada",
  "Entrega para todo o Brasil",
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        {/* Page Header */}
        <section className="relative bg-way-dark py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="relative way-container text-center">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              Nossa História
            </span>
            <h1 className="way-heading text-primary-foreground mt-2 mb-4">
              Sobre a Way Escapamentos
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Desde 2015 fabricando escapamentos e catalisadores com qualidade, 
              certificação e compromisso com nossos clientes
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="way-section bg-background">
          <div className="way-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="way-heading text-foreground mb-6">
                  Bem-vindos à{" "}
                  <span className="text-primary">Way Escapamentos!</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  É um prazer tê-los aqui conosco. Com grande satisfação, apresentamos nossa 
                  fábrica equipada com o mais moderno parque industrial, especializada na 
                  fabricação de escapamentos e catalisadores de alta qualidade e certificação 
                  do Inmetro.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A Way traz a expertise e experiência dos nossos diretores e colaboradores, 
                  comprometida em atender o mercado com produtos diversificados, preços justos 
                  e de acordo com as necessidades específicas de nossos clientes.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Se você busca escapamentos, catalisadores ou produtos customizados em INOX, 
                  você está no lugar certo! Nossa equipe está pronta para atendê-lo com excelência.
                </p>

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground text-sm">
                    <strong>Localização:</strong> Rodovia Fernão Dias, Km 822 - Parque Industrial, 
                    Careaçu, Sul de Minas Gerais
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "2015", label: "Ano de Fundação" },
                  { number: "1.000+", label: "Clientes Atendidos" },
                  { number: "500+", label: "Modelos no Catálogo" },
                  { number: "100%", label: "Certificação Inmetro" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-secondary rounded-lg p-6 text-center shadow-way"
                  >
                    <span className="block font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </span>
                    <span className="text-muted-foreground text-sm uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="way-section bg-secondary">
          <div className="way-container">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="way-card p-8">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground mb-4">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fabricar e comercializar escapamentos e catalisadores de alta qualidade, 
                  com certificação e preços justos, atendendo às necessidades específicas 
                  de cada cliente com excelência e comprometimento.
                </p>
              </div>

              <div className="way-card p-8">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground mb-4">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional na fabricação de escapamentos e catalisadores, 
                  reconhecida pela qualidade dos produtos, inovação constante e pelo 
                  relacionamento de confiança com clientes e parceiros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="way-section bg-way-dark text-primary-foreground">
          <div className="way-container">
            <div className="text-center mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Nossos Pilares
              </span>
              <h2 className="way-heading text-primary-foreground mt-2">
                Valores que nos Guiam
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="way-section bg-background">
          <div className="way-container">
            <div className="text-center mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Trajetória
              </span>
              <h2 className="way-heading text-foreground mt-2">
                Nossa História
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="way-section bg-secondary">
          <div className="way-container">
            <div className="text-center mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Diferenciais
              </span>
              <h2 className="way-heading text-foreground mt-2">
                Por Que Escolher a Way?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-16">
          <div className="way-container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground uppercase tracking-wide mb-4">
              Venha pra Way Escapamentos!
            </h2>
            <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
              Nossa equipe está pronta para atendê-lo com excelência. 
              Entre em contato e solicite um orçamento.
            </p>
            <Button variant="wayPrimary" size="lg" onClick={(e) => e.preventDefault()}>
              Fale Conosco
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sobre;

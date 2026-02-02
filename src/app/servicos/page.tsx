'use client'

import { Button } from "@/components/ui/button";
import { 
  Factory, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  Users, 
  Clock,
  CheckCircle,
  FileText,
  Cog,
  Package
} from "lucide-react";

const mainServices = [
  {
    icon: Factory,
    title: "Fabricação de Escapamentos",
    description: "Produção própria com equipamentos modernos e tecnologia de ponta. Fabricamos escapamentos para as principais montadoras do mercado brasileiro.",
    features: [
      "Linha completa para carros nacionais e importados",
      "Aço galvanizado de alta durabilidade",
      "Controle de qualidade rigoroso",
      "Acabamento premium",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Catalisadores Certificados",
    description: "Catalisadores com certificação Inmetro, garantindo conformidade com as normas ambientais e excelente desempenho.",
    features: [
      "Certificação Inmetro obrigatória",
      "Aprovação em vistorias",
      "Garantia de fábrica",
      "Modelos para diversas aplicações",
    ],
  },
  {
    icon: Wrench,
    title: "Produtos Customizados INOX",
    description: "Desenvolvemos soluções sob medida em aço inox 304 para atender necessidades específicas de cada cliente.",
    features: [
      "Aço inox 304 de alta qualidade",
      "Design personalizado",
      "Produção sob encomenda",
      "Acabamento espelhado ou escovado",
    ],
  },
  {
    icon: Truck,
    title: "Entrega para Todo Brasil",
    description: "Logística eficiente para atender clientes em todo o território nacional, com embalagem segura e rastreamento.",
    features: [
      "Frete para todas as regiões",
      "Embalagem reforçada",
      "Rastreamento do pedido",
      "Prazo ágil de entrega",
    ],
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: "Catálogo Digital",
    description: "Catálogo completo disponível para download com todos os modelos e especificações técnicas.",
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Equipe técnica pronta para auxiliar na escolha do produto ideal para seu veículo.",
  },
  {
    icon: Clock,
    title: "Orçamento Rápido",
    description: "Resposta em até 24 horas úteis para solicitações de orçamento e dúvidas técnicas.",
  },
  {
    icon: Cog,
    title: "Suporte Técnico",
    description: "Orientação sobre instalação e manutenção dos produtos adquiridos.",
  },
  {
    icon: Package,
    title: "Pedidos por Atacado",
    description: "Condições especiais para revendedores, oficinas e distribuidores.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Fábrica",
    description: "Todos os produtos possuem garantia contra defeitos de fabricação.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contato",
    description: "Entre em contato informando o veículo e o tipo de produto desejado.",
  },
  {
    number: "02",
    title: "Orçamento",
    description: "Receba um orçamento detalhado com prazo e formas de pagamento.",
  },
  {
    number: "03",
    title: "Produção",
    description: "Após aprovação, iniciamos a fabricação do seu pedido.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Enviamos o produto com embalagem segura e rastreamento.",
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-way-dark py-16">
          <div className="way-container text-center">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              O Que Fazemos
            </span>
            <h1 className="way-heading text-primary-foreground mt-2 mb-4">
              Nossos Serviços
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Conheça nossa linha completa de produtos e serviços. 
              Da fabricação à entrega, cuidamos de tudo com qualidade e profissionalismo.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="way-section bg-background">
          <div className="way-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div
                  key={service.title}
                  className="way-card p-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="way-section bg-way-dark text-primary-foreground">
          <div className="way-container">
            <div className="text-center mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Processo
              </span>
              <h2 className="way-heading text-primary-foreground mt-2">
                Como Funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
                  )}
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="way-section bg-secondary">
          <div className="way-container">
            <div className="text-center mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Mais Serviços
              </span>
              <h2 className="way-heading text-foreground mt-2">
                Diferenciais Way
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-background rounded-lg p-6 shadow-way hover:shadow-way-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-primary/10 py-12">
          <div className="way-container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-4">
                Importante
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Way Escapamentos é uma <strong className="text-foreground">fábrica</strong> especializada 
                na produção de escapamentos e catalisadores. <strong className="text-foreground">Não realizamos 
                instalação</strong>. Recomendamos que a instalação seja feita por um profissional qualificado 
                ou oficina de sua confiança.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-16">
          <div className="way-container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground uppercase tracking-wide mb-4">
              Precisa de um orçamento?
            </h2>
            <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
              Entre em contato com nossa equipe. Respondemos em até 24 horas úteis.
            </p>
            <Button variant="wayPrimary" size="lg" onClick={(e) => e.preventDefault()}>
              Solicitar Orçamento
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Servicos;

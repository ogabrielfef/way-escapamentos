import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Microscope, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Gauge,
  FlaskConical,
  ClipboardCheck
} from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Certificação Inmetro",
    description: "Todos os nossos produtos passam por rigorosos testes e possuem certificação do Instituto Nacional de Metrologia, garantindo segurança e qualidade conforme normas brasileiras.",
    badge: "Obrigatório",
  },
  {
    icon: Award,
    title: "Selo de Qualidade",
    description: "Reconhecimento pela excelência em processos de fabricação, assegurando que cada peça atenda aos mais altos padrões do mercado automotivo.",
    badge: "Excelência",
  },
  {
    icon: FileCheck,
    title: "Conformidade Técnica",
    description: "Produtos desenvolvidos seguindo especificações técnicas das montadoras, garantindo compatibilidade perfeita e desempenho original.",
    badge: "Técnico",
  },
];

const qualityProcess = [
  {
    icon: Factory,
    step: "01",
    title: "Matéria-Prima",
    description: "Utilizamos apenas aço de alta qualidade, com certificação de origem e propriedades mecânicas verificadas.",
  },
  {
    icon: Gauge,
    step: "02",
    title: "Processo de Fabricação",
    description: "Equipamentos de última geração e processos padronizados garantem precisão dimensional em cada peça.",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Testes de Qualidade",
    description: "Cada lote passa por testes de estanqueidade, resistência e durabilidade antes da liberação.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Inspeção Final",
    description: "Verificação visual e dimensional 100% antes do envio, assegurando que só peças perfeitas cheguem ao cliente.",
  },
];

const commitments = [
  "Rastreabilidade completa de todos os produtos",
  "Garantia de fábrica em todas as peças",
  "Suporte técnico especializado",
  "Documentação técnica disponível",
  "Atendimento pós-venda dedicado",
  "Reposição rápida em caso de defeitos",
  "Treinamento para parceiros e revendedores",
  "Atualização constante do catálogo",
];

const Certificacoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-way-dark py-16">
          <div className="way-container text-center">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              Qualidade Certificada
            </span>
            <h1 className="way-heading text-primary-foreground mt-2 mb-4">
              Certificações e Qualidade
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Nosso compromisso com a excelência vai além das palavras. 
              Conheça os processos e certificações que garantem a qualidade Way.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="way-section">
          <div className="way-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Reconhecimento
              </span>
              <h2 className="way-heading text-foreground mt-2 mb-4">
                Nossas Certificações
              </h2>
              <p className="way-subheading">
                Certificações que comprovam nosso compromisso com a qualidade e segurança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="way-card p-8 text-center group hover:shadow-way transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-display uppercase px-2 py-1 rounded-full">
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-4">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Process Section */}
        <section className="way-section bg-secondary">
          <div className="way-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                Processo
              </span>
              <h2 className="way-heading text-foreground mt-2 mb-4">
                Controle de Qualidade
              </h2>
              <p className="way-subheading">
                Cada etapa do processo é rigorosamente controlada para garantir a excelência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityProcess.map((process, index) => (
                <div
                  key={process.title}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="way-card p-6 h-full">
                    <span className="absolute -top-4 -left-2 font-display text-5xl font-bold text-accent/20">
                      {process.step}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <process.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide mb-3">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section className="way-section bg-way-dark text-primary-foreground">
          <div className="way-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
                  Testes Rigorosos
                </span>
                <h2 className="way-heading text-primary-foreground mt-2 mb-6">
                  Laboratório de Testes
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-6">
                  Nossa fábrica conta com um laboratório equipado para realizar testes que asseguram 
                  a qualidade e durabilidade de cada produto fabricado.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4">
                    <Microscope className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold uppercase tracking-wide text-sm mb-1">
                        Teste de Estanqueidade
                      </h4>
                      <p className="text-primary-foreground/70 text-sm">
                        Verificação de vazamentos utilizando pressão de ar e água para garantir vedação perfeita.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4">
                    <Gauge className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold uppercase tracking-wide text-sm mb-1">
                        Teste de Resistência
                      </h4>
                      <p className="text-primary-foreground/70 text-sm">
                        Simulação de condições extremas de temperatura e vibração para validar durabilidade.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4">
                    <ClipboardCheck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold uppercase tracking-wide text-sm mb-1">
                        Análise Dimensional
                      </h4>
                      <p className="text-primary-foreground/70 text-sm">
                        Medição precisa de todas as dimensões para garantir encaixe perfeito no veículo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-6 text-center">
                  Nosso Compromisso
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commitments.map((commitment, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/80 text-sm">{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="way-container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground uppercase tracking-wide mb-4">
              Qualidade que Você Pode Confiar
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Entre em contato e conheça mais sobre nossos produtos certificados e processos de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produtos">
                <Button variant="wayPrimary" size="lg" className="w-full sm:w-auto">
                  Ver Produtos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Certificacoes;

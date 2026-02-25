'use client'

import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook,
  MessageCircle,
  Building,
  Navigation
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: ["Rod. Fernão Dias, S/N, Km 822", "Zona Rural - Careaçu, MG", "CEP: 37.582-000"],
  },
  {
    icon: Phone,
    title: "Telefones",
    content: ["(35) 3476-0000", "(35) 99999-9999 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["vendas@wayescapamentos.com.br"],
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: ["Segunda a Quinta: 7h às 17h", "Sexta: 7h às 16h"],
  },
];

const quickContacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento rápido para orçamentos e dúvidas",
    action: "Chamar no WhatsApp",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Para orçamentos detalhados e documentação",
    action: "Enviar E-mail",
    color: "bg-primary hover:bg-primary/90",
  }
];

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-way-dark py-16">
          <div className="way-container text-center">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              Fale Conosco
            </span>
            <h1 className="way-heading text-primary-foreground mt-2 mb-4">
              Entre em Contato
            </h1>
            {/* <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Estamos prontos para atender você. Solicite um orçamento, tire suas dúvidas 
              ou visite nossa fábrica em Careaçu, MG.
            </p> */}
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="bg-secondary py-8">
          <div className="way-container">
            <div className="grid md:grid-cols-2 gap-4">
              {quickContacts.map((contact) => (
                <button
                  key={contact.title}
                  className={`flex items-center gap-4 p-4 rounded-lg text-white transition-all duration-300 ${contact.color}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-semibold uppercase tracking-wide text-sm">
                      {contact.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {contact.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="way-section bg-background">
          <div className="way-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="way-card p-8">
                <h2 className="font-display text-2xl font-semibold uppercase tracking-wide mb-2 text-foreground">
                  Solicite uma Cotação
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
                </p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Cliente
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      >
                        <option value="">Selecione...</option>
                        <option value="pj">Loja</option>
                        <option value="revenda">Distribuidor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Produto
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      >
                        <option value="">Selecione...</option>
                        <option value="escapamento">Abafadores</option>
                        <option value="catalisador">Catalisador</option>
                        <option value="inox">Downpipe</option>
                        <option value="inox">Silenciadores</option>
                        <option value="inox">Linha Inox</option>
                        <option value="outro">Acessórios</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Veículo (Marca / Modelo / Ano)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Ex: Chevrolet Onix 2022"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                      placeholder="Descreva o que você precisa, quantidade, urgência, etc..."
                    />
                  </div>
                  <Button variant="wayPrimary" size="lg" className="w-full" type="submit">
                    Enviar Solicitação
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Seus dados estão seguros conosco.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Info Cards */}
                <div className="way-card p-8">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-6 text-foreground">
                    Informações de Contato
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {info.content.map((line, index) => (
                            <p key={index} className="text-muted-foreground text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="way-card p-8">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-4 text-foreground">
                    Redes Sociais
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Siga-nos para novidades e lançamentos
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Instagram className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Facebook className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="way-card p-8 bg-primary text-primary-foreground">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6" />
                    <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                      Visite Nossa Fábrica
                    </h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">
                    Agende uma visita para conhecer nosso parque industrial e processo de fabricação.
                  </p>
                  <Button 
                    variant="wayOutline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver no Mapa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.576993461762!2d-45.680203999999996!3d-22.103966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbafe5c8b7188d%3A0x15a56305259fa879!2sWay%20Escapamentos!5e0!3m2!1spt-BR!2sbr!4v1771838889571!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Way Escapamentos - Rodovia Fernão Dias, Km 822, Careaçu, MG"
          />
        </section>
      </main>
    </div>
  );
};

export default Contato;

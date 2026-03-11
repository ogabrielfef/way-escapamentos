'use client'

import ProductCard from "@/components/sections/ProducCard";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

import silenciosoTraseiroC3 from "@/assets/silencioso-traseiro-c3.jpeg";
import tbInterJeep from "@/assets/tb-inter-c-flexivel-jeep.jpeg";
import silenciosoTraseiroFiat from "@/assets/silencioso-traseiro-fiat.jpeg";
import catalisadorJeep from "@/assets/catalisador-jeep-renegade.jpeg";
import catalisadorCompass from "@/assets/catalisador-compass.jpeg";
import catalisadorDuster from "@/assets/catalisador-duster.jpeg";
import tbInterOnix from "@/assets/tb-inter-c-flexivel-onix.jpeg";

import Link from "next/link";

const products = [
  {
    id: 1,
    image: silenciosoTraseiroC3,
    name: "Silencioso - C3 1.0",
    category: "Silenciadores",
    description: "Silencioso traseiro - C3 1.0 6V 3 CIL FIREFLY 2022.",
    featured: true,
  },
  {
    id: 2,
    image: tbInterJeep,
    name: "TB Inter c/ flexível",
    category: "Acessórios",
    description: "TB Inter c/ flecível - Jeep Renegade 1.3 16V turbo 2022.",
    featured: true,
  },
  {
    id: 3,
    image: silenciosoTraseiroFiat,
    name: "Silencioso - Fiat Strada",
    category: "Silenciadores",
    description: "Silencioso traseiro - Fiat Strada 1.3 8V 4 Cil Firefly 2020.",
    featured: false,
  },
  {
    id: 4,
    image: catalisadorJeep,
    name: "Catalisador - Jeep",
    category: "Catalisadores",
    description: "Catalisador - Jeep Renegade 1.3 16V Turbo 2022.",
    featured: false,
  },
  {
    id: 5,
    image: catalisadorCompass,
    name: "Catalisador - Compass",
    category: "Catalisadores",
    description: "Catalisador - Commander / Compass / Fastback / Pulse / Renegade / Toro 1.3 Turbo 2022.",
    featured: false,
  },
  {
    id: 6,
    image: catalisadorDuster,
    name: "Catalisador - Duster",
    category: "Catalisadores",
    description: "Catalisador - Captur / Duster / Duster Oroch / Oroch 1.3 16V 4 Cil Turbo TCE 2022 c/ coletor duplo.",
    featured: false,
  },
  {
    id: 7,
    image: tbInterOnix,
    name: "TB Inter c/ flexível",
    category: "Acessórios",
    description: "TB Inter c/ flexífel - Onix 1.0 12V 3 CIL Turbo / Aspirado 2019.",
    featured: false,
  },
];

const categories = ["Todos", "Abafadores", "Catalisadores", "Downpipes", "Silenciadores", "Linha INOX", "Acessórios"];

// const brands = [
//   "Chevrolet", "Fiat", "Volkswagen", "Ford", "Honda", "Toyota", 
//   "Hyundai", "Renault", "Nissan", "Jeep", "Peugeot", "Citroën"
// ];

const Produtos = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-way-dark py-16">
          <div className="way-container text-center">
            <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
              Catálogo Completo
            </span>
            <h1 className="way-heading text-primary-foreground mt-2 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto text-justify md:text-center hyphens-auto break-words md:hyphens-none">
              Explore nossa linha completa de escapamentos, catalisadores e acessórios. 
              Produtos com certificação Inmetro e garantia de fábrica.
            </p>
          </div>
        </section>

        {/* Catalog Download Section */}
        <section className="bg-accent py-10">
          <div className="way-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-accent-foreground/20">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-accent-foreground flex items-center justify-center">
                      <Download className="w-12 h-12 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wide mb-3">
                      Catálogo Digital Completo
                    </h2>
                    <p className="text-accent-foreground/80 mb-4 text-justify md:text-left hyphens-auto break-words">
                      Acesse nosso catálogo completo com mais de 4000 opções para diversas montadoras. 
                      Catálogo gratuito disponível para Android, IOS e PC na plataforma <strong>Baixecatalogo</strong>.
                    </p>
                    
                    {/* Instructions */}
                    <div className="bg-accent-foreground/10 rounded-lg p-4 mb-4">
                      <p className="font-display text-sm font-semibold text-accent-foreground uppercase tracking-wide mb-3 text-left">
                        Como acessar:
                      </p>
                      <ol className="text-accent-foreground/80 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                          <span className="text-left">Acesse o site <strong className="break-all">baixecatalogo.com.br/catalogo/way-escapamentos</strong> no seu computador</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                          <span className="text-left">Faça o download gratuito do aplicativo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                          <span className="text-left">Após instalar, realize o cadastro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                          <span className="text-left">Após cadastro é só navegar pelos itens e realizar seu pedido</span>
                        </li>
                      </ol>
                    </div>
                    
                    <Link 
                      href="https://www.baixecatalogo.com.br/catalogo/way-escapamentos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-6 py-3 rounded-full font-display uppercase tracking-wide text-sm hover:bg-accent-foreground/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Acessar Baixecatalogo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        {/* <section className="bg-secondary py-8 border-b border-border">
          <div className="way-container">
            <p className="text-center text-sm text-muted-foreground mb-4 font-display uppercase tracking-wide">
              Montadoras Atendidas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((brand) => (
                <span 
                  key={brand} 
                  className="px-4 py-2 bg-background rounded-full text-sm text-foreground font-medium shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section> */}

        {/* Products Section */}
        <section className="way-section">
          <div className="way-container">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 mb-10">
              {/* <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-display uppercase tracking-wide text-sm text-foreground">
                  Filtrar por categoria:
                </span>
              </div> */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={"px-4 py-2 rounded-full font-display uppercase tracking-wide text-xs transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    //   ${
                    //   index === 0
                    //     ? "bg-primary text-primary-foreground shadow-way"
                    //     : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    // }
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Pagination
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-full font-display text-sm transition-all duration-300 ${
                    page === 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  {page}
                </button>
              ))}
            </div> */}
          </div>
        </section>
        <section className="bg-primary/10 py-12">
          <div className="way-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed text-justify md:text-center hyphens-auto break-words md:hyphens-none">
                Consulte o catálogo mais <strong className="text-foreground">completo</strong> do Brasil para ter
                acesso a todas as peças.
              </p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="way-container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground uppercase tracking-wide mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto text-justify md:text-center hyphens-auto break-words md:hyphens-none">
              Fabricamos produtos customizados em aço INOX sob medida. 
              Entre em contato para um orçamento personalizado.
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

export default Produtos;

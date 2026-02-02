'use client'

import ProductCard from "@/components/sections/ProducCard";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import productExhaust1 from "@/assets/product-exhaust-1.jpg";
import productExhaust2 from "@/assets/product-exhaust-2.jpg";
import productExhaust3 from "@/assets/product-exhaust-3.jpg";
import productExhaust4 from "@/assets/product-exhaust-4.jpg";

const products = [
  {
    id: 1,
    image: productExhaust1,
    name: "Escapamento Esportivo Dual",
    category: "Esportivo",
    description: "Ponteiras duplas em aço inox com acabamento cromado premium. Aumenta performance e som esportivo.",
    featured: true,
  },
  {
    id: 2,
    image: productExhaust2,
    name: "Header Performance 4-1",
    category: "Headers",
    description: "Coletor de escape 4-1 em aço inox mandrilado para máxima performance e fluxo de gases.",
    featured: false,
  },
  {
    id: 3,
    image: productExhaust3,
    name: "Downpipe Catless",
    category: "Downpipes",
    description: "Downpipe sem catalizador para uso em pista. Construção em aço inox 304 de alta durabilidade.",
    featured: false,
  },
  {
    id: 4,
    image: productExhaust4,
    name: "Ponteira Esportiva Dupla",
    category: "Ponteiras",
    description: "Ponteiras esportivas duplas black com acabamento fosco. Design agressivo e som marcante.",
    featured: true,
  },
  {
    id: 5,
    image: productExhaust1,
    name: "Catalisador Original",
    category: "Catalisadores",
    description: "Catalisador com certificação Inmetro. Peça de reposição original com garantia de fábrica.",
    featured: false,
  },
  {
    id: 6,
    image: productExhaust2,
    name: "Silenciador Traseiro",
    category: "Silenciadores",
    description: "Silenciador traseiro em aço galvanizado. Som equilibrado e durabilidade comprovada.",
    featured: false,
  },
  {
    id: 7,
    image: productExhaust3,
    name: "Kit Completo Esportivo",
    category: "Esportivo",
    description: "Kit completo de escape esportivo incluindo headers, downpipe e ponteiras. Alta performance.",
    featured: true,
  },
  {
    id: 8,
    image: productExhaust4,
    name: "Ponteira INOX Customizada",
    category: "INOX",
    description: "Ponteira em aço inox 304 fabricada sob medida. Design personalizado conforme sua preferência.",
    featured: false,
  },
];

const categories = ["Todos", "Esportivo", "Headers", "Downpipes", "Ponteiras", "Silenciadores", "Catalisadores", "INOX"];

const brands = [
  "Chevrolet", "Fiat", "Volkswagen", "Ford", "Honda", "Toyota", 
  "Hyundai", "Renault", "Nissan", "Jeep", "Peugeot", "Citroën"
];

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
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
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
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wide mb-3">
                      Catálogo Digital Completo
                    </h2>
                    <p className="text-accent-foreground/80 mb-4">
                      Acesse nosso catálogo completo com mais de 500 modelos para diversas montadoras. 
                      O catálogo é um aplicativo gratuito disponível na plataforma <strong>Baixecatalogo</strong>.
                    </p>
                    
                    {/* Instructions */}
                    <div className="bg-accent-foreground/10 rounded-lg p-4 mb-4">
                      <p className="font-display text-sm font-semibold text-accent-foreground uppercase tracking-wide mb-3">
                        Como acessar:
                      </p>
                      <ol className="text-accent-foreground/80 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                          <span>Acesse o site <strong>baixecatalogo.com.br</strong> no seu computador</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                          <span>Faça o download gratuito do aplicativo Baixecatalogo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                          <span>Após instalar, pesquise por <strong>"Way Escapamentos"</strong> no app</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-accent-foreground text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                          <span>Baixe nosso catálogo e navegue por todos os produtos offline</span>
                        </li>
                      </ol>
                    </div>
                    
                    <a 
                      href="https://baixecatalogo.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-6 py-3 rounded-full font-display uppercase tracking-wide text-sm hover:bg-accent-foreground/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Acessar Baixecatalogo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="bg-secondary py-8 border-b border-border">
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
        </section>

        {/* Products Section */}
        <section className="way-section">
          <div className="way-container">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-display uppercase tracking-wide text-sm text-foreground">
                  Filtrar por categoria:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full font-display uppercase tracking-wide text-xs transition-all duration-300 ${
                      index === 0
                        ? "bg-primary text-primary-foreground shadow-way"
                        : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
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

            {/* Pagination */}
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="way-container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground uppercase tracking-wide mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
              Fabricamos produtos customizados em INOX sob medida. 
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

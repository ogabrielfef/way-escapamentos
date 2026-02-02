import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productExhaust1 from "@/assets/product-exhaust-1.jpg";
import productExhaust2 from "@/assets/product-exhaust-2.jpg";
import productExhaust3 from "@/assets/product-exhaust-3.jpg";

const featuredProducts = [
  {
    id: 1,
    image: productExhaust1,
    name: "Escapamentos",
    description: "Linha completa para diversas montadoras",
  },
  {
    id: 2,
    image: productExhaust2,
    name: "Catalisadores",
    description: "Certificação Inmetro garantida",
  },
  {
    id: 3,
    image: productExhaust3,
    name: "Produtos INOX",
    description: "Customizados sob medida",
  },
];

const ProductsPreview = () => {
  return (
    <section className="way-section bg-background">
      <div className="way-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
            Catálogo
          </span>
          <h2 className="way-heading text-foreground mt-2 mb-4">
            Nossos Produtos
          </h2>
          <p className="way-subheading">
            Fabricamos escapamentos e catalisadores para as principais montadoras do mercado
          </p>
        </div>

        {/* Products Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-way-dark/90 via-way-dark/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/produtos">
            <Button variant="wayPrimary" size="lg" className="group">
              Ver Catálogo Completo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

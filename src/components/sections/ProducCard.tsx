'use client'

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  category: string;
  description: string;
  featured?: boolean;
}

const ProductCard = ({ image, name, category, description, featured }: ProductCardProps) => {
  return (
    <div className={`way-card group flex flex-col h-full ${featured ? 'ring-2 ring-accent' : ''}`}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-way-dark">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <span className="absolute top-4 left-4 way-badge">
            Destaque
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-way-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {category}
        </span>
        <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2 uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Button 
          variant="wayPrimary" 
          className="w-full mt-auto"
          onClick={(e) => e.preventDefault()}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

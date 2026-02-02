'use client'

import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WayLogo from "@/components/sections/WayLogo";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const location = useLocation();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Certificações", href: "/certificacoes" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="way-container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Careaçu, MG
            </span>
          </div>
          <span className="hidden md:block font-medium">
            Fábrica de Escapamentos e Catalisadores
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="way-container flex items-center justify-between py-4">
          <Link href="/">
            <WayLogo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`font-display text-sm uppercase tracking-wide transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link href="/contato">
              <Button variant="wayAccent" className="hidden sm:flex">
                Orçamento
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-up">
            <ul className="way-container py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block font-display uppercase tracking-wide transition-colors text-sm py-2 ${
                      isActive(item.href)
                        ? "text-accent"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="wayAccent" className="w-full mt-2">
                    Orçamento
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

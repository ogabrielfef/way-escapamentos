'use client'

import Link from "next/link";
import WayLogo from "@/components/sections/WayLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Certificações", href: "/certificacoes" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-way-dark text-way-light-text">
      <div className="way-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <WayLogo size="default" className="mb-4" />
            <div className="text-way-light-text/70 mt-4 max-w-sm text-sm leading-relaxed space-y-1">
              <p className="font-semibold text-way-light-text/90">WAY ESCAPAMENTOS LTDA</p>
              <p>CNPJ: 23.609.981/0001-74</p>
              <p>ROD FERNAO DIAS, S/N, KM 822</p>
              <p>37.582-000, ZONA RURAL, CAREACU, MG</p>
              <p>Email: CONTATO@WAYESCAPAMENTOS.COM</p>
              <p>Telefone: (35) 3476-0000</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-sm font-semibold mb-4 text-accent">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-way-light-text/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-sm font-semibold mb-4 text-accent">
              Categorias
            </h4>
            <ul className="space-y-2">
              {["Esportivos", "Headers", "Downpipes", "Ponteiras", "Silenciadores"].map((cat) => (
                <li key={cat}>
                  <Link
                    href="/produtos"
                    className="text-way-light-text/70 hover:text-accent transition-colors text-sm"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-way-light-text/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-way-light-text/50 text-sm text-center md:text-left">
            © {currentYear} Way Escapamentos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-way-light-text/50 hover:text-accent transition-colors text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-way-light-text/50 hover:text-accent transition-colors text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

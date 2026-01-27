import Link from "next/link"

import WayLogo from "@/components/ui/WayLogo"
import Container from "@/components/layout/Container"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* ========= Logo + descrição ========= */}
          <div className="md:col-span-2">
            <WayLogo size="default" className="mb-4" />

            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>
                {siteConfig.contact.city} - {siteConfig.contact.state}
              </p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          {/* ========= Navegação ========= */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
              Navegação
            </h4>

            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========= Produtos ========= */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
              Produtos
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Escapamentos Linha Leve",
                "Escapamentos Linha Pesada",
                "Catalisadores",
                "Silenciosos",
                "Sistemas Esportivos",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/produtos"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========= Bottom bar ========= */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.company.legalName}. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-primary">
              Política de Privacidade
            </Link>

            <Link href="/termos-de-uso" className="hover:text-primary">
              Termos de Uso
            </Link>

            <Link
              href={siteConfig.socials.instagram}
              target="_blank"
              className="hover:text-primary"
            >
              Instagram
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

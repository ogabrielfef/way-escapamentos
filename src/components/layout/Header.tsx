"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, Phone, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import WayLogo from "@/components/ui/WayLogo"
import Container from "./Container"

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0B3C40] text-white text-xs">
        <Container className="flex h-9 items-center justify-between">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.contact.phone}
            </span>

            <span className="hidden sm:flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              {siteConfig.contact.city}, {siteConfig.contact.state}
            </span>
          </div>

          <span className="hidden md:block font-medium">
            {siteConfig.company.slogan}
          </span>
        </Container>
      </div>


      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b shadow-sm">
        <Container className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <WayLogo className="h-9 w-auto" />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-colors",
                    isActive(item.href)
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Botão amarelo */}
            <Link
              href="/contato"
              className="hidden sm:inline-flex bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2.5 rounded-md transition"
            >
              Orçamento
            </Link>

            {/* Mobile */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </Container>


        {/* ================= MOBILE ================= */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <Container className="py-4 space-y-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block font-semibold",
                    isActive(item.href)
                      ? "text-yellow-500"
                      : "text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contato"
                className="block text-center bg-yellow-400 text-black font-semibold py-2 rounded-md"
              >
                Orçamento
              </Link>
            </Container>
          </div>
        )}
      </nav>
    </header>
  )
}

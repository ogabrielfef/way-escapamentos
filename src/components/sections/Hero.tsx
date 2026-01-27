"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Container from "@/components/layout/Container"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center justify-center text-center overflow-hidden">

      {/* ================= BG IMAGE ================= */}
      <Image
        src="/assets/hero-bg.jpg"
        alt="Fábrica Way Escapamentos"
        fill
        priority
        className="object-cover"
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#0B3C40]/85" />

      {/* ================= CONTENT ================= */}
      <Container className="relative z-10 pt-32">

        {/* Badge */}
        <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full mb-6">
          Fábrica desde 2015
        </span>

        {/* Title */}
        <h1 className="text-white font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
          Fábrica de{" "}
          <span className="text-yellow-400">
            Escapamentos
          </span>{" "}
          e Catalisadores
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
          Parque industrial moderno com certificação Inmetro.
          Produtos de alta qualidade para todo o Brasil.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          {/* Primary */}
          <Link
            href="/catalogo"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition"
          >
            Baixar Catálogo
          </Link>

          {/* Outline */}
          <Link
            href="/contato"
            className="border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-md transition"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </Container>
    </section>
  )
}

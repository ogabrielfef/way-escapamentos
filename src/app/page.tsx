import { getHomeContent } from "@/lib/cms"
import Hero from "@/components/sections/Hero"
import ProductsPreview from "@/components/sections/ProductsPreview"
import AboutPreview from "@/components/sections/AboutPreview"
import ServicesPreview from "@/components/sections/ServicesPreview"
import ContactPreview from "@/components/sections/ContactPreview"

export const metadata = {
  title: "Fábrica de Escapamentos e Catalisadores | Way Escapamentos",
  description:
    "A Way Escapamentos é especialista na fabricação de escapamentos e catalisadores automotivos com alta qualidade e certificação Inmetro. Solicite sua cotação.",

  openGraph: {
    title: "Way Escapamentos",
    description:
      "Especialistas em escapamentos e catalisadores automotivos com qualidade e segurança.",
    url: "https://wayescapamentos.com.br",
    images: ["/og-image.jpg"],
  },
};

export default async function Home() {
  const content = await getHomeContent()

  return (
    <>
      <Hero/>
      <ProductsPreview/>
      <AboutPreview/>
      <ServicesPreview/>
      <ContactPreview/>
    </>
  )
}

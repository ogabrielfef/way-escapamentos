import { getHomeContent } from "@/lib/cms"
import Hero from "@/components/sections/Hero"
import ProductsPreview from "@/components/sections/ProductsPreview"
import AboutPreview from "@/components/sections/AboutPreview"
import ServicesPreview from "@/components/sections/ServicesPreview"
import ContactPreview from "@/components/sections/ContactPreview"

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

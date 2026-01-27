import { getHomeContent } from "@/lib/cms"
import Hero from "@/components/sections/Hero"

export default async function Home() {
  const content = await getHomeContent()

  return (
    <>
      <Hero/>
    </>
  )
}

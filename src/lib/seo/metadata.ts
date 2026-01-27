import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),

    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

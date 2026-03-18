import Sobre from "./Sobre";

export const metadata = {
  title: "Sobre | Way Escapamentos",
  description:
    "Conheça a história da Way Escapamentos, referência na fabricação de escapamentos e catalisadores automotivos.",

  openGraph: {
    title: "Sobre | Way Escapamentos",
    description:
      "Tradição, qualidade e inovação no setor automotivo.",
    url: "https://wayescapamentos.com.br/sobre",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Sobre />;
}
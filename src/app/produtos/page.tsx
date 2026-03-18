import Produtos from "./Produtos";

export const metadata = {
  title: "Produtos | Way Escapamentos",
  description:
    "Conheça nossa linha de escapamentos e catalisadores automotivos com alta durabilidade e certificação Inmetro.",

  openGraph: {
    title: "Produtos | Way Escapamentos",
    description:
      "Linha completa de escapamentos e catalisadores com qualidade garantida.",
    url: "https://wayescapamentos.com.br/produtos",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Produtos />;
}
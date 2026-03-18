import Certificacoes from "./Certificacoes";

export const metadata = {
  title: "Certificações | Way Escapamentos",
  description:
    "Veja nossas certificações e padrões de qualidade que garantem segurança e conformidade com o Inmetro.",

  openGraph: {
    title: "Certificações | Way Escapamentos",
    description:
      "Produtos certificados que atendem às normas de qualidade e segurança.",
    url: "https://wayescapamentos.com.br/certificacoes",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Certificacoes />;
}
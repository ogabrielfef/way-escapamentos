import Contato from "./Contato";

export const metadata = {
  title: "Contato | Way Escapamentos",
  description:
    "Entre em contato com a Way Escapamentos e solicite um orçamento. Atendimento rápido e especializado.",

  openGraph: {
    title: "Contato | Way Escapamentos",
    description:
      "Fale conosco e solicite sua cotação de escapamentos e catalisadores.",
    url: "https://wayescapamentos.com.br/contato",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Contato />;
}
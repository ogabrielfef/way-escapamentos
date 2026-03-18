import Servicos from "./Servicos";

export const metadata = {
  title: "Serviços | Way Escapamentos",
  description:
    "Oferecemos serviços especializados em escapamentos e catalisadores automotivos com excelência e confiança.",

  openGraph: {
    title: "Serviços | Way Escapamentos",
    description:
      "Serviços profissionais para garantir o melhor desempenho do seu veículo.",
    url: "https://wayescapamentos.com.br/servicos",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Servicos />;
}
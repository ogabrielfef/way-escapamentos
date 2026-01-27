// import { Truck, Shield, Wrench, Clock } from "lucide-react";

// const benefits = [
//   {
//     icon: Truck,
//     title: "Entrega Rápida",
//     description: "Enviamos para todo o Brasil com prazo ágil",
//   },
//   {
//     icon: Shield,
//     title: "Garantia de Qualidade",
//     description: "Produtos com certificação e garantia de fábrica",
//   },
//   {
//     icon: Wrench,
//     title: "Instalação Profissional",
//     description: "Equipe especializada para instalação",
//   },
//   {
//     icon: Clock,
//     title: "Atendimento Rápido",
//     description: "Orçamento em até 24 horas úteis",
//   },
// ];

// const Benefits = () => {
//   return (
//     <section className="bg-secondary py-12 border-b border-border">
//       <div className="way-container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={benefit.title}
//               className="flex items-center gap-4 p-4 animate-fade-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
//                 <benefit.icon className="w-6 h-6 text-accent-foreground" />
//               </div>
//               <div>
//                 <h3 className="font-display font-semibold text-foreground uppercase tracking-wide text-sm">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {benefit.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;

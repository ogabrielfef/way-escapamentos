// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Factory, ShieldCheck, Wrench, Truck, Award, Users } from "lucide-react";

// const services = [
//   {
//     icon: Factory,
//     title: "Fábrica Própria",
//     description: "Parque industrial moderno com tecnologia de ponta",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Certificação Inmetro",
//     description: "Todos os produtos com selo de qualidade garantida",
//   },
//   {
//     icon: Wrench,
//     title: "Customização INOX",
//     description: "Fabricação sob medida para suas necessidades",
//   },
//   {
//     icon: Truck,
//     title: "Entrega Nacional",
//     description: "Enviamos para todo o Brasil com agilidade",
//   },
//   {
//     icon: Award,
//     title: "Garantia de Fábrica",
//     description: "Produtos com garantia e suporte técnico",
//   },
//   {
//     icon: Users,
//     title: "Atendimento PF e PJ",
//     description: "Para pessoa física e revendedores",
//   },
// ];

// const ServicesPreview = () => {
//   return (
//     <section className="way-section bg-way-dark text-primary-foreground overflow-hidden">
//       <div className="way-container">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
//             Diferenciais
//           </span>
//           <h2 className="way-heading text-primary-foreground mt-2 mb-4">
//             Por Que Escolher a Way?
//           </h2>
//           <p className="text-primary-foreground/70 text-lg">
//             Mais de 8 anos de experiência fabricando escapamentos e catalisadores com qualidade certificada
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 animate-slide-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <service.icon className="w-7 h-7 text-accent-foreground" />
//               </div>
//               <h3 className="font-display text-lg font-semibold uppercase tracking-wide mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-primary-foreground/70 text-sm">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Stats Bar */}
//         <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div>
//               <span className="block font-display text-3xl font-bold text-accent">2015</span>
//               <span className="text-primary-foreground/70 text-sm">Fundação</span>
//             </div>
//             <div>
//               <span className="block font-display text-3xl font-bold text-accent">500+</span>
//               <span className="text-primary-foreground/70 text-sm">Modelos</span>
//             </div>
//             <div>
//               <span className="block font-display text-3xl font-bold text-accent">100%</span>
//               <span className="text-primary-foreground/70 text-sm">Inmetro</span>
//             </div>
//             <div>
//               <span className="block font-display text-3xl font-bold text-accent">Brasil</span>
//               <span className="text-primary-foreground/70 text-sm">Entrega</span>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <Link to="/servicos">
//             <Button variant="hero" size="lg" className="group">
//               Conheça Nossos Serviços
//               <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesPreview;

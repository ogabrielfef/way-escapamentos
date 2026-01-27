// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, MessageCircle, Phone, Mail, Clock } from "lucide-react";

// const ContactPreview = () => {
//   return (
//     <section className="way-section bg-gradient-to-b from-background to-secondary">
//       <div className="way-container">
//         <div className="max-w-5xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <span className="text-accent font-display uppercase tracking-widest text-sm font-medium">
//               Contato
//             </span>
//             <h2 className="way-heading text-foreground mt-2 mb-4">
//               Solicite Sua Cotação
//             </h2>
//             <p className="way-subheading max-w-2xl mx-auto">
//               Nossa equipe está pronta para atendê-lo com excelência. 
//               Entre em contato para orçamentos, dúvidas ou parcerias comerciais.
//             </p>
//           </div>

//           {/* Contact Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//             {/* WhatsApp Card - Destacado */}
//             <div className="md:col-span-2 bg-[#25D366]/10 border-2 border-[#25D366]/30 rounded-xl p-8 hover:border-[#25D366]/60 transition-all duration-300">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
//                   <MessageCircle className="w-10 h-10 text-white" />
//                 </div>
//                 <div className="text-center md:text-left flex-1">
//                   <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-2">
//                     WhatsApp Comercial
//                   </h3>
//                   <p className="text-muted-foreground mb-3">
//                     Atendimento rápido e direto. Envie suas dúvidas ou solicite um orçamento agora mesmo.
//                   </p>
//                   <a
//                     href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-display uppercase tracking-wide text-sm hover:bg-[#20BA5C] transition-colors"
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                     Iniciar Conversa
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Phone Card */}
//             <div className="way-card p-6 hover:shadow-way transition-all duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-accent-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold uppercase tracking-wide text-sm mb-2">
//                     Telefone
//                   </h3>
//                   <p className="text-foreground font-medium">(11) 99999-9999</p>
//                   <p className="text-muted-foreground text-sm">(11) 3333-4444</p>
//                 </div>
//               </div>
//             </div>

//             {/* Email Card */}
//             <div className="way-card p-6 hover:shadow-way transition-all duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-accent-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold uppercase tracking-wide text-sm mb-2">
//                     E-mail
//                   </h3>
//                   <p className="text-foreground font-medium">contato@wayescapamentos.com.br</p>
//                   <p className="text-muted-foreground text-sm">Resposta em até 24h</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Hours + CTA */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-way-dark rounded-xl p-6">
//             <div className="flex items-center gap-4 text-primary-foreground">
//               <Clock className="w-8 h-8 text-accent" />
//               <div>
//                 <p className="font-display font-semibold uppercase tracking-wide text-sm">
//                   Horário de Atendimento
//                 </p>
//                 <p className="text-primary-foreground/70 text-sm">
//                   Seg a Sex: 8h às 18h | Sáb: 8h às 13h
//                 </p>
//               </div>
//             </div>
//             <Link to="/contato">
//               <Button variant="hero" size="lg" className="group">
//                 Formulário Completo
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPreview;

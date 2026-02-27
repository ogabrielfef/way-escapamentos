import { FileText } from "lucide-react";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(48_98%_51%/0.08),transparent_60%)]" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(48_98%_51%/0.05),transparent_70%)] rotate-12" />
        <div className="absolute top-1/4 left-[10%] w-1 h-1 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-[30%] w-1 h-1 bg-accent/25 rounded-full animate-pulse delay-700" />

        <div className="way-container relative z-10 text-center flex flex-col items-center mt-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <FileText className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-accent">
              Termos de Uso
            </h1>
          </div>
          <p className="text-primary-foreground/80 font-semibold text-lg mt-4">WAY ESCAPAMENTOS LTDA</p>
          <p className="text-primary-foreground/50 text-sm mt-2">Última atualização: 25 de fevereiro de 2026</p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12 md:py-16 bg-background">
        <div className="way-container max-w-4xl">
          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-10 text-foreground/80 leading-relaxed">
            <p className="text-justify hyphens-auto break-words md:hyphens-none">
              O acesso e a utilização do website da WAY ESCAPAMENTOS LTDA implicam na plena aceitação das disposições constantes nestes Termos de Uso.
            </p>
          </div>

          <Section number="1" title="Do Objeto">
            <p className="text-justify hyphens-auto break-words md:hyphens-none">O presente website possui caráter exclusivamente institucional e informativo, disponibilizando catálogo parcial de produtos e formulário para solicitação de orçamento.</p>
            <p className="text-justify hyphens-auto break-words md:hyphens-none">Não há comercialização direta de produtos por meio da plataforma.</p>
          </Section>

          <Section number="2" title="Das Condições de Utilização">
            <p>O usuário compromete-se a:</p>
            <BulletList items={[
              "Fornecer informações verídicas e atualizadas;",
              "Não utilizar o site para fins ilícitos ou contrários à legislação vigente;",
              "Não praticar atos que possam comprometer a segurança, integridade ou funcionamento do website.",
            ]} />
          </Section>

          <Section number="3" title="Da Propriedade Intelectual">
            <p className="text-justify hyphens-auto break-words md:hyphens-none">Todos os direitos relativos ao conteúdo do site são de titularidade exclusiva da WAY ESCAPAMENTOS LTDA, incluindo, mas não se limitando a:</p>
            <BulletList items={[
              "Marca e logotipo;",
              "Textos;",
              "Imagens;",
              "Fotografias;",
              "Conteúdo técnico e descritivo;",
              "Layout e identidade visual.",
            ]} />
            <p>É vedada a reprodução, distribuição ou utilização sem autorização prévia e expressa da Empresa.</p>
          </Section>

          <Section number="4" title="Dos Orçamentos e Garantias">
            <p className="text-justify hyphens-auto break-words md:hyphens-none">As solicitações realizadas por meio do formulário não constituem proposta vinculante ou obrigação de venda.</p>
            <p className="text-justify hyphens-auto break-words md:hyphens-none">As condições comerciais, valores e prazos serão definidos posteriormente, mediante negociação direta.</p>
            <p className="text-justify hyphens-auto break-words md:hyphens-none">A garantia dos produtos varia conforme o item adquirido, devendo ser confirmada junto ao vendedor no momento da contratação.</p>
          </Section>

          <Section number="5" title="Da Limitação de Responsabilidade">
            <p>A Empresa não se responsabiliza por:</p>
            <BulletList items={[
              "Interrupções temporárias do site;",
              "Falhas decorrentes de fatores externos;",
              "Danos causados por uso indevido da plataforma por terceiros.",
            ]} />
          </Section>

          <Section number="6" title="Das Disposições Finais">
            <p className="text-justify hyphens-auto break-words md:hyphens-none">A Empresa poderá alterar estes Termos a qualquer momento, mediante atualização desta página.</p>
          </Section>
        </div>
      </main>
    </div>
  );
};

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <div className="flex items-start gap-4 mb-4">
      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-foreground pt-1">{title}</h2>
    </div>
    <div className="ml-14 space-y-3 text-foreground/75 leading-relaxed">{children}</div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default TermosDeUso;
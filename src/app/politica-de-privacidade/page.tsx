import { Shield } from "lucide-react";

const PoliticaPrivacidade = () => {
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
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-accent">
              Política de Privacidade
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
            <p>
              A WAY ESCAPAMENTOS LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob nº 23.609.981/0001-74, com sede em Careaçu, Estado de Minas Gerais, doravante denominada simplesmente "Empresa", estabelece a presente Política de Privacidade com a finalidade de demonstrar seu compromisso com a proteção dos dados pessoais coletados por meio de seu website institucional.
            </p>
            <p className="mt-3">
              Esta Política encontra-se em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD) e demais normas aplicáveis.
            </p>
          </div>

          <Section number="1" title="Dos Dados Pessoais Coletados">
            <p>A Empresa realiza a coleta exclusiva dos dados pessoais fornecidos voluntariamente pelo titular por meio do formulário de contato/orçamento disponibilizado no site, consistindo em:</p>
            <BulletList items={[
              "Nome completo;",
              "Telefone / WhatsApp;",
              "Endereço eletrônico (e-mail);",
              "Razão Social;",
              "CNPJ;",
              "Conteúdo da mensagem enviada;",
              "Endereço IP, coletado automaticamente pelo servidor para fins de segurança.",
            ]} />
            <p>A Empresa não realiza coleta de cookies de rastreamento, ferramentas analíticas ou tecnologias de monitoramento comportamental.</p>
          </Section>

          <Section number="2" title="Da Finalidade do Tratamento">
            <p>Os dados pessoais coletados destinam-se exclusivamente às seguintes finalidades:</p>
            <BulletList items={[
              "Responder solicitações de orçamento;",
              "Elaborar e encaminhar propostas comerciais;",
              "Realizar atendimento ao cliente;",
              "Manter comunicação necessária à relação comercial iniciada por iniciativa do titular.",
            ]} />
            <p>Os dados não são utilizados para fins de marketing, publicidade ou envio de comunicações promocionais.</p>
          </Section>

          <Section number="3" title="Da Base Legal">
            <p>O tratamento dos dados pessoais fundamenta-se:</p>
            <BulletList items={[
              "No consentimento do titular, fornecido ao preencher e enviar o formulário;",
              "Na execução de procedimentos preliminares relacionados à solicitação de orçamento;",
              "No legítimo interesse da Empresa para atendimento da demanda apresentada.",
            ]} />
          </Section>

          <Section number="4" title="Do Compartilhamento de Dados">
            <p>A Empresa não compartilha, comercializa ou cede dados pessoais a terceiros, salvo quando houver obrigação legal ou determinação de autoridade competente.</p>
          </Section>

          <Section number="5" title="Do Armazenamento e Segurança">
            <p>Os dados pessoais são recebidos diretamente no e-mail corporativo da Empresa, sendo armazenados em ambiente protegido, com adoção de medidas técnicas e administrativas adequadas para garantir a confidencialidade, integridade e segurança das informações.</p>
            <p>A Empresa emprega boas práticas de segurança para prevenir acessos não autorizados, vazamentos, perda ou alteração indevida de dados.</p>
          </Section>

          <Section number="6" title="Dos Direitos do Titular">
            <p>Nos termos da LGPD, o titular dos dados poderá, a qualquer tempo e mediante requisição expressa:</p>
            <BulletList items={[
              "Confirmar a existência de tratamento;",
              "Solicitar acesso aos dados pessoais;",
              "Requerer correção de dados incompletos, inexatos ou desatualizados;",
              "Solicitar a exclusão de dados pessoais, quando aplicável.",
            ]} />
            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="font-medium text-foreground mb-1">As solicitações deverão ser encaminhadas para:</p>
              <p>📧 contato@wayescapamentos.com</p>
              <p>📞 (35) 3476-0000</p>
            </div>
          </Section>

          <Section number="7" title="Das Alterações">
            <p>A presente Política poderá ser modificada a qualquer tempo, para adequação à legislação vigente ou alterações operacionais, passando a vigorar a partir de sua publicação no site.</p>
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

export default PoliticaPrivacidade;
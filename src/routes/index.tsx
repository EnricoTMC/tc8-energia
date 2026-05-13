import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Clock, FileCheck, Building2, Factory, Zap, HardHat, Cog, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-electrical.jpg";
import panelImg from "@/assets/panel.jpg";
import spdaImg from "@/assets/spda.jpg";
import { services } from "@/lib/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TC8 Energia — Engenharia Elétrica B2B e Automação Industrial" },
      { name: "description", content: "Projetos elétricos industriais, automação e manutenção. Padrão técnico, emissão de ART e atendimento corporativo em São Paulo." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:py-32 items-center">
          <div className="flex flex-col justify-center relative z-10">

            <h1 className="font-display text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl text-foreground">
              Projetos elétricos e automação industrial para empresas <span className="text-gradient-electric">que não podem parar.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground/90">
              Instalações, manutenção, painéis elétricos, laudos e automação com padrão técnico rigoroso, foco em segurança e atendimento corporativo especializado.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5519974042973"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-gradient-electric px-8 py-4 font-bold text-primary-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(0,212,255,0.2)] transition-all hover:brightness-110"
              >
                Solicitar orçamento técnico <ArrowRight className="h-5 w-5" />
              </a>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 backdrop-blur-sm px-8 py-4 font-bold text-foreground transition-all hover:border-primary hover:bg-surface">
                Falar com especialista
              </Link>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full max-w-lg">
            {/* Cinematic depth wrapper */}
            <div className="absolute -inset-1 rounded-sm bg-gradient-electric opacity-30 blur-2xl" />
            <div className="absolute -inset-0.5 rounded-sm bg-gradient-electric opacity-50 blur-sm" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border shadow-2xl">
              <div className="absolute inset-0 bg-[#002B5B]/20 mix-blend-multiply z-10 pointer-events-none" />
              <img
                src={heroImg}
                alt="Engenharia elétrica industrial"
                className="h-full w-full object-cover scale-105"
              />
              {/* Technical overlay corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 m-4 opacity-70" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20 m-4 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="border-b border-border/40 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Certificações e Autoridade Técnica
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
            <div className="flex items-center gap-3"><Award className="h-8 w-8 text-primary" /><span className="font-display font-bold text-lg">CREA-SP</span></div>
            <div className="flex items-center gap-3"><FileCheck className="h-8 w-8 text-primary" /><span className="font-display font-bold text-lg">ART Oficial</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-primary" /><span className="font-display font-bold text-lg">NR-10</span></div>
            <div className="flex items-center gap-3"><Building2 className="h-8 w-8 text-primary" /><span className="font-display font-bold text-lg">Projetos B2B</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT / AUTHORITY SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Sobre a Empresa</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl text-foreground">
              Engenharia robusta focada em continuidade operacional.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>A TC8 Energia não oferece apenas serviços elétricos genéricos. Nós desenhamos, executamos e mantemos a infraestrutura crítica que mantém o seu negócio funcionando sem interrupções.</p>
              <p>Trabalhamos estritamente dentro das normativas vigentes, garantindo que toda a operação da sua indústria, comércio ou condomínio esteja protegida contra falhas e autuações, entregando um nível corporativo de excelência.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border/50 pt-8">
              <div>
                <h4 className="font-display text-4xl font-bold text-gradient-electric">100%</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">Conformidade Normativa</p>
              </div>
              <div>
                <h4 className="font-display text-4xl font-bold text-gradient-electric">Zero</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">Acidentes e Paradas</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={panelImg} alt="Painel Elétrico Industrial" className="rounded-sm aspect-square object-cover border border-border shadow-xl" />
            <img src={spdaImg} alt="Instalação SPDA" className="rounded-sm aspect-square object-cover border border-border shadow-xl mt-8" />
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURED SERVICE: PAINÉIS ELÉTRICOS */}
      <section className="border-y border-border/40 bg-[#0B0E14] relative overflow-hidden">
        {/* Subtle blueprint background specifically for this section */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/80 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 py-24 relative z-10">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Especialidade Premium</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl text-foreground drop-shadow-lg">
              Montagem de Painéis Elétricos
            </h2>
          </div>

          {/* Premium Service Card */}
          <div className="group relative overflow-hidden rounded-sm border border-border/50 bg-[#080A0F] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(0,43,91,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 min-h-[500px]">
              {/* Content Side */}
              <div className="relative p-8 lg:p-14 lg:col-span-7 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Projetos e montagem de painéis elétricos de comando, potência e automação industrial, desenvolvidos com organização técnica, proteção elétrica e confiabilidade operacional.
                </p>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  {[
                    'Painéis de comando',
                    'QGBT e distribuição',
                    'CCM',
                    'Automação industrial',
                    'Soft starters e inversores',
                    'Proteção e acionamento elétrico'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/90 tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <ShieldCheck className="h-5 w-5 text-primary opacity-80" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">NR-10</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Cog className="h-5 w-5 text-primary opacity-80" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Org. Técnica</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Award className="h-5 w-5 text-primary opacity-80" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certificados</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Zap className="h-5 w-5 text-primary opacity-80" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Segurança</span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative lg:col-span-5 overflow-hidden bg-black/50 h-64 lg:h-auto">
                <div className="absolute inset-0 bg-[#002B5B]/30 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-50" />
                
                {/* Engineering Accents */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-primary/30 z-20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:translate-y-2 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-primary/30 z-20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 pointer-events-none" />
                
                <img 
                  src={panelImg} 
                  alt="Montagem de Painéis Elétricos" 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
                
                {/* Overlay gradient from left for seamless blending on desktop */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#080A0F] to-transparent z-10" />
                <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080A0F] to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES GRID */}
      <section className="bg-surface/20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold">Mais Soluções Técnicas</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(1, 5).map((s) => (
              <div key={s.slug} className="group relative overflow-hidden rounded-sm border border-border bg-background p-6 transition-all hover:border-primary/30 hover:bg-surface/50">
                <s.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{s.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/servicos" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
              Ver portfólio completo de serviços <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WORKFLOW PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Metodologia Exata</span>
          <h2 className="mt-2 font-display text-3xl font-bold">Processo de Engenharia</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />
          
          {[
            { step: '01', title: 'Vistoria Técnica', desc: 'Análise in loco e levantamento de cargas estrutural.' },
            { step: '02', title: 'Projeto Base', desc: 'Engenharia, dimensionamento e orçamento analítico.' },
            { step: '03', title: 'Execução', desc: 'Instalação monitorada com equipe técnica certificada.' },
            { step: '04', title: 'Comissionamento', desc: 'Testes de carga, laudos (ART) e entrega final.' },
          ].map((w, i) => (
            <div key={w.step} className="relative z-10 bg-background pt-8 pb-4 px-4 border border-border rounded-sm shadow-card text-center group hover:border-primary/50 transition-colors">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                {w.step}
              </div>
              <h4 className="font-display font-bold text-lg mt-2">{w.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-y border-border/40 bg-surface/20">
        <div className="mx-auto max-w-4xl px-4 py-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Vocês emitem ART e laudos técnicos?</AccordionTrigger>
              <AccordionContent>Sim, somos registrados no CREA e emitimos ART (Anotação de Responsabilidade Técnica) para todos os projetos e execuções, além de laudos de SPDA, aterramento e instalações elétricas conformes com as normas NR-10 e NBR.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Atendem quais regiões do estado?</AccordionTrigger>
              <AccordionContent>Nossa sede operacional fica em São Paulo, mas possuímos capacidade logística e técnica para atender plantas industriais e grandes complexos corporativos em todo o estado de São Paulo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Realizam atendimento emergencial 24h?</AccordionTrigger>
              <AccordionContent>Oferecemos contratos de manutenção preventiva e corretiva com SLA definido para atendimento ágil, garantindo que paradas críticas sejam solucionadas no menor tempo possível.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-surface/90" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center z-10">
          <span className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6 ring-1 ring-primary/30 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <HardHat className="h-8 w-8" />
          </span>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Pronto para blindar a operação da sua planta?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Agende uma reunião técnica com nossos engenheiros e garanta que sua infraestrutura elétrica suporte o crescimento contínuo do seu negócio.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5519974042973" target="_blank" rel="noreferrer"
              className="rounded-md border border-primary/30 bg-gradient-electric px-8 py-4 font-bold text-primary-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all hover:brightness-110">
              Agendar Reunião Técnica
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

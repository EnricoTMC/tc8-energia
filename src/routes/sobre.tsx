import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Wrench, FileText, Users, Target } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a TC8 — Engenharia Elétrica e Responsabilidade Técnica" },
      { name: "description", content: "Conheça a TC8 Energia: experiência em instalações, manutenção, painéis, automação e sistemas de segurança." },
      { property: "og:title", content: "Sobre a TC8 Energia" },
      { property: "og:description", content: "Compromisso com qualidade, segurança e responsabilidade técnica." },
    ],
  }),
  component: Sobre,
});

const diferenciais = [
  { icon: ShieldCheck, title: "Atendimento técnico especializado", desc: "Equipe qualificada com foco em segurança e normas técnicas." },
  { icon: Wrench, title: "Experiência completa", desc: "Instalações elétricas, manutenção e montagem de painéis." },
  { icon: Users, title: "Soluções para múltiplos setores", desc: "Condomínios, comércios, empresas e indústrias." },
  { icon: Target, title: "Acabamento profissional", desc: "Organização, identificação e padrão técnico em cada obra." },
  { icon: FileText, title: "Relatórios técnicos", desc: "Documentação com registro fotográfico completo." },
  { icon: CheckCircle2, title: "Projetos sob medida", desc: "Cada cliente recebe uma solução personalizada." },
];

function Sobre() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre a TC8</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Engenharia elétrica com <span className="text-gradient-electric">compromisso técnico</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A TC8 Energia Serviço e Soluções LTDA-ME atua no desenvolvimento de soluções elétricas,
            manutenção, instalações, montagem de painéis, sistemas de alarme de incêndio, automação
            e adequações técnicas. Nosso compromisso é entregar serviços com qualidade, segurança,
            organização e responsabilidade técnica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Nossos diferenciais</h2>
        <p className="mt-2 text-muted-foreground">O que torna a TC8 a escolha certa para sua instalação elétrica.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => (
            <div key={d.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-bold">Atendemos sua empresa com responsabilidade técnica.</h2>
          <Link to="/contato" className="mt-6 inline-flex rounded-md bg-gradient-electric px-6 py-3 font-semibold text-primary-foreground shadow-glow">
            Falar com a TC8
          </Link>
        </div>
      </section>
    </>
  );
}

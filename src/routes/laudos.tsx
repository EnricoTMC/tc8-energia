import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck, Camera, ClipboardList, Search, ShieldAlert, FileText } from "lucide-react";

export const Route = createFileRoute("/laudos")({
  head: () => ({
    meta: [
      { title: "Laudos e Relatórios Técnicos — TC8 Energia" },
      { name: "description", content: "Pareceres técnicos, inspeções, relatórios de SPDA e manutenção elétrica com registro fotográfico." },
      { property: "og:title", content: "Laudos e Relatórios — TC8" },
      { property: "og:description", content: "Documentação técnica para adequação normativa e tomada de decisão." },
    ],
  }),
  component: Laudos,
});

const tipos = [
  { icon: FileCheck, title: "Parecer técnico elétrico", desc: "Análise técnica especializada das instalações." },
  { icon: Search, title: "Relatório de inspeção", desc: "Avaliação detalhada de quadros, circuitos e proteções." },
  { icon: ShieldAlert, title: "Relatório de SPDA", desc: "Inspeção de captores, descidas, aterramento e medições." },
  { icon: ClipboardList, title: "Relatório de manutenção", desc: "Histórico técnico das intervenções realizadas." },
  { icon: FileText, title: "Levantamento de não conformidades", desc: "Identificação de pontos críticos com base em normas." },
  { icon: Camera, title: "Registro fotográfico técnico", desc: "Recomendações de adequação documentadas com fotos." },
];

function Laudos() {
  return (
    <>
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Documentação Técnica</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Laudos, relatórios e <span className="text-gradient-electric">pareceres técnicos</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Documentos técnicos para auxiliar na tomada de decisão, adequação normativa e manutenção das instalações.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tipos.map((t) => (
            <div key={t.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-gradient-hero p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Precisa de um laudo técnico?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Solicite uma avaliação técnica profissional com registro fotográfico e recomendações de adequação.
          </p>
          <Link to="/contato" className="mt-6 inline-flex rounded-md bg-gradient-electric px-6 py-3 font-semibold text-primary-foreground shadow-glow">
            Solicitar avaliação
          </Link>
        </div>
      </section>
    </>
  );
}

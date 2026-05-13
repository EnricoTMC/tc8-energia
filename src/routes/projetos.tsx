import { createFileRoute } from "@tanstack/react-router";
import panel from "@/assets/panel.jpg";
import alarm from "@/assets/alarm.jpg";
import spda from "@/assets/spda.jpg";
import hero from "@/assets/hero-electrical.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos Realizados — TC8 Energia" },
      { name: "description", content: "Conheça obras, painéis e instalações executadas pela TC8 Energia." },
      { property: "og:title", content: "Projetos da TC8 Energia" },
      { property: "og:description", content: "Painéis, instalações industriais, SPDA e alarme de incêndio executados com padrão técnico." },
    ],
  }),
  component: Projetos,
});

const projetos = [
  { img: panel, title: "Painel de comando industrial", tag: "Painéis Elétricos", desc: "Montagem completa com identificação, organização e teste de continuidade." },
  { img: alarm, title: "Alarme de incêndio comercial", tag: "Segurança", desc: "Sistema endereçável instalado em edifício comercial com central, detectores e sirenes." },
  { img: spda, title: "SPDA industrial", tag: "Proteção Atmosférica", desc: "Adequação completa de captores, descidas e malha de aterramento." },
  { img: hero, title: "Manutenção em quadro elétrico", tag: "Manutenção", desc: "Inspeção termográfica, reaperto e substituição de proteções." },
  { img: panel, title: "Painel de bombas com inversor", tag: "Bombas e Motores", desc: "Acionamento por inversor de frequência com proteções completas." },
  { img: spda, title: "Adequação de aterramento", tag: "SPDA", desc: "Medição de resistência e adequação às normas técnicas vigentes." },
];

function Projetos() {
  return (
    <>
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Portfólio</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Projetos <span className="text-gradient-electric">realizados</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Obras, painéis e instalações entregues com padrão técnico TC8.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1200} height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

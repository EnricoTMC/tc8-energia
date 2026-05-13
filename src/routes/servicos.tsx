import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — TC8 Energia" },
      { name: "description", content: "Instalações, manutenção, painéis, automação, SPDA, alarme de incêndio, laudos e infraestrutura elétrica." },
      { property: "og:title", content: "Serviços TC8 Energia" },
      { property: "og:description", content: "Soluções elétricas completas para empresas, condomínios e indústrias." },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nossos Serviços</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Soluções elétricas <span className="text-gradient-electric">técnicas e completas</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Projetos, execução, manutenção e documentação técnica em um só lugar.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-lg bg-gradient-electric text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
              </div>

              <ul className="mt-5 grid flex-1 gap-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5511000000000?text=Olá! Gostaria de um orçamento para: ${encodeURIComponent(s.title)}`}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20"
              >
                Solicitar orçamento
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

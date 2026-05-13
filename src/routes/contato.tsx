import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Orçamento — TC8 Energia" },
      { name: "description", content: "Solicite orçamento, agende visita técnica ou fale com um especialista da TC8 Energia." },
      { property: "og:title", content: "Contato — TC8 Energia" },
      { property: "og:description", content: "WhatsApp, telefone, e-mail e formulário de orçamento." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const text = `Olá! Solicitação de orçamento:%0A%0A*Nome:* ${data.get("nome")}%0A*Telefone:* ${data.get("telefone")}%0A*Empresa:* ${data.get("empresa")}%0A*Serviço:* ${data.get("servico")}%0A*Mensagem:* ${data.get("mensagem")}`;
    window.open(`https://wa.me/5519974042973?text=${text}`, "_blank");
    setSent(true);
    form.reset();
  }

  return (
    <>
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Fale conosco</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Solicite seu <span className="text-gradient-electric">orçamento</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Atendimento rápido para empresas, condomínios, comércios e indústrias.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-5 lg:col-span-2">
            <a href="https://wa.me/5519974042973" target="_blank" rel="noreferrer"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/60">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-gradient-electric text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="font-display text-lg font-semibold">(19) 97404-2973</p>
                <p className="text-sm text-muted-foreground">Atendimento rápido e direto</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</p>
                <p className="font-display text-lg font-semibold">(19) 97404-2973</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <p className="font-display text-lg font-semibold">tafanes@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Região de atendimento</p>
                <p className="font-display text-lg font-semibold">São Paulo</p>
                <p className="text-sm text-muted-foreground">Atendemos todo o estado</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Horário</p>
                <p className="font-display text-lg font-semibold">Das 8 as 17hs de Segunda a Sexta</p>
                <p className="text-sm text-muted-foreground">Atendimento emergencial sob consulta</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-7 shadow-card lg:col-span-3">
            <h2 className="font-display text-2xl font-bold">Envie sua solicitação</h2>
            <p className="text-sm text-muted-foreground">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>

            <div className="grid gap-4 md:grid-cols-2">
              <Field name="nome" label="Nome completo" required />
              <Field name="telefone" label="Telefone / WhatsApp" required />
              <Field name="empresa" label="Empresa / Condomínio" />
              <Field name="servico" label="Serviço de interesse" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Mensagem</label>
              <textarea
                name="mensagem"
                rows={4}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>

            <button type="submit" className="w-full rounded-md bg-gradient-electric px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]">
              Enviar via WhatsApp
            </button>

            {sent && (
              <p className="text-center text-sm text-primary">Abrindo WhatsApp com sua solicitação...</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        name={name}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

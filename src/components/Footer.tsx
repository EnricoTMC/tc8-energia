import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Award, ShieldCheck } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 blueprint-overlay pointer-events-none" />
      
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <img src={logoImg} alt="TC8 Energia" className="h-24 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Engenharia elétrica aplicada à segurança, eficiência e continuidade operacional da sua empresa. Projetos, laudos e instalações de alta complexidade.
          </p>
          <div className="space-y-2 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>CNPJ: 29.728.271/0001-40</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>CREA-SP: 123456789-0</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Institucional</h4>
          <ul className="space-y-3 text-sm font-medium text-muted-foreground">
            <li><Link to="/" className="transition-colors hover:text-primary">Início</Link></li>
            <li><Link to="/sobre" className="transition-colors hover:text-primary">Sobre a Empresa</Link></li>
            <li><Link to="/projetos" className="transition-colors hover:text-primary">Casos de Sucesso</Link></li>
            <li><Link to="/contato" className="transition-colors hover:text-primary">Trabalhe Conosco</Link></li>
            <li><Link to="/contato" className="transition-colors hover:text-primary">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Serviços</h4>
          <ul className="space-y-3 text-sm font-medium text-muted-foreground">
            <li><Link to="/servicos" className="transition-colors hover:text-primary">Instalações Elétricas</Link></li>
            <li><Link to="/servicos" className="transition-colors hover:text-primary">Montagem de Painéis</Link></li>
            <li><Link to="/servicos" className="transition-colors hover:text-primary">Sistemas SPDA</Link></li>
            <li><Link to="/laudos" className="transition-colors hover:text-primary">Laudos Técnicos</Link></li>
            <li><Link to="/servicos" className="transition-colors hover:text-primary">Automação Industrial</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Contato & Atendimento</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary" />
              <span className="leading-relaxed">São Paulo, SP<br/>Atendimento em todo o estado</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-none text-primary" />
              <a href="tel:+5519974042973" className="transition-colors hover:text-primary">(19) 97404-2973</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-none text-primary" />
              <a href="mailto:tafanes@gmail.com" className="transition-colors hover:text-primary">tafanes@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-none text-primary" />
              <span className="leading-relaxed">Seg a Sex: 08:00 - 17:00<br/>Plantão emergencial sob consulta</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Bottom bar */}
      <div className="relative border-t border-border/60 bg-surface/50 px-4 py-6 text-center text-xs font-medium text-muted-foreground backdrop-blur-sm">
        {new Date().getFullYear()} · TC8 Energia Serviço e Soluções · Todos os direitos reservados.
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  servicos: [
    { href: "/#servicos", label: "Esquadrias de alumínio" },
    { href: "/#servicos", label: "Vidros temperados" },
    { href: "/#servicos", label: "Fachadas" },
    { href: "/#servicos", label: "Portas e janelas" },
    { href: "/#servicos", label: "Portões" },
    { href: "/#servicos", label: "Brises" },
  ],
  empresa: [
    { href: "/#equipe", label: "Quem somos" },
    { href: "/#obras", label: "Obras" },
    { href: "/#servicos", label: "Tipos de vidro" },
    { href: "/#servicos", label: "Linhas de esquadrias" },
    { href: "/#servicos", label: "Tipos de pintura" },
  ],
  contato: [
    { href: "tel:+5561982153370", label: "(61) 98215-3370" },
    { href: "mailto:contato@estruturalesquadriasdf.com.br", label: "contato@estruturalesquadriasdf.com.br" },
    { href: "/#showroom", label: "SIA Center Mall, Loja 34" },
  ],
};

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden bg-primary text-white" role="contentinfo">
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-flex rounded-xl bg-white p-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" aria-label="Estrutural Esquadrias - Página inicial">
              <Image src="/estrutural-logo.png" alt="Estrutural Esquadrias" width={168} height={46} className="h-[46px] w-[168px] object-contain" />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/70">
              Fábrica própria de esquadrias de alumínio, vidros temperados e fachadas. Showroom no SIA Center Mall. Atendimento em Brasília e DF desde 2017.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-white">Serviços</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-white">Empresa</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 font-heading text-sm font-semibold text-white">Contato</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contato.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 rounded text-sm break-words text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/20 py-6 text-left md:flex-row">
          <p className="text-sm text-white/60">
            © {currentYear} Estrutural Esquadrias. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Privacidade</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
      <p aria-hidden="true" className="pointer-events-none -mb-2 whitespace-nowrap font-heading text-[clamp(64px,14.2vw,204px)] font-semibold leading-[0.82] tracking-[-0.05em] text-white/[0.045]">ESTRUTURAL</p>
    </footer>
  );
}

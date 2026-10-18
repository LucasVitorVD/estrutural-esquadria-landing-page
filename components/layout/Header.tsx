"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Phone,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Magnet from "@/components/Magnet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  { href: "/#inicio", label: "Início" },
  { href: "/#servicos", label: "Soluções" },
  { href: "/#obras", label: "Obras" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#showroom", label: "Showroom" },
];

const phoneNumber = "(61) 98215-3370";
const phoneLink = "tel:+5561982153370";
const whatsappLink = "https://wa.me/5561982153370?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor.";
const mobileServiceItems = [
  "Esquadrias de alumínio",
  "Vidros temperados",
  "Fachadas pele de vidro e ACM",
  "Portas e janelas",
  "Portões",
  "Brises",
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const isSolid = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hash = href.split("#")[1];
    const target = hash ? document.getElementById(hash) : null;

    // Keep normal Next.js navigation when the link is opened from another page.
    if (window.location.pathname !== "/" || !target) {
      setIsMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", href);

    const headerOffset = window.matchMedia("(min-width: 768px)").matches
      ? 82
      : 68;
    const targetY = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - headerOffset,
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      return;
    }

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 1.15,
      ease: "power3.inOut",
      overwrite: "auto",
      scrollTo: { y: targetY, autoKill: true },
    });
  };

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);

      const marker = window.scrollY + window.innerHeight * 0.4;
      let currentHref = navItems[0].href;

      for (const item of navItems) {
        const section = document.getElementById(item.href.split("#")[1]);
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= marker
        ) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  const navLinkClass = (href: string) =>
    `relative rounded-full px-4 py-2.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 lg:px-2 lg:after:left-2 lg:after:right-2 xl:px-4 xl:after:left-4 xl:after:right-4 ${
      activeHref === href
        ? `font-semibold after:scale-x-100 ${isSolid ? "text-foreground after:bg-primary" : "text-white after:bg-white"}`
        : isSolid
          ? "font-medium text-foreground/75 after:bg-primary hover:text-foreground"
          : "font-medium text-white/80 after:bg-white hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isSolid
          ? "border-b border-border bg-background shadow-sm"
          : "border-0 bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <nav className="w-full px-4 md:px-8" aria-label="Navegação principal">
        <div className="relative flex min-h-[68px] items-center justify-between gap-4 md:min-h-[82px]">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Estrutural Esquadrias - Página inicial"
          >
            <Image src="/estrutural-logo.png" alt="Estrutural Esquadrias" width={299} height={82} loading="eager" className={`h-[36px] w-auto transition-[filter] duration-300 md:h-[46px] ${isSolid ? "" : "brightness-0 invert"}`} />
          </Link>

          <div className={`hidden items-center gap-1 rounded-full p-1.5 backdrop-blur-sm md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 ${isSolid ? "bg-muted" : "bg-black/20"}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={navLinkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phoneLink}
              className={`flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSolid ? "text-foreground/80" : "text-white/90 hover:text-white"}`}
              aria-label={`Ligar para ${phoneNumber}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">{phoneNumber}</span>
            </a>
            <Magnet padding={28} magnetStrength={5} maxOffset={4} scale={1.02}>
              <Button
                nativeButton={false}
                render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com um consultor no WhatsApp" />}
                className="h-[50px] rounded-full bg-action px-5 text-[15px] font-semibold text-white shadow-none transition-colors hover:bg-[#c51f28]"
              >
                <MessageSquare className="h-[18px] w-[18px]" aria-hidden="true" />
                <span>Falar com um consultor</span>
              </Button>
            </Magnet>
          </div>

          <button
            className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden ${isSolid ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/15"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          aria-hidden={!isMobileMenuOpen}
          className={`fixed inset-x-0 bottom-0 top-[68px] z-40 flex flex-col bg-background px-5 pb-[max(12px,env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-200 md:hidden ${
            isMobileMenuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="border-t border-border">
                <Link
                  href="/#inicio"
                  onClick={(event) => handleNavClick(event, "/#inicio")}
                  className="flex h-[62px] items-center justify-between border-b border-border text-[15px] font-medium text-foreground"
                >
                  Início
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="servicos"
                  className="border-b border-border"
                >
                  <AccordionItem value="servicos" className="border-0">
                    <AccordionTrigger
                      showIndicator={false}
                      className="h-[62px] items-center p-0 font-sans text-[15px] font-medium text-foreground no-underline hover:no-underline"
                    >
                      Serviços
                      <span className="ml-auto grid h-8 w-8 shrink-0 place-items-center">
                        <ChevronDown className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" aria-hidden="true" />
                        <ChevronUp className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:block" aria-hidden="true" />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 pb-4 text-[10px] leading-[1.25] text-muted-foreground [&_a]:no-underline [&_a:hover]:no-underline [&_a:focus-visible]:no-underline">
                      {mobileServiceItems.map((service) => (
                        <Link
                          key={service}
                          href="/#servicos"
                          onClick={(event) =>
                            handleNavClick(event, "/#servicos")
                          }
                          className="w-fit py-1 text-xl no-underline"
                        >
                          {service}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {[
                  { href: "/#obras", label: "Obras" },
                  { href: "/#equipe", label: "Quem somos" },
                  { href: "/#showroom", label: "Contato" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="flex h-[62px] items-center justify-between border-b border-border text-[15px] font-medium text-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="shrink-0 border-t border-border pt-4">
              <a
                href="/#showroom"
                onClick={(event) => handleNavClick(event, "/#showroom")}
                className="mb-3 flex items-start gap-2 text-[10px] leading-[1.35] text-muted-foreground"
              >
                <MapPin className="mt-px h-3 w-3 shrink-0" aria-hidden="true" />
                <span className="max-w-[300px]">
                  Showroom no SIA Center Mall, Loja 34. Seg. a sex., 8h às 17h30.
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-action px-6 text-sm font-semibold text-white transition-colors hover:bg-[#c51f28]"
              >
                <MessageSquare className="h-[18px] w-[18px]" aria-hidden="true" />
                Falar com um consultor
              </a>
              <a
                href={phoneLink}
                className="inline-flex h-[49px] w-full items-center justify-center gap-2 rounded-full border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ligar {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

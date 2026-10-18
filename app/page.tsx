import { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Magnet from "@/components/Magnet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CountUp from "@/components/CountUp";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { LocationSection } from "@/components/LocationSection";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import ScrollExpand from "@/components/ScrollExpand";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import AnimatedContent from "@/components/AnimatedContent";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Esquadrias de Alumínio, Vidros e Fachadas em Brasília",
  description:
    "Fábrica própria de esquadrias de alumínio, vidros temperados, fachadas pele de vidro e ACM. Showroom no SIA Center Mall. Atendimento em Brasília e DF desde 2017.",
};

const whatsappLink =
  "https://wa.me/5561982153370?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor.";
const showroomMapLink =
  "https://www.google.com/maps/search/?api=1&query=Shopping+SIA+Center+Mall+Loja+34+Brasilia+DF";
const image = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const tickerItems = [
  "Pronta entrega",
  "Janelas de correr",
  "Portas de alumínio",
  "Vidros temperados",
];
const heroStats = [
  { value: 850, prefix: "+", suffix: "", caption: "Obras entregues no DF" },
  {
    value: 120,
    prefix: "+",
    suffix: "",
    caption: "Construtoras e arquitetos atendidos",
  },
  {
    value: 15,
    prefix: "",
    suffix: " dias",
    caption: "Prazo médio de fabricação",
  },
  {
    value: 9,
    prefix: "",
    suffix: " anos",
    caption: "Fabricando no DF desde 2017",
  },
];
const consultants = [
  {
    name: "André Lima",
    role: "Consultor comercial",
    specialties: ["Esquadrias", "Portões"],
    photo: "photo-1713946598186-8e28275719b9",
    alt: "Retrato ilustrativo de André Lima",
  },
  {
    name: "Marina Costa",
    role: "Consultora comercial",
    specialties: ["Vidros", "Boxes"],
    photo: "photo-1607746882042-944635dfe10e",
    alt: "Retrato ilustrativo de Marina Costa",
  },
  {
    name: "Rafael Souza",
    role: "Consultor comercial",
    specialties: ["Fachadas", "Obras comerciais"],
    photo: "photo-1655801856579-be4f3402eea4",
    alt: "Retrato ilustrativo de Rafael Souza",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <style>{`@keyframes ticker-scroll{from{transform:translateX(0)}to{transform:translateX(-25%)}}@keyframes ticker-highlight{0%,24.99%{color:var(--primary)}25%,100%{color:color-mix(in srgb,var(--foreground) 55%,transparent)}}@keyframes hero-stats-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}.ticker-track{animation:ticker-scroll 34s linear infinite}.ticker-label{animation:ticker-highlight 34s linear infinite}.hero-stats-track{animation:hero-stats-scroll 28s linear infinite}.hero-stats-marquee:hover .hero-stats-track{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.ticker-track,.ticker-label,.hero-stats-track{animation:none!important}.hero-stats-copy[aria-hidden=true]{display:none}}`}</style>
        {/* E02 — Hero */}
        <section
          id="inicio"
          className="bg-background px-0 pb-0"
          aria-labelledby="hero-title"
        >
          <div className="relative flex h-[100svh] w-full flex-col justify-end overflow-hidden px-5 pb-7 pt-6 md:px-16 md:pb-12 md:pt-24">
            <video
              aria-label="Vídeo de fachada contemporânea com esquadrias"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={image("photo-1532888277436-2286814f0ee1", 1920)}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/video-hero-estrutural-esquadria.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0F2C4000] via-[#0F2C4066] to-[#0F2C40F2]"
              aria-hidden="true"
            />
            <div className="relative z-10 w-full">
              <AnimatedContent
                trigger="mount"
                distance={28}
                duration={0.9}
                ease="power3.out"
                blur={1.5}
                stagger={0.16}
                className="flex flex-col gap-[18px] md:gap-12 lg:flex-row lg:items-end lg:justify-between"
              >
                <h1
                  id="hero-title"
                  className="text-balance font-heading text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-white md:text-6xl lg:text-[80px]"
                >
                  Sem improviso, sem retrabalho e sem surpresa na obra.
                </h1>
                <div className="flex w-full flex-col gap-[18px] md:max-w-[430px] md:gap-7 lg:shrink-0">
                  <p className="text-[15px] leading-[1.5] text-white/85 md:text-lg md:leading-[1.55]">
                    Projetamos, fabricamos e instalamos esquadrias, vidros
                    temperados e fachadas em Brasília e no DF.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-2">
                    <Magnet
                      padding={28}
                      magnetStrength={5}
                      maxOffset={4}
                      scale={1.02}
                    >
                      <Button
                        nativeButton={false}
                        render={
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        className="h-[52px] shrink-0 rounded-full bg-action px-[26px] text-base font-semibold text-white shadow-none hover:bg-[#c51f28]"
                      >
                        <MessageSquare size={18} aria-hidden="true" />
                        Falar com um consultor
                      </Button>
                    </Magnet>
                    <a
                      href="#showroom"
                      className="inline-flex h-[52px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-[22px] text-base font-semibold text-foreground transition-colors hover:bg-white/90"
                    >
                      Visitar o showroom
                    </a>
                  </div>
                </div>
              </AnimatedContent>
              <div className="mt-[18px] border-t border-white/25 pt-4 md:mt-12 md:pt-8">
                <div
                  className="hero-stats-marquee overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden"
                  role="region"
                  aria-label="Estrutural em números e diferenciais"
                >
                  <div className="hero-stats-track flex w-max">
                    {[false, true].map((isCopy) => (
                      <div
                        key={String(isCopy)}
                        aria-hidden={isCopy || undefined}
                        className="hero-stats-copy flex shrink-0 items-start gap-8 pr-8"
                      >
                        {heroStats.map(
                          ({ value, prefix, suffix, caption }, index) => (
                            <div
                              key={`${value}-${suffix}`}
                              className="w-[205px] shrink-0"
                            >
                              <p className="leading-[1.1] text-white">
                                <CountUp
                                  to={value}
                                  from={0}
                                  prefix={prefix}
                                  suffix={suffix}
                                  delay={index * 0.28}
                                  duration={3.2}
                                  mode="roll"
                                  easing="spring"
                                  className="inline-block font-heading text-[26px] font-medium tracking-[-0.02em] tabular-nums"
                                />
                              </p>
                              <p className="mt-1.5 max-w-[200px] text-xs leading-normal text-white/70">
                                {caption}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-0"
                  aria-label="Estrutural em números e diferenciais"
                >
                  {heroStats.map(
                    ({ value, prefix, suffix, caption }, index) => (
                      <div key={`${value}-${suffix}`}>
                        <p className="leading-[1.1] text-white">
                          <CountUp
                            to={value}
                            from={0}
                            prefix={prefix}
                            suffix={suffix}
                            delay={index * 0.28}
                            duration={3.2}
                            mode="roll"
                            easing="spring"
                            className="inline-block font-heading text-[26px] font-medium tracking-[-0.02em] tabular-nums md:text-[44px]"
                          />
                        </p>
                        <p className="mt-1.5 max-w-[240px] text-xs leading-normal text-white/70 md:text-[15px]">
                          {caption}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E03 — faixa de pronta entrega */}
        <section
          className="overflow-hidden bg-background py-5 md:py-7"
          aria-label="Itens a pronta entrega"
        >
          <p className="sr-only">
            Pronta entrega. Janelas de correr. Portas de alumínio. Vidros
            temperados.
          </p>
          <div
            className="ticker-track flex w-max items-center"
            aria-hidden="true"
          >
            {[0, 1, 2, 3].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-10 pr-10"
              >
                {tickerItems.map((label, index) => (
                  <div
                    key={`${copy}-${label}`}
                    className="flex shrink-0 items-center gap-10"
                  >
                    <span
                      className={`ticker-label whitespace-nowrap font-heading text-[26px] font-medium leading-none tracking-[-0.02em] md:text-[34px] ${index === 0 ? "text-primary" : "text-foreground/55"}`}
                      style={{ animationDelay: `${index * 8.5}s` }}
                    >
                      {label}
                    </span>
                    <span className="h-2.5 w-2.5 shrink-0 rotate-45 rounded-[2px] bg-action" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* E03.1 — públicos */}
        <section
          className="bg-background pb-[120px] pt-24"
          aria-labelledby="para-quem-title"
        >
          <div className="container-custom">
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-action">
                  Soluções sob medida
                </p>
                <h2
                  id="para-quem-title"
                  className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] lg:text-[56px]"
                >
                  Para quem fazemos
                </h2>
              </div>
              <p className="hidden max-w-[380px] text-[17px] leading-relaxed text-muted-foreground md:block">
                Atendemos obras residenciais e comerciais no DF e entorno.
              </p>
            </div>
            <AnimatedContent
              className="grid gap-4 md:grid-cols-3"
              distance={24}
              duration={0.75}
              ease="power2.out"
              blur={1}
              stagger={0.12}
              threshold={0.12}
            >
              {[
                {
                  n: "01",
                  title: "Construtoras",
                  text: "Esquadrias e fachadas para obras residenciais e comerciais, com fabricação e instalação no cronograma da obra.",
                  tags: ["Fachadas", "Esquadrias"],
                  photo: "photo-1645640505436-d3a7afdecb12",
                },
                {
                  n: "02",
                  title: "Arquitetos e engenheiros",
                  text: "Linhas, vidros e acabamentos definidos junto com o projeto, com apoio técnico desde o detalhamento.",
                  tags: ["Detalhamento", "Amostras"],
                  photo: "photo-1568057373106-63057e421d1c",
                },
                {
                  n: "03",
                  title: "Proprietários",
                  text: "Atendimento no showroom, medição na obra e instalação feita pela nossa equipe.",
                  tags: ["Casas", "Reformas"],
                  photo: "photo-1628746041549-37fb45bd2c96",
                },
              ].map((item) => (
                <article
                  key={item.n}
                  className="overflow-hidden rounded-3xl bg-gradient-to-b from-primary to-[#0A1824] text-white"
                >
                  <Image
                    src={image(item.photo, 1000)}
                    alt="Imagem ilustrativa de arquitetura"
                    width={1000}
                    height={560}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-[220px] w-full object-cover"
                  />
                  <div className="flex min-h-[250px] flex-col items-start p-8">
                    <span className="mb-4 text-[15px] font-semibold text-[#A9B4BE]">
                      {item.n}
                    </span>
                    <h3 className="mb-3 font-heading text-[30px] font-medium leading-tight tracking-[-0.015em]">
                      {item.title}
                    </h3>
                    <p className="mb-5 text-base leading-[1.55] text-white/70">
                      {item.text}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </AnimatedContent>
          </div>
        </section>

        {/* E04 — serviços */}
        <ServicesShowcase />

        {/* E11 — CTA final */}
        <section
          id="cta-visite"
          aria-labelledby="cta-final-title"
          className="relative w-full"
        >
          <ScrollExpand
            src="/showroom-estrutural-esquadria.mp4"
            mobileSrc="/showroom-estrutural-esquadria-vertical.mp4"
            mediaType="video"
            alt=""
            startWidth={40}
            startHeight={44}
            endWidth={100}
            endHeight={100}
            mobileStartWidth={86}
            mobileStartHeight={40}
            mobileEndWidth={100}
            mobileEndHeight={100}
            startRadius={0}
            endRadius={0}
            mediaZoom={1.2}
            scrollDistance={0.8}
            holdDistance={0.15}
            smoothing={0.12}
            overlayScrim={0.72}
            useWindowScroll
            className="w-full scroll-expand--cta"
          >
            <div className="grid h-full w-full grid-cols-1 gap-6 text-foreground lg:grid-cols-2 lg:gap-10">
              <h2
                id="cta-final-title"
                className="max-w-[300px] font-heading text-4xl font-medium leading-[1.05] tracking-[-0.035em] lg:text-[clamp(2.5rem,3.6vw,3.75rem)]"
              >
                Venha ver de perto.
              </h2>
              <div className="flex max-w-[320px] flex-col items-start gap-3 lg:ml-auto lg:items-end lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Endereço
                </p>
                <p className="max-w-[300px] text-base leading-relaxed text-foreground lg:text-lg">
                  SIA Trecho 3/4, Loja 34, Shopping SIA Center Mall, Brasília-DF
                </p>
                <InteractiveHoverButton
                  href={showroomMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showroom-interactive border-primary bg-transparent text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Showroom
                </InteractiveHoverButton>
              </div>
            </div>
          </ScrollExpand>
        </section>

        {/* E06 — obras (aguardando acervo verdadeiro) */}
        <section
          id="obras"
          className="overflow-x-clip pb-[120px] pt-[72px]"
          aria-labelledby="obras-title"
        >
          <div className="container-custom">
            <AnimatedContent
              className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5"
              distance={18}
              duration={0.65}
              ease="power2.out"
              threshold={0.12}
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-action">
                  Portfólio
                </p>
                <h2
                  id="obras-title"
                  className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] lg:text-[56px]"
                >
                  Obras recentes
                </h2>
              </div>
              <a
                href="/obras"
                className="mb-2 inline-flex items-center gap-2 self-end whitespace-nowrap text-base font-semibold text-foreground transition-colors hover:text-primary sm:self-auto"
              >
                Ver todas as obras <ArrowRight size={18} />
              </a>
            </AnimatedContent>
            <ScrollStack
              className="works-scroll-stack"
              useWindowScroll
              itemDistance={90}
              itemStackDistance={24}
              stackPosition="12%"
              itemScale={0.025}
              baseScale={0.94}
              dimAmount={0.14}
              blurAmount={0}
              smoothScroll={false}
            >
              {[
                {
                  category: "Esquadrias",
                  title: "Fachada com grandes vãos envidraçados",
                  description:
                    "Perfis escuros contornam portas e janelas de vidro, conectando os ambientes internos ao jardim.",
                  src: "/obras-recentes/obra-1.jpg",
                  alt: "Fachada residencial clara com esquadrias escuras e painéis ripados amadeirados",
                },
                {
                  category: "Entrada residencial",
                  title: "Acesso marcado pelo painel ripado",
                  description:
                    "O acabamento vertical em tom amadeirado destaca a entrada e cria privacidade sob a cobertura.",
                  src: "/obras-recentes/obra-2.jpg",
                  alt: "Entrada residencial com painel ripado amadeirado, número 19 e parede de pedra",
                },
                {
                  category: "Vidros",
                  title: "Box de vidro em banheiro contemporâneo",
                  description:
                    "Painéis transparentes delimitam a área de banho sem interromper a leitura leve dos revestimentos.",
                  src: "/obras-recentes/obra-3.jpg",
                  alt: "Banheiro contemporâneo com box de vidro transparente e banheira branca",
                },
                {
                  category: "Área de lazer",
                  title: "Integração entre casa, varanda e piscina",
                  description:
                    "A abertura envidraçada aproxima os ambientes internos da varanda e mantém a vista para o jardim.",
                  src: "/obras-recentes/obra-4.jpg",
                  alt: "Residência contemporânea com varanda coberta, esquadria envidraçada e piscina",
                },
              ].map((card) => (
                <ScrollStackItem
                  key={card.src}
                  itemClassName="overflow-hidden"
                  style={{
                    height: "660px",
                    padding: 0,
                    borderRadius: "28px",
                    backgroundColor: "#0F2C40",
                    color: "#FFFFFF",
                  }}
                >
                  <article className="absolute inset-0 overflow-hidden rounded-[28px]">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A182400] to-[#0A1824E6]" />
                    <div className="absolute inset-x-7 bottom-7 text-white md:inset-x-11 md:bottom-11">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-medium">
                          {card.category}
                        </span>
                      </div>
                      <h3 className="max-w-[760px] font-heading text-3xl font-medium leading-tight md:text-[40px]">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-[620px] text-base leading-relaxed text-white/75">
                        {card.description}
                      </p>
                    </div>
                  </article>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        {/* E07 — diferenciais */}
        <ProcessTimeline />

        {/* E08 — equipe */}
        <section
          id="equipe"
          className="py-15 md:py-[120px]"
          aria-labelledby="equipe-title"
        >
          <div className="container-custom">
            <div className="mx-auto max-w-[900px] text-center">
              <h2
                id="equipe-title"
                className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] lg:text-[56px]"
              >
                Quem vai atender você
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[17px] leading-relaxed text-muted-foreground">
                Conheça os consultores que podem ajudar com esquadrias, vidros e
                fachadas para a sua obra.
              </p>
            </div>
            <AnimatedContent
              className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              distance={24}
              duration={0.75}
              ease="power2.out"
              blur={1}
              stagger={0.12}
              threshold={0.12}
            >
              {consultants.map((consultant) => (
                <article
                  key={consultant.name}
                  className="flex flex-col gap-5 rounded-[28px] border border-border bg-white p-3 shadow-[0_12px_32px_rgba(15,44,64,0.06)]"
                >
                  <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[340px]">
                    <Image
                      src={image(consultant.photo, 1080)}
                      alt={consultant.alt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2.5 pb-2.5">
                    <h3 className="font-heading text-2xl font-medium tracking-[-0.02em] text-foreground">
                      {consultant.name}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      {consultant.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {consultant.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-muted px-3 py-1.5 text-[13px] text-foreground"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Entrar em contato
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </AnimatedContent>
          </div>
        </section>

        {/* E09 — depoimentos de clientes */}
        <section
          className="overflow-hidden bg-[#EAF2F8] py-[120px]"
          aria-labelledby="depoimentos-title"
        >
          <div className="container-custom">
            <Carousel
              opts={{ align: "start", loop: true }}
              aria-label="Depoimentos de clientes da Estrutural Esquadrias"
              className="mx-auto max-w-[980px]"
            >
              <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-action">
                  Depoimentos
                </p>
                <h2
                  id="depoimentos-title"
                  className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-foreground lg:text-[56px]"
                >
                  O que dizem nossos clientes
                </h2>
              </div>
              <div className="flex gap-3 sm:mb-1">
                <CarouselPrevious
                  variant="ghost"
                  size="icon"
                  aria-label="Depoimento anterior"
                  className="static h-[48px] w-[48px] translate-y-0 border-0 bg-white text-foreground hover:bg-white/70"
                />
                <CarouselNext
                  variant="default"
                  size="icon"
                  aria-label="Próximo depoimento"
                  className="static h-[48px] w-[48px] translate-y-0 bg-primary text-white hover:bg-primary/90"
                />
              </div>
              </div>
              <CarouselContent className="-ml-0">
                {[
                  {
                    quote:
                      "Compro na Estrutural Esquadras a anos, sempre satisfeita pelo atendimento e pronta entrega, super indico essa empresa, muito profissionalismo.",
                    name: "Andressa Lima",
                  },
                  {
                    quote:
                      "É sensacional o atendimento e qualidade dos produtos oferecidos pela Estrutural Esquadrias, por ser a maior do Centro Oeste, possui um grande estoque e variedade de produtos. Seguimos nossa parceria",
                    name: "Guilherme Fiuza",
                  },
                ].map((testimonial) => (
                  <CarouselItem key={testimonial.name} className="pl-0">
                    <figure className="flex min-h-[300px] flex-col justify-between rounded-[28px] bg-white p-7 shadow-sm sm:min-h-[340px] sm:p-12">
                      <blockquote className="font-heading text-xl leading-[1.55] tracking-[-0.015em] text-foreground sm:text-[28px] sm:leading-[1.5]">
                        “{testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                        <span
                          aria-hidden="true"
                          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                        >
                          {testimonial.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>
                        <span className="font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* E10 — localização */}
        <LocationSection />

        {/* E10.1 — FAQ */}
        <section
          className="bg-background pb-[120px]"
          aria-labelledby="faq-title"
        >
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-24">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-action">
                  Dúvidas comuns
                </p>
                <h2
                  id="faq-title"
                  className="mb-5 font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] lg:text-[56px]"
                >
                  Perguntas frequentes
                </h2>
                <p className="max-w-[360px] text-[17px] leading-relaxed text-muted-foreground">
                  Precisa de mais informações? Converse diretamente com a nossa
                  equipe.
                </p>
              </div>
              <AnimatedContent
                distance={16}
                duration={0.65}
                ease="power2.out"
                stagger={0.08}
                threshold={0.12}
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="faq-1"
                  className="border-t border-border"
                >
                  {[
                    [
                      "Vocês fazem orçamento pelo site?",
                      "O atendimento começa com uma conversa com a equipe e, quando necessário, visita técnica para entender o projeto.",
                    ],
                    [
                      "Atendem fora de Brasília?",
                      "Atendemos Brasília, o Distrito Federal e região. Consulte a equipe sobre outras localidades.",
                    ],
                    [
                      "Qual o prazo de fabricação e instalação?",
                      "O prazo depende das especificações de cada projeto. Converse com a equipe para receber uma previsão.",
                    ],
                    [
                      "Há produtos a pronta entrega?",
                      "Consulte a disponibilidade de janelas de correr, portas de alumínio e vidros temperados.",
                    ],
                    [
                      "Posso visitar a fábrica?",
                      "Converse com a equipe para receber informações sobre visitas e atendimento.",
                    ],
                  ].map(([question, answer], i) => (
                    <AccordionItem
                      key={question}
                      value={`faq-${i + 1}`}
                      className="border-b border-border py-[26px]"
                    >
                      <AccordionTrigger className="items-center gap-5 p-0 text-base font-medium text-foreground hover:no-underline">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="max-w-xl pr-12 pt-4 text-sm leading-relaxed text-muted-foreground">
                        <p>{answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedContent>
            </div>
          </div>
        </section>

        <section
          id="cta-intermediario"
          className="pb-20 md:py-[120px]"
          aria-labelledby="cta-intermediario-title"
        >
          <div className="container-custom">
            <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
              <div className="mb-7 flex flex-col items-center justify-center gap-3 md:flex-row">
                <AvatarCircles
                  numPeople={3}
                  className="justify-center"
                  avatarUrls={[
                    {
                      imageUrl:
                        "https://avatars.githubusercontent.com/u/16860528",
                      profileUrl: "https://github.com/dillionverma",
                    },
                  ]}
                />
                <p className="text-xs font-semibold uppercase text-action">
                  Atendimento de segunda a sexta, das 8h às 17h30
                </p>
              </div>
              <h2
                id="cta-intermediario-title"
                className="max-w-[860px] font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] lg:text-[56px]"
              >
                Mande as medidas pra gente. Cuidamos do resto.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                Nossa equipe está pronta para conversar sobre seu projeto.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-soft"
              >
                Fale direto com um consultor
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

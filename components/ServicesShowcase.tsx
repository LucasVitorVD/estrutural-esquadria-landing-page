"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Esquadrias de alumínio",
    description:
      "Estruturas de perfis de alumínio que formam portas e janelas, fabricadas sob medida para o projeto.",
    photo: "photo-1645640505436-d3a7afdecb12",
    photos: [
      "photo-1645640505436-d3a7afdecb12",
      "photo-1717565813196-8944b57877f8",
      "photo-1495524455245-b0f961d738a9",
      "photo-1763847283115-792496dbe688",
    ],
  },
  {
    title: "Vidros temperados",
    description:
      "Vidros tratados termicamente para ganhar resistência e compor diferentes ambientes e aplicações.",
    photo: "photo-1568057373106-63057e421d1c",
    photos: [
      "photo-1568057373106-63057e421d1c",
      "photo-1771076410843-0f5fdd76aa45",
      "photo-1554232456-8727aae0cfa4",
      "photo-1777997992181-babb8f4b5480",
    ],
  },
  {
    title: "Fachadas pele de vidro e ACM",
    description:
      "Conjunto de perfis e painéis de vidro ou ACM que reveste e dá identidade externa à edificação.",
    photo: "photo-1781200596674-be4735a74fc2",
    photos: [
      "photo-1781200596674-be4735a74fc2",
      "photo-1787395635473-99cf0a960eb2",
      "photo-1777997992181-babb8f4b5480",
      "photo-1645640505436-d3a7afdecb12",
    ],
  },
  {
    title: "Portas e janelas",
    description:
      "Aberturas de alumínio que permitem acesso, ventilação e iluminação, dimensionadas para cada ambiente.",
    photo: "photo-1628746041549-37fb45bd2c96",
    photos: [
      "photo-1628746041549-37fb45bd2c96",
      "photo-1717565813196-8944b57877f8",
      "photo-1495524455245-b0f961d738a9",
      "photo-1763847283115-792496dbe688",
    ],
  },
  {
    title: "Portões",
    description:
      "Estruturas de alumínio feitas para controlar o acesso ao imóvel e se integrar à fachada.",
    photo: "photo-1717565813196-8944b57877f8",
    photos: [
      "photo-1717565813196-8944b57877f8",
      "photo-1763847283115-792496dbe688",
      "photo-1777997992181-babb8f4b5480",
      "photo-1554232456-8727aae0cfa4",
    ],
  },
  {
    title: "Brises",
    description:
      "Elementos instalados na fachada para filtrar a luz solar e reduzir a incidência direta nos ambientes.",
    photo: "photo-1771076410843-0f5fdd76aa45",
    photos: [
      "photo-1771076410843-0f5fdd76aa45",
      "photo-1781200596674-be4735a74fc2",
      "photo-1787395635473-99cf0a960eb2",
      "photo-1645640505436-d3a7afdecb12",
    ],
  },
];

const image = (id: string, width = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const activeService = services[activeIndex];
  const contactMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre ${activeService.title}.`,
  );
  const contactLink = `https://wa.me/5561982153370?text=${contactMessage}`;

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <section id="servicos" aria-labelledby="servicos-title">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
        className="relative flex min-h-[760px] w-full flex-col justify-center gap-12 overflow-hidden bg-[#0A1824] px-6 py-14 md:min-h-[820px] md:px-[72px] md:py-[88px] lg:h-[820px] lg:min-h-0 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
      >
        {services.map((service, index) => (
          <Image
            key={service.title}
            src={image(service.photo)}
            alt=""
            fill
            sizes="100vw"
            priority={index === 2}
            aria-hidden="true"
            className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#0A1824F2_0%,#0A1824B3_55%,#0A182466_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full lg:min-w-0 lg:flex-1">
          <p className="text-[17px] font-semibold text-[#A9B4BE]">
            O que fazemos
          </p>
          <h2 id="servicos-title" className="sr-only">
            O que fazemos
          </h2>
          <div className="mt-6 flex flex-col gap-[6px]">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-fit max-w-full text-left font-heading text-[clamp(2rem,4vw,58px)] font-medium leading-[1.15] tracking-[-0.025em] transition-colors duration-500 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform after:duration-300 hover:text-white/80 hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none ${
                  index === activeIndex ? "text-white" : "text-white/25"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <aside
          aria-label="Detalhes da solução em destaque"
          className="relative z-10 w-full shrink-0 rounded-[24px] border border-white/15 bg-white/[0.08] p-7 text-white shadow-[0_16px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8 lg:w-[560px] xl:w-[620px] xl:p-9 2xl:w-[680px] 2xl:p-10"
        >
          <h3 className="font-heading text-2xl font-medium leading-[1.2] tracking-[-0.02em] md:text-[30px] xl:text-[34px] 2xl:text-[38px]">
            {activeService.title}
          </h3>
          <p className="mt-5 text-base leading-[1.6] text-white/80 md:text-[17px] xl:text-[18px] 2xl:text-[19px]">
            {activeService.description}
          </p>
          <Marquee
            role="region"
            aria-label={`Fotos de ${activeService.title}`}
            pauseOnHover
            repeat={2}
            className="-mx-2 mt-7 [--gap:12px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            {activeService.photos.map((photo, index) => (
              <div
                key={`${activeService.title}-${photo}`}
                className="relative aspect-[9/16] w-[144px] shrink-0 overflow-hidden rounded-2xl bg-white/10 xl:w-[160px] 2xl:w-[168px]"
              >
                <Image
                  src={image(photo, 800)}
                  alt={`Foto ilustrativa de ${activeService.title.toLowerCase()}, ${index + 1}`}
                  fill
                  sizes="(min-width: 1536px) 168px, (min-width: 1280px) 160px, 144px"
                  className="object-cover"
                />
              </div>
            ))}
          </Marquee>
          <Button
            nativeButton={false}
            render={
              <a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Entrar em contato para saber mais sobre ${activeService.title}`}
              />
            }
            className="mt-7 h-12 w-fit rounded-full bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Quero saber mais
            <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
        </aside>
      </div>
    </section>
  );
}

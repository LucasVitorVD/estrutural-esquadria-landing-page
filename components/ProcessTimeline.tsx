"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Visita e medição",
    description: "Vamos até a obra para conferir medidas e necessidades.",
  },
  {
    number: "02",
    title: "Projeto",
    description: "Definimos linhas, vidros e acabamentos com você.",
  },
  {
    number: "03",
    title: "Fabricação",
    description: "Produzimos as peças na fábrica da Estrutural.",
  },
  {
    number: "04",
    title: "Instalação",
    description: "Nossa equipe faz a instalação diretamente na obra.",
  },
];

const desktopPositions = [
  { left: "12.5%", top: 285, placement: "below" },
  { left: "37.5%", top: 152, placement: "above" },
  { left: "62.5%", top: 285, placement: "below" },
  { left: "87.5%", top: 152, placement: "above" },
] as const;

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopTimelineRef = useRef<HTMLOListElement>(null);
  const mobileTimelineRef = useRef<HTMLOListElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const path = isMobile ? mobilePathRef.current : desktopPathRef.current;
    const timeline = isMobile
      ? mobileTimelineRef.current
      : desktopTimelineRef.current;

    if (!path || !timeline) return;

    const context = gsap.context(() => {
      const pathLength = path.getTotalLength();
      const points = Array.from(
        timeline.querySelectorAll<HTMLElement>("[data-process-point]"),
      );
      const copy = Array.from(
        timeline.querySelectorAll<HTMLElement>("[data-process-copy]"),
      );

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      animation.to(path, {
        strokeDashoffset: 0,
        duration: 1.3,
        ease: "power2.inOut",
      });
      animation.fromTo(
        points,
        {
          autoAlpha: 0.45,
          scale: 0.75,
          backgroundColor: "rgba(255,255,255,0.7)",
          boxShadow: "0 0 0 0 rgba(215,38,47,0)",
        },
        {
          autoAlpha: 1,
          scale: 1,
          backgroundColor: "#D7262F",
          boxShadow: "0 0 0 6px rgba(215,38,47,0.18)",
          duration: 0.24,
          stagger: 0.28,
          ease: "back.out(1.6)",
        },
        0.08,
      );
      animation.fromTo(
        copy,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        0.12,
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:px-4 py-4"
      aria-labelledby="processo-title"
    >
      <div className="w-full overflow-hidden bg-primary px-6 py-12 text-white sm:px-10 sm:py-14 md:px-12 md:py-16 md:rounded-[32px] lg:px-[72px] lg:py-20">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] md:gap-12">
          <div>
            <h2
              id="processo-title"
              className="max-w-[620px] font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-[56px]"
            >
              Uma empresa só, do projeto à instalação.
            </h2>
            <p className="mt-5 max-w-[580px] text-base leading-relaxed text-white/70 sm:text-lg">
              Da primeira visita à instalação, a mesma equipe acompanha cada
              etapa do seu projeto.
            </p>
          </div>
        </div>

        <div className="relative mt-10 hidden h-[450px] md:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1200 450"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={desktopPathRef}
              d="M 150 285 C 275 285 300 152 450 152 C 600 152 600 285 750 285 C 900 285 900 152 1050 152"
              fill="none"
              stroke="#D7262F"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <ol
            ref={desktopTimelineRef}
            className="absolute inset-0 m-0 list-none p-0"
            aria-label="Etapas do projeto à instalação"
          >
            {steps.map((step, index) => {
              const position = desktopPositions[index];
              const isAbove = position.placement === "above";

              return (
                <li
                  key={step.number}
                  className="absolute left-0 top-0 w-0"
                  style={{ left: position.left, top: position.top }}
                >
                  <span
                    data-process-point
                    className="absolute left-0 top-0 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-primary bg-white/70"
                  />
                  <div
                    data-process-copy
                    className={`absolute left-0 w-[250px] -translate-x-1/2 text-center ${
                      isAbove ? "bottom-[34px]" : "top-[34px]"
                    }`}
                  >
                    <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-white/45">
                      {step.number}
                    </p>
                    <h3 className="font-heading text-xl font-medium lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <ol
          ref={mobileTimelineRef}
          className="relative mt-10 m-0 list-none p-0 md:hidden"
          aria-label="Etapas do projeto à instalação"
        >
          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-14"
            viewBox="0 0 56 544"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={mobilePathRef}
              d="M 28 36 V 444"
              fill="none"
              stroke="#D7262F"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          {steps.map((step) => (
            <li key={step.number} className="relative min-h-[136px] pl-14 pt-5">
              <span
                data-process-point
                className="absolute left-[17px] top-[25px] block h-6 w-6 rounded-full border-[5px] border-primary bg-white/70"
              />
              <div data-process-copy>
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-white/45">
                  {step.number}
                </p>
                <h3 className="font-heading text-xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[440px] text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

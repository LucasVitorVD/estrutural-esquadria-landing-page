"use client";

import {
  CalendarClock,
  Factory,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const locations = {
  showroom: {
    label: "Showroom",
    address:
      "SIA Trecho 3/4, Lotes 625/695, Loja 34, Shopping SIA Center Mall, Brasília-DF",
    query: "Shopping+SIA+Center+Mall+Loja+34+Brasilia+DF",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Shopping+SIA+Center+Mall+Loja+34+Brasilia+DF",
  },
  fabrica: {
    label: "Fábrica",
    address: "15°47'19.8\"S 48°00'49.0\"W, Brasília-DF",
    query: "-15.788833,-48.013611",
    directions:
      "https://www.google.com/maps/search/?api=1&query=-15.788833%2C-48.013611",
  },
};

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#EAF2F8] text-primary">
        {icon}
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-sm font-normal text-muted-foreground">{label}</h3>
        <div className="text-[17px] leading-[1.45] text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LocationSection() {
  return (
    <section
      id="showroom"
      className="scroll-mt-24 py-[120px]"
      aria-labelledby="showroom-title"
    >
      <div className="container-custom">
        <Tabs defaultValue="showroom" className="w-full">
          <div className="grid items-start gap-10 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-16">
            <div className="flex flex-col gap-8">
              <h2
                id="showroom-title"
                className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-foreground lg:text-[56px]"
              >
                Onde estamos
              </h2>

              <div className="flex flex-col gap-8">
                <TabsList className="!h-12 rounded-full bg-muted p-1.5">
                  <TabsTrigger
                    value="showroom"
                    className="rounded-full px-[22px] text-[15px] data-active:bg-white data-active:shadow-sm"
                  >
                    Showroom
                  </TabsTrigger>
                  <TabsTrigger
                    value="fabrica"
                    className="rounded-full px-[22px] text-[15px] data-active:bg-white data-active:shadow-sm"
                  >
                    Fábrica
                  </TabsTrigger>
                </TabsList>

                {Object.entries(locations).map(([key, location]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="flex flex-col gap-8">
                      <DetailRow
                        icon={
                          key === "showroom" ? (
                            <MapPin size={18} aria-hidden="true" />
                          ) : (
                            <Factory size={18} aria-hidden="true" />
                          )
                        }
                        label="Endereço"
                      >
                        <address className="not-italic">{location.address}</address>
                      </DetailRow>
                      <DetailRow
                        icon={<CalendarClock size={18} aria-hidden="true" />}
                        label="Horário"
                      >
                        Segunda a sexta, das 8h às 17h30
                      </DetailRow>
                      <DetailRow
                        icon={<Phone size={18} aria-hidden="true" />}
                        label="Telefone e WhatsApp"
                      >
                        <a className="hover:underline" href="tel:+5561982153370">
                          (61) 98215-3370
                        </a>
                      </DetailRow>
                      <DetailRow
                        icon={<Mail size={18} aria-hidden="true" />}
                        label="E-mail"
                      >
                        <a
                          className="break-all hover:underline"
                          href="mailto:contato@estruturalesquadriasdf.com.br"
                        >
                          contato@estruturalesquadriasdf.com.br
                        </a>
                      </DetailRow>
                      <div>
                        <a
                          href={location.directions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-[22px] py-[15px] text-base font-semibold text-white transition-colors hover:bg-primary/90"
                        >
                          <Navigation size={16} aria-hidden="true" />
                          Como chegar
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>

            <div className="h-[420px] overflow-hidden rounded-[28px] bg-muted md:h-[520px] lg:h-[620px]">
              {Object.entries(locations).map(([key, location]) => (
                <TabsContent key={key} value={key} className="h-full">
                  <iframe
                    title={`Mapa: ${location.label} da Estrutural`}
                    src={`https://maps.google.com/maps?q=${location.query}&z=16&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Estrutural Esquadrias | Esquadrias de Alumínio, Vidros e Fachadas em Brasília",
    template: "%s | Estrutural Esquadrias",
  },
  description: "Fábrica própria de esquadrias de alumínio, vidros temperados, fachadas pele de vidro e ACM. Showroom no SIA Center Mall. Atendimento em Brasília e DF desde 2017.",
  keywords: [
    "esquadrias de alumínio",
    "vidros temperados",
    "fachadas pele de vidro",
    "fachadas ACM",
    "portas e janelas",
    "portões",
    "brises",
    "claraboias",
    "boxes",
    "Brasília",
    "DF",
  ],
  authors: [{ name: "Estrutural Esquadrias" }],
  creator: "Estrutural Esquadrias",
  publisher: "Estrutural Esquadrias",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://estruturalesquadriasdf.com.br",
    siteName: "Estrutural Esquadrias",
    title: "Estrutural Esquadrias | Esquadrias de Alumínio, Vidros e Fachadas em Brasília",
    description: "Fábrica própria de esquadrias de alumínio, vidros temperados, fachadas pele de vidro e ACM. Showroom no SIA Center Mall. Atendimento em Brasília e DF desde 2017.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estrutural Esquadrias - Fábrica e Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrutural Esquadrias",
    description: "Fábrica própria de esquadrias de alumínio, vidros temperados e fachadas em Brasília.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1824" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        style={{ backgroundColor: "#FFFFFF", color: "#1E2328" }}
      >
        {children}
      </body>
    </html>
  );
}

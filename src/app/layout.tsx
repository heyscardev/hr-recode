import { Providers } from "@/components/providers/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heyscar Recode | Desarrollo Web Premium",
  description: "Creamos sistemas web modernos, rápidos y personalizados con tecnologías de última generación.",
  keywords: [
    "desarrollo web",
    "frontend",
    "backend",
    "react",
    "node",
    "aplicaciones web",
    "sistemas a medida",
    "Heyscar Recode"
  ],
  authors: [{ name: "Heyscar Romero", url: "https://recode.heyscar.dev" }],
  creator: "Heyscar Romero",
  openGraph: {
    title: "Heyscar Recode | Desarrollo Web Premium",
    description: "Creamos plataformas digitales personalizadas que combinan diseño, código y performance.",
    url: "https://recode.heyscar.dev",
    siteName: "Heyscar Recode",
    images: [
      {
        url: "/logo.png", // asegurate que esté en public/
        width: 1200,
        height: 630,
        alt: "Heyscar Recode",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: {
      rel: "icon",
      url: "/favicon.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Heyscar Recode",
    description: "Desarrollo web premium hecho a medida.",
    images: ["/logo.png"],
    creator: "@heyscar", // si tenés Twitter
  },
  metadataBase: new URL("https://recode.heyscar.dev"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

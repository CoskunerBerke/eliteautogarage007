import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELİTE Auto Garage | Antalya Premium Oto Detailing & Bakım",
  description: "Antalya Kepez'de profesyonel seramik kaplama, pasta cila, boya koruma, detaylı iç temizlik ve express yağ değişimi hizmetleri. ELİTE Auto Garage ile aracınız kusursuz parlasın.",
  keywords: ["Antalya oto detailing", "pasta cila Antalya", "seramik kaplama Kepez", "oto boya koruma", "detaylı iç temizlik", "yağ değişimi Kepez", "ELİTE Auto Garage"],
  openGraph: {
    title: "ELİTE Auto Garage | Antalya Premium Oto Detailing",
    description: "Antalya Kepez'de premium otomobil bakım, koruma ve detailing merkezi.",
    url: "https://eliteautogarage.com",
    siteName: "ELİTE Auto Garage",
    images: [
      {
        url: "/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "ELİTE Auto Garage Premium Detailing",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


// app/layout.tsx
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodoo Alda | Montáže nábytku v Pardubicích",
  description: "Profesionální montáže nábytku z IKEA, Sconto a dalších obchodů. Rychlé a kvalitní služby v Pardubicích a okolí.",
  keywords: ["montáž nábytku", "IKEA", "Sconto", "Asko", "Pardubice", "truhlář", "nábytek"],
  robots: "index, follow",
  openGraph: {
    title: "Woodoo Alda | Montáže nábytku",
    description: "Specialista na montáže nábytku z IKEA, Sconto a dalších. Férové ceny a kvalitní služby.",
    images: ["https://woodooalda.cz/og-image.jpg"],
    url: "https://woodooalda.cz",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodoo Alda | Montáže nábytku",
    description: "Profesionální montáže nábytku z IKEA, Sconto a dalších.",
    images: ["https://woodooalda.cz/og-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-great-vibes' 
});

const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ["latin"], 
  variable: '--font-cormorant' 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: "Roberto & Amelia - Nunta Noastră",
  description: "Vă invităm să sărbătorim împreună Taina Sfintei Cununii pe 6 Septembrie 2026 la Conac Polizu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${greatVibes.variable} ${cormorant.variable} ${montserrat.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}

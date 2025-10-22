import "@/styles/globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "BetComp",
  description: "Acompanhe partidas e compare odds em uma interface limpa.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memon Mobile Zone | Expert Mobile Repair Since 2007",
  description:
    "Karachi's trusted mobile repair experts since 2007. iPhone, Samsung & all major brands. Screen, battery, camera, software & water damage repairs — warranty guaranteed. Call: 0315-2413134",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BottomNav />
      </body>
    </html>
  );
}

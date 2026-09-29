import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display" });
const ui = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-ui" });

export const metadata: Metadata = { title: "Nu Metro — Redesign concept", description: "A Nu Metro booking experience concept." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${display.variable} ${ui.variable}`}>{children}</body></html>;
}

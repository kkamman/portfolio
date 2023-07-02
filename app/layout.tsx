"use client";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Navigation from "./navigation";
import Socials from "./socials";

const inter = Inter({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "Portfolio Koen Kamman",
  description: "Portfolio Koen Kamman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`h-full overflow-hidden text-slate-100 bg-black md:p-8 ${inter.className}`}
      >
        <div className={`${styles.card} h-full p-4 grid md:rounded-xl md:p-8`}>
          <header className={`tracking-widest ${styles.gridHeader}`}>
            <h1 className="text-4xl">Koen Kamman</h1>
            <h2 className="text-lg">Fullstack Developer</h2>
          </header>
          <Navigation className={styles.gridNavigation} />
          <Socials className={`${styles.gridSocials} self-end `} />
          <main className={styles.gridContent}>{children}</main>
        </div>
        <svg>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="6.29"
              numOctaves="6"
            />
            <feDisplacementMap
              in="fractalNoise"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </body>
    </html>
  );
}

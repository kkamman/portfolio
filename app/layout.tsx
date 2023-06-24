"use client";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "100" });

export const metadata: Metadata = {
  title: "Portfolio Koen Kamman",
  description: "Portfolio Koen Kamman",
};

type NavigationItem = {
  label: string;
  pathname: string;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navigationItems: NavigationItem[] = [
    { label: "Home", pathname: "/" },
    { label: "Projects", pathname: "/projects" },
  ];

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="card flex">
          <header className="flex flex-col justify-between h-full">
            <div className="tracking-widest">
              <h1 className="text-4xl">Koen Kamman</h1>
              <h2 className="text-lg">Fullstack Developer</h2>
            </div>
            <nav>
              <ul>
                {navigationItems.map((item) => {
                  return (
                    <li className="text-6xl mb-4" key={item.label}>
                      <Link href={item.pathname}>
                        <span className="text-indigo-600 font-bold">
                          {pathname === item.pathname ? "->" : ""}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ul className="text-lg underline tracking-wide decoration-indigo-600 underline-offset-2">
              <li>
                <a href="https://github.com/kkamman">GitHub</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/10368109/kkamman">
                  StackOverflow
                </a>
              </li>
              <li>
                <a href="https://nl.linkedin.com/in/koen-kamman">LinkedIn</a>
              </li>
            </ul>
          </header>
          <main>{children}</main>
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

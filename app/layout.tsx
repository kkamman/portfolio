import Navigation from "@/app/navigation";
import Breadcrumb from "@/components/breadcrumb";
import ExternalLink from "@/components/external-link";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.scss";
import MobileNavigation from "./mobile-navigation";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

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
        className={`${inter.className} min-h-full h-max flex bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <MobileNavigation />
        <div className="flex flex-col flex-grow">
          <header className="sticky top-0 bg-zinc-100/[.8] dark:bg-zinc-900/[.8] backdrop-blur-sm">
            <div className="py-4 px-8 border-b border-zinc-200 dark:border-zinc-800">
              <div className="container mx-auto flex items-center">
                <Link className="mr-12 tracking-wide font-light" href="/">
                  <h1 className="text-xl">Koen Kamman</h1>
                  <h2 className="text-xs">Fullstack Developer</h2>
                </Link>
                <div className="hidden md:flex flex-grow justify-end md:justify-between">
                  <Navigation className="hidden md:block" />
                  <ul className="gap-4 flex">
                    <li>
                      <ExternalLink href="https://github.com/kkamman">
                        GitHub
                      </ExternalLink>
                    </li>
                    <li>
                      <ExternalLink href="https://stackoverflow.com/users/10368109/kkamman">
                        StackOverflow
                      </ExternalLink>
                    </li>
                    <li>
                      <ExternalLink href="https://nl.linkedin.com/in/koen-kamman">
                        LinkedIn
                      </ExternalLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Breadcrumb />
          </header>
          <main className="flex-grow container mx-auto px-8 py-4">
            {children}
          </main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-8 py-4"></div>
          </footer>
        </div>
      </body>
    </html>
  );
}

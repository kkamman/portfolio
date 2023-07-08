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
  const sha = require("child_process")
    .execSync("git rev-parse --short HEAD")
    .toString()
    .trim();

  const buildDate = new Date().toISOString();

  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-full h-max flex bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <MobileNavigation />
        <div className="flex flex-col flex-grow">
          <header className="md:sticky md:top-0 bg-zinc-100/[.8] dark:bg-zinc-900/[.8] backdrop-blur-sm z-10">
            <div className="py-2 md:py-4 px-4 md:px-8 border-b border-zinc-200 dark:border-zinc-800">
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
            <Breadcrumb className="hidden md:block" />
          </header>
          <Breadcrumb className="sticky top-0 md:hidden bg-zinc-100/[.8] dark:bg-zinc-900/[.8] backdrop-blur-sm" />
          <div className="relative flex-grow">{children}</div>
          <footer className="border-t p-4 md:p-8 border-zinc-200 dark:border-zinc-800 text-zinc-500">
            <div className="container mx-auto text-xs">
              <p>
                commit:{" "}
                <a
                  href={`https://github.com/kkamman/portfolio/commit/${sha}`}
                  className="underline"
                >
                  {sha}
                </a>
              </p>
              <p>build date: {buildDate}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

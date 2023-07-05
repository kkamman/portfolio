"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFolderOpen,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa6";

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-between md:hidden sticky h-screen top-0 z-10 py-4 px-2 text-2xl border-r border-zinc-200 dark:border-zinc-800">
      <ul className="flex flex-col gap-8">
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center gap-2 ${
              pathname === "/" ? "text-indigo-400" : ""
            }`}
          >
            <FaHouse />
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`flex flex-col items-center gap-2 ${
              pathname === "/projects" ? "text-indigo-400" : ""
            }`}
          >
            <FaFolderOpen />
            <span className="text-xs">Projects</span>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-8">
        <li>
          <a
            href="https://github.com/kkamman"
            className="flex flex-col items-center"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/10368109/kkamman"
            className="flex flex-col items-center"
          >
            <FaStackOverflow />
          </a>
        </li>
        <li>
          <a
            href="https://nl.linkedin.com/in/koen-kamman"
            className="flex flex-col items-center"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
}

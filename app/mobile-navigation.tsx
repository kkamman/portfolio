"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFolderOpen, FaHouse } from "react-icons/fa6";

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="md:hidden sticky h-screen top-0 z-10 p-4 flex flex-col gap-8 text-2xl border-r border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className={`flex flex-col items-center gap-2 ${
            pathname === "/" ? "text-indigo-400" : ""
          }`}
        >
          <FaHouse />
          <span className="text-xs">home</span>
        </Link>
        <Link
          href="/projects"
          className={`flex flex-col items-center gap-2 ${
            pathname === "/projects" ? "text-indigo-400" : ""
          }`}
        >
          <FaFolderOpen />
          <span className="text-xs">projects</span>
        </Link>
      </div>
    </>
  );
}

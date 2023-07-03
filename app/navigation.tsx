"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  path: string;
  matchChildRoutes?: boolean;
};

const navigationItems: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
];

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex gap-4 tracking-wide">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path ||
                (item.matchChildRoutes && pathname.startsWith(item.path))
                  ? "text-indigo-400"
                  : ""
              } text-sm`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

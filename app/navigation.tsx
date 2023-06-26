"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  pathname: string;
};

export default function Navigation({ className }: { className: string }) {
  const navigationItems: NavigationItem[] = [
    { label: "Home", pathname: "/" },
    { label: "Projects", pathname: "/projects" },
  ];

  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul>
        {navigationItems.map((item) => {
          return (
            <li className="text-2xl mb-1 md:text-6xl md:mb-4" key={item.label}>
              <Link href={item.pathname}>
                {pathname === item.pathname ? (
                  <span className="text-indigo-600 font-black md:font-bold">
                    {"->"}
                  </span>
                ) : null}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

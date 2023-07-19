"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretRight } from "react-icons/fa6";

export default function Breadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").slice(1);

  if (segments.length <= 1) {
    return <></>;
  }

  return (
    <div
      className={`${className} py-4 px-8 border-b border-zinc-200 dark:border-zinc-800 z-10`}
    >
      <div className="container mx-auto flex items-center">
        <ol className="flex gap-2 text-sm">
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");

            return (
              <li className="flex gap-2 items-center" key={index + href}>
                {index !== 0 ? (
                  <div className="pointer-events-none select-none">
                    <FaCaretRight />
                  </div>
                ) : (
                  <></>
                )}
                <Link
                  href={href}
                  className={
                    href === pathname
                      ? "text-indigo-400 pointer-events-none"
                      : ""
                  }
                >
                  {segment}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

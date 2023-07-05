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
      className={`${className} py-2 px-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/[.8] dark:bg-zinc-900/[.8] backdrop-blur-sm`}
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

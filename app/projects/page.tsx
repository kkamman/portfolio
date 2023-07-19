import Link from "next/link";

export default function Projects() {
  return (
    <div className="p-8">
      <main className="container mx-auto">
        <ul>
          <Link href="/projects/portfolio">
            <li className="p-4 rounded-sm shadow bg-zinc-200 dark:bg-zinc-800">
              Portfolio
            </li>
          </Link>
        </ul>
      </main>
    </div>
  );
}

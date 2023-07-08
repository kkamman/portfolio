import Link from "next/link";

export default function Projects() {
  return (
    <div className="p-4 md:p-8">
      <main className="container mx-auto">
        <Link href="/projects/portfolio">Portfolio</Link>
      </main>
    </div>
  );
}

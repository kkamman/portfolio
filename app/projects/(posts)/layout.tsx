export default function ProjectPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:p-8">
      <main className="container mx-auto prose prose-zinc dark:prose-invert">
        {children}
      </main>
    </div>
  );
}

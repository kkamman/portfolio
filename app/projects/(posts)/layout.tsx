export default function ProjectPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 mb-20">
      <main className="container mx-auto prose prose-zinc dark:prose-invert">
        {children}
      </main>
    </div>
  );
}

export default function ProjectPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:p-8">
      <div className="prose prose-zinc dark:prose-invert">{children}</div>
    </div>
  );
}

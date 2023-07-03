export default function ProjectPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose prose-zinc dark:prose-invert">{children}</div>;
}

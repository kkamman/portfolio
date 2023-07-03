export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm underline underline-offset-2 decoration-indigo-400"
    >
      {children ? children : href}
    </a>
  );
}

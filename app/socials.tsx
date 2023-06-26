"use client";

type SocialItem = {
  label: string;
  link: string;
};

export default function Socials({ className }: { className: string }) {
  const socialItems: SocialItem[] = [
    { label: "GitHub", link: "https://github.com/kkamman" },
    {
      label: "StackOverflow",
      link: "https://stackoverflow.com/users/10368109/kkamman",
    },
    {
      label: "LinkedIn",
      link: "https://nl.linkedin.com/in/koen-kamman",
    },
  ];

  return (
    <ul className={className}>
      {socialItems.map((item) => {
        return (
          <li
            className="text-lg underline tracking-wide decoration-indigo-600 underline-offset-2"
            key={item.label}
          >
            <a href={item.link}>{item.label}</a>
          </li>
        );
      })}
    </ul>
  );
}

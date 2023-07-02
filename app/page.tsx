import Navigation from "@/components/navigation";
import Socials from "@/components/socials";
import layoutStyles from "./layout.module.css";

export default function Home() {
  return (
    <>
      <Navigation className={layoutStyles.gridNavigation} activePathname="/" />
      <Socials className={`${layoutStyles.gridSocials} self-end `} />
      <main className={layoutStyles.gridContent}>
        <p>Home</p>
      </main>
    </>
  );
}

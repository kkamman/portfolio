import Navigation from "@/components/navigation";
import Socials from "@/components/socials";
import layoutStyles from "../layout.module.css";

export default function Projects() {
  return (
    <>
      <Navigation
        className={layoutStyles.gridNavigation}
        activePathname="/projects"
      />
      <Socials className={`${layoutStyles.gridSocials} self-end `} />
      <main className={layoutStyles.gridContent}>
        <p>Projects</p>
      </main>
    </>
  );
}

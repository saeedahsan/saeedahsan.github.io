import "./styles.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

function Home(props: { darkMode: boolean }) {
  const cursorColour = props.darkMode ? "bg-gray-100" : "bg-black";
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-1 text-4xl md:text-6xl">
        Hi 👋, I'm <br className="block md:hidden" />
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap will-change-transform">
          Ahsan Saeed
        </span>
        <span
          className={
            "box-border inline-block w-1 h-10 ml-2 -mb-2 md:-mb-4 md:h-20 animate-cursor will-change-transform " +
            cursorColour
          }
        ></span>
      </h1>
      <p className="mb-2">Full-Stack Software Developer</p>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/ahsan-saeed-0ab27222b/">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/saeedahsan">
          <GitHubIcon />
        </Link>
        <Link href="mailto:ahsan02@gmail.com">
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
}

export default Home;

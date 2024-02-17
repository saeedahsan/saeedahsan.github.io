import Navbar from "../../components/Navbar";
import "./styles.css";

function Home() {
  return <>
    <Navbar currentLocation="/home" />
      <div className="flex items-center justify-center">
        <h1 className="mb-1 font-mono text-4xl text-black-100 md:text-6xl">
          Hi 👋, I'm <br className="block md:hidden" />
          <span
            className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
          >
            Ahsan Saeed
          </span>
          <span
            className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-black md:-mb-4 md:h-16 animate-cursor will-change-transform"
          ></span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p>Full-Stack software developer</p>
      </div>
  </>
};

export default Home;
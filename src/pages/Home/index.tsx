import "./styles.css";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-1 font-mono text-4xl text-black-100 md:text-6xl">
        Hi 👋, I'm <br className="block md:hidden" />
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
          Ahsan Saeed
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-black md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
      <p>Full-Stack Software Developer</p>
    </div>
  );
}

export default Home;


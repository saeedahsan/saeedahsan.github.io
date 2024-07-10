import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { useRef, useState, useEffect } from "react";
import WorkExperience from "./pages/Work Experience";

function App() {
  const [currentLocation, setCurrentLocation] = useState<string>("/home");
  const HomeRef = useRef<HTMLDivElement>(null);
  const WorkExperienceRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (component: string) => {
    switch (component) {
      case "Home":
        scrollToRef(HomeRef);
        setCurrentLocation("/home");
        break;
      case "Work-Experience":
        scrollToRef(WorkExperienceRef);
        setCurrentLocation("/work-experience");
        break;
      case "Projects":
        scrollToRef(ProjectsRef);
        setCurrentLocation("/projects");

        break;
      case "About":
        scrollToRef(AboutRef);
        setCurrentLocation("/about");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setCurrentLocation(`/${targetId.toLowerCase()}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    [HomeRef, ProjectsRef, AboutRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToRef(HomeRef);
    setCurrentLocation("/home");
  }, []);

  return (
    <div>
      <Navbar onNavClick={handleNavClick} currentLocation={currentLocation} />
      <div ref={HomeRef} id="Home">
        <Home />
      </div>
      <div ref={WorkExperienceRef} id="Work-Experience">
        <WorkExperience />
      </div>
      <div ref={ProjectsRef} id="Projects">
        <Projects />
      </div>
      <div ref={AboutRef} id="About">
        <About />
      </div>
    </div>
  );
}

export default App;

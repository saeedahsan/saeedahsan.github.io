import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar(props: {
  currentLocation: string;
  onNavClick: (component: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) {
  const currLocationColour = props.darkMode ? "text-gray-100" : "text-gray-900";
  const locationColour = props.darkMode ? "text-gray-400" : "text-gray-500";
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="fixed mx-auto max-w-screen-xl pl-4 sm:pl-6 lg:pl-8 w-full">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <button
                    onClick={() => props.onNavClick("Home")}
                    className={
                      props.currentLocation === "/home"
                        ? currLocationColour +
                          " transition hover:text-gray-500/75"
                        : locationColour + " transition hover:text-gray-500/75"
                    }
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.onNavClick("Work-Experience")}
                    className={
                      props.currentLocation === "/work-experience"
                        ? currLocationColour +
                          " transition hover:text-gray-500/75"
                        : locationColour + " transition hover:text-gray-500/75"
                    }
                  >
                    Work Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.onNavClick("Projects")}
                    className={
                      props.currentLocation === "/projects"
                        ? currLocationColour +
                          " transition hover:text-gray-500/75"
                        : locationColour + " transition hover:text-gray-500/75"
                    }
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.onNavClick("About")}
                    className={
                      props.currentLocation === "/about"
                        ? currLocationColour +
                          " transition hover:text-gray-500/75"
                        : locationColour + " transition hover:text-gray-500/75"
                    }
                  >
                    About
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => props.setDarkMode(!props.darkMode)}
              className="text-gray-400 hover:text-gray-500"
              title={props.darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
            >
              {props.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

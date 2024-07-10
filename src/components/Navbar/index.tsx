function Navbar(props: {
  currentLocation: string;
  onNavClick: (component: string) => void;
}) {
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="fixed mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <button
                    onClick={() => props.onNavClick("Home")}
                    className={
                      props.currentLocation === "/home"
                        ? "text-gray-900 transition hover:text-gray-500/75"
                        : "text-gray-500 transition hover:text-gray-500/75"
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
                        ? "text-gray-900 transition hover:text-gray-500/75"
                        : "text-gray-500 transition hover:text-gray-500/75"
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
                        ? "text-gray-900 transition hover:text-gray-500/75"
                        : "text-gray-500 transition hover:text-gray-500/75"
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
                        ? "text-gray-900 transition hover:text-gray-500/75"
                        : "text-gray-500 transition hover:text-gray-500/75"
                    }
                  >
                    About
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

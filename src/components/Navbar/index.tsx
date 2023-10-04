/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Navbar(props: { currentLocation: string }) {
    const [destination, setDestination] = useState<string>('');
    const [navigate, setNavigate] = useState<boolean>(false);

    const HandleNavigate = (destination: string) => {
        setDestination(destination);
        setNavigate(true);
    }

    if (navigate) {
        if (props.currentLocation === destination) {
            setNavigate(false);
        }
        return <Navigate to={destination} />
    }
    else {
        return <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className={props.currentLocation === "/home" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                                        href=""
                                        onClick={() => HandleNavigate("/")}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={props.currentLocation === "/projects" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                                        href=""
                                        onClick={() => HandleNavigate("/projects")}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={props.currentLocation === "/about" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                                        href=""
                                        onClick={() => HandleNavigate("/about")}
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>
        </div>
        </header>
    }
};

export default Navbar;
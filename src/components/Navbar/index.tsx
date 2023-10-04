/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

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
                            <Link
                                to="/"
                                className={props.currentLocation === "/home" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                            >
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to="/projects"
                                className={props.currentLocation === "/projects" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                            >
                                Projects
                            </Link>
                            </li>
                            <li>
                            <Link
                                to="/about"
                                className={props.currentLocation === "/about" ? "text-gray-900 transition hover:text-gray-500/75" : "text-gray-500 transition hover:text-gray-500/75"}
                            >
                                About
                            </Link>
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
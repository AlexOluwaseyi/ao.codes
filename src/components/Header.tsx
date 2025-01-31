import { useState } from "react";
import aocwhite from "../assets/svg/AOC-white.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black/50 h-16 text-white relative top-0 md:z-10">
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 items-center">
          <a className="flex gap-3 text-3xl text-regular" href="#hero">
            <img alt="AOC Logo White" src={aocwhite} className="h-8" />
            {/* AlexOluwaseyi.Codes */}
          </a>
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-4">
          <button
            id="mobile-open-button"
            className="text-regular text-3xl sm:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
          <nav
            className={`${
              isMobileMenuOpen
                ? "flex h-dvh w-dvw top-0 bg-black flex-col items-center justify-between text-center"
                : "hidden sm:flex flex-row space-x-8 text-xl-text-regular items-center justify-evenly"
            }`}
            aria-label="main"
          >
            <a
              href="#Stories"
              className="hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              Stories
            </a>
            <a
              href="#LinkedIn"
              className="hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              LinkedIn
            </a>
            <a
              href="#GitHub"
              className="hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              GitHub
            </a>
            <a
              href="#Twitter"
              className="hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              X
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

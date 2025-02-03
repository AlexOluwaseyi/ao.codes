import { useState } from "react";
import aocwhite from "../assets/svg/AOC-white.svg";
import LinkedIn from "../assets/png/linkedin.png";
import Twitter from "../assets/png/twitter.png";
import GitHub from "../assets/png/github.png";
import Blog from "../assets/png/blog.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black/50 h-16 text-white relative top-0 md:z-10">
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 items-center">
          <a
            className="flex gap-3 text-3xl text-regular"
            href="https://alexoluwaseyi.codes"
          >
            <img alt="AOC Logo White" src={aocwhite} className="h-8" />
            {/* AlexOluwaseyi.Codes */}
          </a>
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-4">
          <button
            id="mobile-open-button"
            // className="text-regular text-3xl justify-self-end sm:hidden focus:outline-none"
            className={`${
              isMobileMenuOpen
                ? "hidden"
                : "text-regular text-3xl justify-self-end sm:hidden focus:outline-none"
            }`}
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
          <button
            id="mobile-close-button"
            className={`${
              isMobileMenuOpen
                ? "text-reguler text-3xl justify-self-end z-10"
                : "hidden"
            }`}
            // className="text-regular text-3xl justify-self-end sm:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
          <nav
            className={`${
              isMobileMenuOpen
                ? "flex h-dvh w-dvw top-0 left-0 pt-16 absolute bg-black flex-col items-center text-center"
                : "hidden sm:flex flex-row space-x-8 text-xl-text-regular items-center justify-evenly"
            }`}
            aria-label="main"
          >
            <a
              href="https://blogs.alexoluwaseyi.codes"
              className="!m-0 py-4 sm:py-0 hover:text-red-400 hover:underline hover:underline-offset-2"
            >
              <img
                src={Blog}
                alt="icon for blogs/stories"
                className="hidden sm:block h-[20px] w-[20px]"
              />
              <span className="sm:hidden">Stories</span>
            </a>
            <a
              href="https://linkedin.com/in/alexoluwaseyi"
              className="!m-0 py-4 sm:py-0 hover:text-red-400 hover:underline hover:underline-offset-2"
            >
              <img
                src={LinkedIn}
                alt="icon for LinkedIn"
                className="hidden sm:block h-[20px] w-[20px]"
              />
              <span className="sm:hidden">LinkedIn</span>
            </a>
            <a
              href="https://github.com/alexoluwaseyi"
              className="!m-0 py-4 sm:py-0 hover:text-red-400 hover:underline hover:underline-offset-2"
            >
              <img
                src={GitHub}
                alt="icon for GitHub"
                className="hidden sm:block h-[20px] w-[20px]"
              />
              <span className="sm:hidden">GitHub</span>
            </a>
            <a
              href="https://x.com/alex_oluwaseyi"
              className="!m-0 py-4 sm:py-0 hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              <img
                src={Twitter}
                alt="icon for Twitter"
                className="hidden sm:block h-[20px] w-[20px]"
              />
              <span className="sm:hidden ">X</span>
            </a>
            <a
              href="#quote"
              className="py-4 sm:py-0 sm:hidden hover:text-red-400 hover:underline hover: underline-offset-2"
            >
              Get a quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

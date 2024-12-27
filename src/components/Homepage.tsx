import aocwhite from "../assets/svg/AOC-white.svg";
import Landing from "./Landing";

const Homepage = () => {
  return (
    <>
      <header className="bg-black h-16 text-white sticky top-0 md:z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <a className="flex gap-3 text-3xl text-regular" href="#hero">
            <img alt="AOC Logo White" src={aocwhite} className="h-8" />
            {/* AlexOluwaseyi.Codes */}
          </a>
          <div>
            <button
              id="mobile-open-button"
              className="text-regular text-3xl sm:hidden focus:outline-none"
            >
              &#9776;
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl-text-regular"
              aria-label="main"
            >
              <a
                href="#Stories"
                className="hover:border-x  hover:border-y hover:border-solid hover:border-spacing-4 hover:border-s-4"
              >
                Stories
              </a>
              <a
                href="#LinkedIn"
                className="hover:border-x  hover:border-y hover:border-solid hover:border-spacing-4 hover:border-s-4"
              >
                LinkedIn
              </a>
              <a
                href="#GitHub"
                className="hover:border-x  hover:border-y hover:border-solid hover:border-spacing-4 hover:border-s-4"
              >
                GitHub
              </a>
              <a
                href="#Twitter"
                className="hover:border-x  hover:border-y hover:border-solid hover:border-spacing-4 hover:border-s-4"
              >
                X
              </a>
            </nav>
          </div>
        </section>
      </header>
      <Landing />
    </>
  );
};
export default Homepage;

import aocwhite from "../assets/svg/AOC-white.svg";
import profile from "../assets/images/headshot profile2.jpeg";

const Homepage = () => {
  return (
    <>
      <div className="bg-black">
        <header className="bg-black h-16 text-white sticky top-0 z-10">
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

        <div
          className="landing-page flex bg-black h-full max-w-4xl
       items-center justify-centers mx-auto"
        >
          <div className="grid w-full gap-4 bg-black p-2 grid-cols-3 grid-rows-4 rounded-lg shadow-md">
            <div className="col-span-1 row-span-4 bg-pink-200 rounded-lg shadow-md flex items-center justify-center">
              <img
                src={profile}
                alt="Profile picture for Oluwaseyi"
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="col-span-1 row-span-3 bg-black outline-white outline rounded-lg shadow-md p-5 text-white">
              <h1 className="text-bold">Hi, I'm Alex Oluwaseyi</h1>
              <p className="text-xs text-justify">
                I'm a passionate Software Engineer, Web Developer, and
                Freelancer, dedicated to crafting efficient, user-focused
                solutions. With a solid foundation in electronics and electrical
                engineering, I bring a unique perspective to designing and
                building purposeful software and web applications. Whether it's
                creating sleek, responsive websites or developing robust backend
                systems, I thrive on turning ideas into impactful digital
                experiences. Let's build something amazing together. 🚀
              </p>
            </div>

            <div className="col-span-1 row-span-3 bg-black outline-white outline rounded-lg shadow-md p-5 text-white">
              <h1 className="text-bold">Stacks</h1>
              <ul className="list-disc">
                <li className="ml-3 pl-2">ReactJS</li>
                <li className="ml-3 pl-2">Python</li>
                <li className="ml-3 pl-2">NodeJS</li>
                <li className="ml-3 pl-2">HTML5</li>
                <li className="ml-3 pl-2">Bootstrap and Tailwind CSS</li>
              </ul>
            </div>

            <div className="col-span-2 row-span-1 bg-green-400 rounded-lg shadow-md flex items-center justify-center">
              <p>Say hi.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;

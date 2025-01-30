import aocwhite from "../assets/svg/AOC-white.svg";

// const Header = () => {
//   return (
//     <header className="max-w-4xl mx-auto p-4">
//       <div className="grid grid-cols-2 gap-4">
//         {/* First subgrid - 50% width */}
//         <div className="grid grid-cols-1 items-center">
//           <h1 className="text-2xl font-bold">Brand Name</h1>
//           <p className="text-sm text-gray-600">Tagline or brief description</p>
//         </div>

//         {/* Second subgrid - 50% split among other elements */}
//         <div className="grid grid-cols-2 gap-4">
//           {/* Navigation links */}
//           <nav className="flex flex-row justify-center">
//             <a
//               href="#"
//               className="text-sm font-medium text-blue-600 hover:underline"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="text-sm font-medium text-blue-600 hover:underline"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="text-sm font-medium text-blue-600 hover:underline"
//             >
//               Contact
//             </a>
//           </nav>

//           {/* Additional content, e.g., search bar or button */}
//           <div className="flex items-center justify-end">
//             <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
//               Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
const Header = () => {
  return (
    <header className="bg-black h-16 text-white sticky top-0 md:z-10">
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
          >
            &#9776;
          </button>
          <nav
            className="hidden sm:flex flex-row space-x-8 text-xl-text-regular items-center justify-evenly"
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
      </div>
    </header>
  );
};

export default Header;

// import profile from "../assets/images/headshot profile2.jpeg";
import DownloadIcon from "../assets/svg/download.svg";
// import background from "../assets/images/background.jpg";
// import { motion } from "framer-motion";
// import { Download } from "lucide-react";`

const Landing = () => {
  return (
    <div className="landing-page flex flex-col mx-4 xs:mx-4 md:mx-24 max-w-4xl justify-self-center items-center justify-center">
      <div className="text-center mx-4 md:mx-24 text-regular text-white justify-center items-center">
        <h1 className="text-bold">Hi there, I'm Alex Oluwaseyi</h1>
        <p className="text-sm md:text-md my-4">
          I'm a passionate Software Engineer, Web Developer, and Freelancer,
          dedicated to crafting efficient, user-focused solutions. With a solid
          foundation in ethical hacking and cybersecurity, I bring a unique
          perspective to designing and building purposeful and secure software
          and web applications.
        </p>
        <p className="text-sm md:text-md my-4">
          Whether it's creating sleek, responsive websites or developing robust
          backend systems, I thrive on turning ideas into impactful digital
          experiences. Let's build something amazing together. 🚀
        </p>
      </div>
      <div className="flex flex-rows spaced-between justify-center items-center gap-8">
        <div className="h-4 xs:mt-0 p-4 mt-4 bg-green-400 rounded-lg shadow-md flex items-center justify-center">
          <a className="flex" href="#">
            <p className="text-black text-bold">Get in touch.</p>{" "}
          </a>
        </div>
        <div className="h-4 xs:mt-0 p-4 mt-4 bg-green-400 rounded-lg shadow-md flex items-center justify-center">
          <a
            className="flex"
            href="../src/docs/Oluwaseyi Akintola '25.pdf"
            download
          >
            <p className="text-black text-bold">Download resume.</p>{" "}
            <img className="pl-3" src={DownloadIcon} alt="Download icon" />
            {/* <Download /> */}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Landing;

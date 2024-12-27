import profile from "../assets/images/headshot profile2.jpeg";

const Landing = () => {
  return (
    <div className="landing-page flex bg-black h-full max-w-4xl items-center justify-centers mx-auto">
          <div className="grid w-full gap-4 grid-cols-1 grid-rows-4 rounded-lg shadow-md h-2/3 bg-black p-2 md:grid md:h-max md:w-full md:gap-4 md:grid-cols-3 md:grid-rows-4">
            <div className="col-span-1 row-span-4 md:col-span-1 md:row-span-4 rounded-lg shadow-md flex items-center justify-center ">
              <img
                src={profile}
                alt="Profile picture for Oluwaseyi"
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="hidden md:block md:col-span-1 md:row-span-3 bg-black outline-white outline rounded-lg shadow-md p-5 text-white">
              <h1 className="text-bold">Hi, I'm Alex Oluwaseyi</h1>
              <p className="text-xs text-left">
                I'm a passionate Software Engineer, Web Developer, and
                Freelancer, dedicated to crafting efficient, user-focused
                solutions. With a solid foundation in electronics and electrical
                engineering, I bring a unique perspective to designing and
                building purposeful software and web applications. <br />
                Whether it's creating sleek, responsive websites or developing
                robust backend systems, I thrive on turning ideas into impactful
                digital experiences. Let's build something amazing together. 🚀
              </p>
            </div>

            <div className="hidden md:block col-span-1 row-span-3 bg-black outline-white outline rounded-lg shadow-md p-5 text-white">
              <h1 className="text-bold">Stacks</h1>
              <ul className="list-disc">
                <li className="ml-3 pl-2">ReactJS</li>
                <li className="ml-3 pl-2">Python</li>
                <li className="ml-3 pl-2">NodeJS</li>
                <li className="ml-3 pl-2">HTML5</li>
                <li className="ml-3 pl-2">Bootstrap and Tailwind CSS</li>
              </ul>
            </div>

            <div className="col-span-1 row-span-1 h-16 mt-16 md:mt-0 md:h-full md:col-span-2 md:row-span-1 bg-green-400 rounded-lg shadow-md flex items-center justify-center">
              <p>Say hi.</p>
            </div>
          </div>
        </div>
  )
}
export default Landing
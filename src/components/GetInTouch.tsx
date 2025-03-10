import { Clock, MapPinned, Phone } from "lucide-react";

const GetInTouch = () => {
  return (
    // <div className="container mx-auto px-5 py-24">
    // <>
    //   <div className="mb-12 flex max-w-4xl flex-col text-center">
    //     <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
    //       Contact Us
    //     </h1>
    //     <p className="mx-auto text-base leading-relaxed lg:w-2/3">
    //       Feel free to reach out to us! Whether you have a question, feedback,
    //       or a collaboration proposal, we'd love to hear from you.
    //     </p>
    //   </div>

    //   <div className="mx-auto md:w-2/3 lg:w-1/2">
    //     <div className="-m-2 flex flex-wrap">
    //       {/* <!-- form --> */}
    //       <div className="w-1/2 p-2">
    //         <div className="relative">
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
    //             placeholder="Name"
    //           />
    //           <label
    //             htmlFor="name"
    //             className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
    //           >
    //             Name
    //           </label>
    //         </div>
    //       </div>
    //       <div className="w-1/2 p-2">
    //         <div className="relative">
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
    //             placeholder="Email"
    //           />
    //           <label
    //             htmlFor="email"
    //             className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
    //           >
    //             Email
    //           </label>
    //         </div>
    //       </div>
    //       <div className="mt-4 w-full p-2">
    //         <div className="relative">
    //           <textarea
    //             id="message"
    //             name="message"
    //             className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
    //             placeholder="Message"
    //           ></textarea>
    //           <label
    //             htmlFor="message"
    //             className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
    //           >
    //             Message
    //           </label>
    //         </div>
    //       </div>
    //       <div className="w-full p-2">
    //         <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
    //           Button
    //         </button>
    //       </div>

    //       {/* <!-- footer --> */}
    //       <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
    //         <a className="text-indigo-400">example@email.com</a>
    //         <p className="my-5 leading-normal">
    //           49 Smith St. <br />
    //           Saint Cloud, MN 56301
    //         </p>
    //         <span className="inline-flex">
    //           <a className="text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="h-5 w-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //             </svg>
    //           </a>
    //           <a className="ml-4 text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="h-5 w-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //             </svg>
    //           </a>
    //           <a className="ml-4 text-gray-500">
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="h-5 w-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //             </svg>
    //           </a>
    //           <a className="ml-4 text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               className="h-5 w-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //             </svg>
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In Touch
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <MapPinned size={48} className="h-6 mr-6 text-white left-0" />
              <span className="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
              </span>
            </div>
            <div className="flex items-center mt-5">
              <Phone size={48} className="h-6 ml-0 text-white" />
              <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="flex items-center mt-5">
              <Clock size={48} className="h-6 ml-0 text-white" />
              <span className="text-sm">24/7</span>
            </div>
          </div>
          <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows={10}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default GetInTouch;

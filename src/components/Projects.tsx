// const Projects = () => {
//   return (
//     <div className="h-dvh bg-white">
//       Projects
//       <iframe
//         className="iframes"
//         src="https://lautechneuro.org.ng"
//         loading="lazy"
//         style={{
//           width: "1920px", // Desktop width
//           height: "1080px", // Desktop height
//           transform: "scale(0.1)", // Scale the content down
//           transformOrigin: "top left", // Ensure scaling starts from top left
//           border: "none", // Remove default borders
//           position: "absolute",
//         }}
//       />
//     </div>
//   );
// };
// export default Projects;

const Projects = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          src="https://lautechneuro.org.ng"
          style={{
            width: "1920px", // Desktop width
            height: "1080px", // Desktop height
            transform: "scale(0.4)", // Scale the content down
            transformOrigin: "top left", // Ensure scaling starts from top left
            border: "none", // Remove default borders
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;

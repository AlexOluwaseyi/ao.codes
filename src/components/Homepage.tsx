import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
// import Projects from "./Projects";
import GetInTouch from "./GetInTouch";

const Homepage = () => {
  return (
    <div className="custom-bg h-full">
      <Header />
      <Landing />
      {/* <Projects /> */}
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Homepage;

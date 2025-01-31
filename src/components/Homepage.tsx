import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
// import Projects from "./Projects";

const Homepage = () => {
  return (
    <div className="custom-bg h-full">
      <Header />
      <Landing />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};
export default Homepage;

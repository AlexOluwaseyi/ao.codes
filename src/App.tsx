import BlogsPage from "./components/BlogsPage";
import BlogPost from "./components/BlogPost";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Blog Listing */}
        <Route path="/" element={<BlogsPage />} />

        {/* Dynamic Route for Individual Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};
export default App;

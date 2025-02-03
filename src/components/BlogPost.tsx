import Footer from "./Footer";
import Header from "./Header";

export const BlogPost = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100dvh-15%)] max-w-4xl mx-auto">Blog</div>
      <Footer />
    </>
  );
};

export default BlogPost;

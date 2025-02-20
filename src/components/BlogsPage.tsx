import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ShareButtons from "./ShareButtons";
import PostType from "../types/Blog";
import { ArrowRight, Search } from "lucide-react";

// import postss from "../posts/posts.json";

const BlogsPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("posts.json");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();

        setPosts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-(64px+80px))] sm:dvh p-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-white">
            <h1 className="text-4xl font-bold text-bold">Blog</h1>
            <p className="text-regular">
              Sharing knowledge, one post at a time.
            </p>
          </header>

          {/* Search box */}
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full p-3 pr-10 rounded-lg border bg-black border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-white -z-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 scale-x-[-1] text-gray-400" />
          </div>

          {loading && (
            <p className="text-gray-500 text-center">Loading posts...</p>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Blog posts list */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-black border border-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    <a
                      href={`/blog/${post.id}`}
                      className="hover:text-blue-500 hover:underline mt-4 inline-block"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-white mt-2">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-white">
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    <span className="flex /*flex-cols*/ items-center gap-2 ">
                      Continue Reading <ArrowRight size={16} />
                    </span>
                  </a>
                  <div className="flex /*flex-cols align-self justify-self*/ gap-4 mt-4 text-white text-bold">
                    Share:{" "}
                    <ShareButtons
                      title={post.title}
                      url={`https://blogs.alexoluwaseyi.codes/blog/${post.id}`}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No posts found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;

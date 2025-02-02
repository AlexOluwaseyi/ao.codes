import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const mockPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "Learn how React hooks simplify your functional components.",
    author: "Alex Oluwaseyi",
    date: "January 30, 2025",
  },
  {
    id: 2,
    title: "A Guide to Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can speed up your frontend development.",
    author: "Jane Doe",
    date: "February 1, 2025",
  },
  {
    id: 3,
    title: "Deploying with Vercel",
    excerpt: "A beginner-friendly guide to deploying your projects on Vercel.",
    author: "John Smith",
    date: "January 25, 2025",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="h-[calc(100dvh-15%)] sm:dvh bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
            <p className="text-gray-600">
              Sharing knowledge, one post at a time.
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No posts found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

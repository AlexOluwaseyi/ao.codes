import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import type PostType from "../types/Blog";
import { UserCircle, Calendar, Clock } from "lucide-react";
import { Badge } from "../components/ui/badge";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts.json"); // Ensure correct path
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: PostType[] = await response.json();

        setPosts(data);

        // Find the post once data is available
        const foundPost = data.find((p) => p.id === id);
        setPost(foundPost || null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [id]); // Runs when `id` changes

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-[calc(100dvh-(64px+80px))] max-w-4xl mx-auto text-center text-white flex flex-col justify-center align-center gap-4 ">
          <div>Post not found.</div>
          <a href="/">Read another blog.</a>
        </div>
        <Footer />
      </>
    );
  }

  const CodeBlock = ({
    content,
  }: // language,
  {
    content: string;
    language: string;
  }) => (
    <div className="my-6 rounded-lg bg-gray-900 p-4 overflow-x-auto">
      <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap break-words">
        {content}
      </pre>
    </div>
  );

  const renderMarkdownContent = (content: string) => {
    // Split content into blocks by double newlines
    const blocks = content.split(/\n\n+/);

    return blocks.map((block, blockIndex) => {
      // Check if block is a code block
      if (block.startsWith("```")) {
        const lines = block.split("\n");
        const language = lines[0].slice(3).trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <CodeBlock key={blockIndex} content={code} language={language} />
        );
      }

      // Check if block is a heading
      if (block.startsWith("#")) {
        const match = block.match(/^#+/);
        if (match) {
          const level = match[0].length;
          const text = block.replace(/^#+\s+/, "");
          const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag
              key={blockIndex}
              className={`font-bold mb-4 text-white ${
                level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl"
              }`}
            >
              {text}
            </HeadingTag>
          );
        }
      }

      // Render paragraphs with inline formatting
      return (
        <p
          key={blockIndex}
          className="my-4 text-gray-300 leading-relaxed whitespace-pre-line"
        >
          {block.split("\n").map((line, lineIndex) => (
            <span key={lineIndex}>
              {line.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                (_, text, url) =>
                  `<a href="${url}" class="text-blue-400 hover:text-blue-300">${text}</a>`
              )}
              {lineIndex < block.split("\n").length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      );
    });
  };

  const renderContent = (content: PostType["content"]) => {
    // If content is a string, render it as a text block
    if (typeof content === "string") {
      return renderMarkdownContent(content);
    }

    // If content is an array, map through and render each block
    return content.map((item, index) => {
      switch (item.type) {
        case "text":
          return (
            <p key={index} className="my-4 text-gray-300 leading-relaxed">
              {item.content}
            </p>
          );
        case "code":
          return (
            <CodeBlock
              key={index}
              content={item.content}
              language={item.language}
            />
          );
        case "image":
          return (
            <figure key={index} className="my-6">
              <img
                src={item.url}
                alt={item.alt}
                className="w-full rounded-lg shadow-lg"
              />
              {item.caption && (
                <figcaption className="mt-2 text-center text-sm text-gray-400">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-(64px+80px))] max-w-4xl mx-auto p-6 text-white">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
          <div className="flex items-center gap-2">
            <UserCircle size={16} className="text-white" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-white" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-white" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white border rounded p-1 border-white text-black hover:bg-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        <div className="!mt-10 justify-self-center">
          Done reading this, <a href="/">read another</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;

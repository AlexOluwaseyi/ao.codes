// type BlogType = {
//   id: string;
//   title: string;
//   excerpt: string;
//   author: string;
//   date: string;
//   content: string;
// };

type PostType = {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: ContentBlock[] | string;
};

type ContentBlock =
  | { type: "text"; content: string }
  | { type: "code"; language: string; content: string }
  | { type: "image"; url: string; alt: string; caption?: string };

// type ContentBlock = {
//   type?: "text" | "code" | "image";
//   content?: string;
//   language?: string;
//   url?: string;
//   alt?: string;
//   caption?: string;
// };

export default PostType;

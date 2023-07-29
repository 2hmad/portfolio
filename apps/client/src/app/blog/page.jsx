import Navbar from "@/components/Navbar";
import BlogComponent from "@/components/Blog";

export const metadata = {
  title: "Blog - Ahmed M. Ibrahim",
  description:
    "This is my blog where I write about my journey as a software engineer, my learnings, and my thoughts on different topics.",
  openGraph: {
    title: "Blog - Ahmed M. Ibrahim",
    description:
      "This is my blog where I write about my journey as a software engineer, my learnings, and my thoughts on different topics.",
    type: "website",
    url: "https://ahmedm.tech/blog",
    site_name: "Ahmed M. Ibrahim",
    images: ["https://ahmedm.tech/images/Ahmed-Mohamed-Logo.jpg"],
  },
  twitter: {
    handle: "@2hmadmo",
    site: "@2hmadmo",
    cardType: "summary_large_image",
    images: ["https://ahmedm.tech/images/Ahmed-Mohamed-Logo.jpg"],
  },
};

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <Navbar />
        <BlogComponent />
      </div>
    </div>
  );
};

export default BlogPage;

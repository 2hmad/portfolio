import Navbar from "@/components/Navbar";
import BlogPostComponent from "@/components/BlogPostComponent";

export const metadata = {
  title: "My Projects - Ahmed M. Ibrahim",
  description:
    "These are some of the projects I've worked on. I'm passionate about building SaaS products and open source projects.",
  openGraph: {
    title: "My Projects - Ahmed M. Ibrahim",
    description:
      "These are some of the projects I've worked on. I'm passionate about building SaaS products and open source projects.",
    type: "website",
    url: "https://ahmedm.tech/projects",
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

const BlogPostPage = () => {
  return (
    <div className="blog-post-page">
      <div className="container">
        <Navbar />
        <BlogPostComponent />
      </div>
    </div>
  );
};

export default BlogPostPage;

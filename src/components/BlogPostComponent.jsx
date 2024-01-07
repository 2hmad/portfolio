import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BlogPostComponent = () => {
  return (
    <div className="blog-post-page__content">
      <div className="back-navigation-header">
        <Link href="/blog" className="back-btn">
          <ArrowLeftCircleIcon width={30} color="black" />{" "}
          <span>Back To Posts</span>
        </Link>
      </div>
      <div className="head">
        <h1 className="post-title">Next.js, Prisma, PlanetScale and Vercel</h1>
        <p className="post-subtitle">
          Deploy your Next.js + Prisma app to PlanetScale and Vercel
        </p>
      </div>
      <div className="post-content"></div>
    </div>
  );
};

export default BlogPostComponent;

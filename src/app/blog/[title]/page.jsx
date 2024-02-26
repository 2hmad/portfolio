import Navbar from "@/components/Navbar";
import BlogPostComponent from "@/components/BlogPostComponent";

const BlogPostPage = () => {
    return (
        <div className="blog-post-page">
            <div className="container">
                <Navbar/>
                <BlogPostComponent/>
            </div>
        </div>
    );
};

export default BlogPostPage;

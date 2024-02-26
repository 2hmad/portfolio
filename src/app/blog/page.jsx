import Navbar from "@/components/Navbar";
import BlogComponent from "@/components/Blog";

const BlogPage = () => {
    return (
        <div className="blog-page">
            <div className="container">
                <Navbar/>
                <BlogComponent/>
            </div>
        </div>
    );
};

export default BlogPage;

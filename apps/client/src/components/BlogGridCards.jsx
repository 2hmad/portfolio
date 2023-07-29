"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import getPostsData from "@/hooks/usePostsData";

const BlogGridCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostsData();
      console.log(posts);
      setPosts(posts);
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div
        className="grid-cards"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {posts?.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </motion.div>
    </>
  );
};

export default BlogGridCards;

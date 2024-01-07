"use client";

import { useState } from "react";
import Helpers from "@/helpers/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PostCard = (props) => {
  const { post } = props;
  const [cardHeight] = useState(
    Helpers.randomizeArray(["400px", "454px", "310px"])
  );

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="card"
        style={{ height: `${cardHeight}` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="content">
          <h3 className="project-title">{post.title}</h3>
          <p>{post.shortDescription}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default PostCard;

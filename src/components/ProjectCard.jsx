"use client";

import { useState } from "react";
import Helpers from "@/helpers/helpers";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = (props) => {
  const { project, openProject } = props;
  const [cardHeight] = useState(
    Helpers.randomizeArray(["400px", "454px", "310px"])
  );

  return (
    <motion.div
      className="card"
      style={{ height: `${cardHeight}` }}
      onClick={() => openProject(project)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        loading="lazy"
      />
      <div className="content">
        <h3 className="project-title">{project.title}</h3>
        <p>{project.shortDescription}</p>
        <p className="tags">
          {project.tags?.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

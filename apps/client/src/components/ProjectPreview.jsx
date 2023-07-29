import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProjectPreview = (props) => {
  const { project, close } = props;

  return (
    <div className="project-preview-sidebar">
      <div className="sidebar-overlay" onClick={close}></div>
      <motion.div
        initial={{ width: 0, x: "545px" }}
        animate={{ width: "545px", x: 0 }}
        exit={{ width: 0, x: "545px" }}
        transition={{ duration: 0.3 }}
        className="sidebar-container"
      >
        <div className="project-preview-sidebar__header">
          <button className="back-btn" onClick={close}>
            <ArrowLeftCircleIcon width={30} color="#545454" />
          </button>
        </div>
        <div className="project-preview-sidebar__content">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-short-description">
            {project.shortDescription}
          </p>
          <img
            src={project.image}
            className="project-image"
            alt={project.title}
          />
          <h3>About Project</h3>
          <p className="about-description">{project.description}</p>
          <h3>Technologies</h3>
          <ul className="tags">
            {project.tags?.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
          {project.website && (
            <>
              <h3 style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                Website
              </h3>
              <a
                href={project.website}
                target="_blank"
                className="website-link"
              >
                {project.website}
              </a>
            </>
          )}
          {project.github && (
            <>
              <h3>Github</h3>
              <a href={project.github} target="_blank" className="github-link">
                {project.github}
              </a>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPreview;

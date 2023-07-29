"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import useProjectsData from "@/hooks/useProjectsData";

const ProjectGridCards = (props) => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await useProjectsData();
      setProjects(projects);
      setFilteredProjects(projects);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.type === activeTab)
      );
    }
  }, [activeTab]);

  const handleOpenProject = (project) => {
    props.setProject(project);
  };

  return (
    <motion.div
      className="grid-cards"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {filteredProjects?.map((project, index) => (
        <ProjectCard
          project={project}
          openProject={handleOpenProject}
          key={index}
        />
      ))}
    </motion.div>
  );
};

export default ProjectGridCards;

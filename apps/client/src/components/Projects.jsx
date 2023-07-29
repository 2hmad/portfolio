"use client";

import ProjectGridCards from "@/components/ProjectGridCards";
import ProjectPreview from "@/components/ProjectPreview";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const ProjectsComponent = () => {
  const [openedProject, setOpenedProject] = useState({});
  return (
    <>
      <div className="projects-page__content">
        <h1 className="page-title">Projects.</h1>
        <ProjectGridCards setProject={setOpenedProject} />
      </div>
      <AnimatePresence>
        {openedProject.title && (
          <ProjectPreview
            project={openedProject}
            close={() => setOpenedProject({})}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsComponent;

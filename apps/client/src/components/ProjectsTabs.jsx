import { useEffect, useState } from "react";

const ProjectsTabs = (props) => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    props.setActiveTab(activeTab);
  }, [activeTab]);

  return (
    <ul className="navs">
      <li
        className={activeTab === "All" ? "nav active" : "nav"}
        onClick={() => setActiveTab("All")}
      >
        All
      </li>
      <li
        className={activeTab === "Projects" ? "nav active" : "nav"}
        onClick={() => setActiveTab("Projects")}
      >
        Projects
      </li>
      <li
        className={activeTab === "Open Source" ? "nav active" : "nav"}
        onClick={() => setActiveTab("Open Source")}
      >
        Open Source
      </li>
    </ul>
  );
};

export default ProjectsTabs;

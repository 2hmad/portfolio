import Navbar from "@/components/Navbar";
import ProjectsComponent from "@/components/Projects";

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <div className="container">
                <Navbar/>
                <ProjectsComponent/>
            </div>
        </div>
    );
};

export default ProjectsPage;

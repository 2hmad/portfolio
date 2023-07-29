import Navbar from "@/components/Navbar";
import ProjectsComponent from "@/components/Projects";

export const metadata = {
  title: "My Projects - Ahmed M. Ibrahim",
  description:
    "These are some of the projects I've worked on. I'm passionate about building SaaS products and open source projects.",
  openGraph: {
    title: "My Projects - Ahmed M. Ibrahim",
    description:
      "These are some of the projects I've worked on. I'm passionate about building SaaS products and open source projects.",
    type: "website",
    url: "https://ahmedm.tech/projects",
    site_name: "Ahmed M. Ibrahim",
    images: ["https://ahmedm.tech/images/Ahmed-Mohamed-Logo.jpg"],
  },
  twitter: {
    handle: "@2hmadmo",
    site: "@2hmadmo",
    cardType: "summary_large_image",
    images: ["https://ahmedm.tech/images/Ahmed-Mohamed-Logo.jpg"],
  },
};

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <Navbar />
        <ProjectsComponent />
      </div>
    </div>
  );
};

export default ProjectsPage;

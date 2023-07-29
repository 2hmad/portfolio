import Navbar from "@/components/Navbar";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export const metadata = {
  title: "Ahmed M. Ibrahim",
  description:
    "I'm a software engineer based in Egypt. I'm passionate about building SaaS products and open source projects.",
  openGraph: {
    title: "Ahmed Mohamed",
    description:
      "I'm a software engineer based in Egypt. I'm passionate about building SaaS products and open source projects.",
    type: "website",
    url: "https://ahmedm.tech/",
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

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Navbar />
        <div className="home-page__content">
          <h1 className="name">I'm Ahmed M. Ibrahim</h1>
          <div className="briefs">
            <p>
              I'm a software engineer based in Egypt. I'm passionate about
              building SaaS products and open source projects.
            </p>
            <p>
              I'm currently working as a senior software engineer at{" "}
              <a href="https://orcha.systems/" target="_blank">
                <button className="btn btn-primary">Orcha Systems</button>
              </a>
            </p>
            <p>
              View my{" "}
              <Link href="/projects">
                <button className="btn btn-primary">Projects</button>
              </Link>{" "}
              ,{" "}
              <Link href="/resume">
                <button className="btn btn-primary">Resume</button>
              </Link>{" "}
              ,{" "}
              <Link href="/blog">
                <button className="btn btn-primary">Blog</button>
              </Link>{" "}
            </p>
            <p>
              Or send me an email at{" "}
              <a href="mailto:ahmed_noreldin@outlook.com">
                <button className="btn btn-primary">
                  ahmed_noreldin@outlook.com
                </button>
              </a>
            </p>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/2hmadmo" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://github.com/2hmad" target="_blank">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmednoreldin/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Ahmed M. Ibrahim",
  description:
    "I'm a software engineer based in Egypt. I'm passionate about building SaaS products and open source projects.",
  openGraph: {
    title: "Ahmed Mohamed",
    description:
      "I'm a software engineer based in Egypt. I'm passionate about building SaaS products and open source projects.",
    type: "website",
    url: "https://ahmednoreldin.com",
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
              Based in Egypt, my professional journey is rooted in software
              engineering. My passion lies in creating innovative SaaS products
              and intricate microservices projects. Alongside this, I am
              dedicated to educating others as a programming instructor at{" "}
              <a
                href="https://www.udemy.com/user/ahmed-mohamed-1"
                target="_blank"
              >
                <button className="btn btn-primary">Udemy</button>
              </a>
            </p>
            <p>
              In my current roles, I am making significant strides as a Senior
              Software Engineer at{" "}
              <a href="https://tawabel.com" target="_blank">
                <button className="btn btn-primary">Bayt Al Tawabel</button>
              </a>{" "}
              Additionally, I hold the esteemed positions of Chief Technology
              Officer and Co-Founder at{" "}
              <a href="https://goplace.io" target="_blank">
                <button className="btn btn-primary">GoPlace</button>
              </a>{" "}
              where I continue to drive technological advancements and business
              growth.
            </p>
            <p>
              View my{" "}
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

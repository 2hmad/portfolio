import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Resume - Ahmed M. Ibrahim",
  description:
    "Here's my resume. I hope you find it interesting. I'm passionate about building SaaS products and open source projects.",
  openGraph: {
    title: "My Resume - Ahmed M. Ibrahim",
    description:
      "Here's my resume. I hope you find it interesting. I'm passionate about building SaaS products and open source projects.",
    type: "website",
    url: "https://ahmedm.tech/resume",
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

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="container">
        <Navbar />
        <div className="resume-page__content">
          <h1 className="page-title">Resume.</h1>
          <p className="page-description">
            Reach out to me via my{" "}
            <a href="mailto:ahmed_noreldin@outlook.com">Contact</a> .{" "}
            <a
              href="https://drive.google.com/file/d/1cJ-wdKFmF5qoIpjjkFClgMUgffwcRGTY/view?usp=sharing"
              target="_blank"
            >
              View
            </a>{" "}
            /{" "}
            <a href="https://drive.google.com/file/d/1cJ-wdKFmF5qoIpjjkFClgMUgffwcRGTY/view?usp=sharing">
              Download
            </a>{" "}
            my resume.
          </p>
          <iframe
            src="https://drive.google.com/file/d/1cJ-wdKFmF5qoIpjjkFClgMUgffwcRGTY/preview"
            allow="autoplay"
            loading="lazy"
            className="darkmode-ignore"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

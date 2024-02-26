import Navbar from "@/components/Navbar";

const ResumePage = () => {
    return (
        <div className="resume-page">
            <div className="container">
                <Navbar/>
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

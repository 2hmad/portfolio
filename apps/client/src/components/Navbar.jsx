"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <img
          src="/images/Ahmed Mohamed - Logo.svg"
          alt="Logo"
          className="navbar__logo"
        />
      </Link>
      <div className="navbar__links">
        {/* <Link href="/projects">Projects</Link> */}
        {/* <Link href="/resume">Resume</Link> */}
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="flex flex-col mx-auto">
      <div className="flex w-full items-center justify-center gap-10 mt-3 text-3xl">
        <a
          className="text-white hover:text-orange-500 duration-500 animate-fadeIn"
          href="https://github.com/kiranj100"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          className="text-white hover:text-orange-500 duration-500 animate-fadeIn "
          href="https://www.linkedin.com/in/kiran-jojan/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="text-white  text-sm flex flex-col items-center mt-2 animate-fadeIn">
        <p className="tracking-widest ">
          &copy; {new Date().getFullYear()} Kiran Jojan
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import html5 from "../../assets/html5.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import jira from ".././../assets/jira.svg";
import tailwind from "../../assets/tailwind.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import mongodb from "../../assets/mongodb.svg";
import nodejs from "../../assets/nodejs.svg";
import python from "../../assets/python.svg";
import vs from "../../assets/vs.svg";
import ubuntu from "../../assets/ubuntu.svg";
import sass from "../../assets/sass.svg";
import responsive from "../../assets/responsive.svg";
import mysql from "../../assets/mysql.svg";
import react_1 from "../../assets/react_1.svg";
import Java from "../../assets/Java.svg";
import npm from "../../assets/npm.svg";
import Postman from "../../assets/Postman.svg";
import PyCharm from "../../assets/PyCharm.svg";

import "animate.css";

function About() {
  return (
    <main
      className="mx-auto w-full flex flex-col item-center justify-center
     text-white animate-fadeIn bg-about bg-cover bg-center"
    >
      <h1
        className="lg:text-4xl md:text-3xl sm:text-md text-2xl text-center 
      animate-fadeIn lg:mb-5 md:mb-5 sm:mb-1 mb-2 font-bold "
      >
        Skills
      </h1>
      <div>
        <div
          className=" grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 
        sm:gap-0 gap-2 md:gap-6 lg:gap-6 xl:gap-8 font-bold sm:text-2xl text-md  
        md:text-xl lg:text-xl drop-shadow-xl"
        >
          <div className="flex flex-col items-center group">
            <span>HTML</span>
            <img
              src={html5}
              alt="HTML"
              className="bg-white border-none ring-1 rounded-md sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip  "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>CSS</span>
            <img
              src={css}
              alt="CSS"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip"
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>JavaScript</span>
            <img
              src={javascript}
              alt="JavaScript"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Jira</span>
            <img
              src={jira}
              alt="Jira"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Tailwind</span>
            <img
              src={tailwind}
              alt="Tailwind"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Git</span>
            <img
              src={git}
              alt="Git"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>NodeJs</span>
            <img
              src={nodejs}
              alt="NodeJs"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Java</span>
            <img
              src={Java}
              alt="NodeJs"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Python</span>
            <img
              src={python}
              alt="Python"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>PyCham</span>
            <img
              src={PyCharm}
              alt="Python"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>MYSQL</span>
            <img
              src={mysql}
              alt="MYSQL"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>ReactJS</span>
            <img
              src={react_1}
              alt="ReactJS"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>VSCode</span>
            <img
              src={vs}
              alt="VSCode"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>GitHub</span>
            <img
              src={github}
              alt="GitHub"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>NPM</span>
            <img
              src={npm}
              alt="NodeJs"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>MongoDB</span>
            <img
              src={mongodb}
              alt="MongoDB"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Ubuntu</span>
            <img
              src={ubuntu}
              alt="Ubuntu"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>SCSS</span>
            <img
              src={sass}
              alt="SCSS"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Postman</span>
            <img
              src={Postman}
              alt="NodeJs"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>

          <div className="flex flex-col items-center ">
            <span>Responsive</span>
            <img
              src={responsive}
              alt="Responsive"
              className="bg-white border-none ring-1 rounded-md hover:ring-white sm:h-0 sm:w-0 h-12 w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 
              animate__animated animate__flip "
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

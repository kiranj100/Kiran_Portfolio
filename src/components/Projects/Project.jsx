import { Comment } from "react-loader-spinner";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Project() {
  const projects_name = [
    {
      id: 1,
      name: "Fruit Store",
      desc: "Browse through a variety of fruits, Add fruits to your Favourite",
      linkgit: "https://github.com/kiranj100/Fruit-Store",
      linklive: "https://fruitstore48.vercel.app",
    },
    {
      id: 2,
      name: "BMI Calcutor",
      desc: "Calculate your BMI and stay healthy, Health is a journey, not a destination.",
      linkgit:
        "https://github.com/kiranj100/React_Project/tree/master/BMI%20Calculator",
      linklive: "https://your-bmi-calculator.vercel.app",
    },
    {
      id: 4,
      name: "Color Change",
      desc: "Simple and beginner Friendly. Change Color and Have Fun",
      linkgit:
        "https://github.com/kiranj100/React_Project/tree/master/BackgroundChangeColor",
      linklive: "https://backchanger.vercel.app",
    },
    {
      id: 3,
      name: "Coming Soon",
      desc: "",
    },
  ];
  return (
    <div
      className="py-10 w-full flex flex-col gap-8 bg-project bg-cover
    bg-center bg-no-repeat"
    >
      <h1
        className="text-center sm:text-3xl font-bold
       text-2xl"
      >
        Projects
      </h1>
      <div
        className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3  
        xl:grid-cols-3 grid-cols-1 justify-items-center sm:gap-12 gap-8 
        md:mx-auto lg:mx-auto sm:mx-0 mx-auto xl:mx-0"
      >
        {projects_name.map((project) => (
          <div
            key={project.id}
            className="bg-slate-700 ring-2 h-72 sm:w-72 w-80 rounded-lg 
            shadow-xl text-center py-4 font-bold tracking-widest"
          >
            {project.name === "Coming Soon" ? (
              <div
                className="text-center flex flex-col items-center 
                justify-center h-full"
              >
                <h1 className="font-bold text-xl text-white tracking-widest">
                  Coming <br />
                  Soon
                </h1>
                <div>
                  <Comment
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#F4442E"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-8 ">
                  <h1 className="text-2xl tracking-wider">{project.name}</h1>
                  <p className=" px-4  ">{project.desc}</p>
                </div>
                <div className="flex flex-1 justify-around ">
                  <a
                    href={project.linklive}
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    <span className="text-lg">Live</span>

                    <MdLiveTv className="ring-1 text-3xl hover:text-orange-400 " />
                  </a>
                  <a
                    href={project.linkgit}
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    <span className="text-lg">GitHub</span>

                    <FaGithub className="ring-1 text-3xl hover:text-orange-400" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

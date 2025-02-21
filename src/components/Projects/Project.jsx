import { Comment } from "react-loader-spinner";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Project() {
  const projects_name = [
    {
      id: 1,
      name: "Kiran-Food-Stall",
      desc: "in this project u can search variety of food as per your favorite ingredients list",
      linkgit: "https://github.com/kiranj100/Kiran-Food-Stall",
      linklive: "https://kiran-food-stall.vercel.app/",
    },
    {
      id: 2,
      name: "Kiran-Movies",
      desc: "in this project u can search variety of Movies and Trending Movies",
      linkgit:
        "https://github.com/kiranj100/React-Projects/tree/master/Movies_Project",
      linklive: "https://kiran-movies.vercel.app/",
    },
    {
      id: 3,
      name: "Fruit Store",
      desc: "Browse through a variety of fruits, Add fruits to your Favourite",
      linkgit: "https://github.com/kiranj100/Fruit-Store",
      linklive: "https://fruitstore48.vercel.app",
    },
    {
      id: 4,
      name: "BMI Calcutor",
      desc: "Calculate your BMI and stay healthy, Health is a journey, not a destination.",
      linkgit:
        "https://github.com/kiranj100/React_Project/tree/master/BMI%20Calculator",
      linklive: "https://your-bmi-calculator.vercel.app",
    },
    {
      id: 5,
      name: "Input Color Change",
      desc: "In Input box write a color name and the other box change the color ",
      linkgit:
        "https://github.com/kiranj100/React_Project/tree/master/InputColor%20Change",
      linklive: "https://input-color-change.vercel.app/",
    },

    {
      id: 6,
      name: "Coming Soon",
      desc: "",
    },
  ];
  return (
    <div className="flex flex-col w-full gap-8 py-10 bg-center bg-no-repeat bg-cover bg-project">
      <h1 className="text-2xl font-bold text-center sm:text-3xl">Projects</h1>
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center sm:gap-12 md:mx-auto lg:mx-auto sm:mx-0 xl:mx-0">
        {projects_name.map((project) => (
          <div
            key={project.id}
            className="py-4 font-bold tracking-widest text-center rounded-lg shadow-xl bg-slate-700 ring-2 h-72 sm:w-72 w-80 animate__animated animate__zoomIn "
          >
            {project.name === "Coming Soon" ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-xl font-bold tracking-widest text-white">
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
                  <p className="px-4 ">{project.desc}</p>
                </div>
                <div className="flex justify-around flex-1 ">
                  <a
                    href={project.linklive}
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    <span className="text-lg">Live</span>

                    <MdLiveTv className="text-3xl hover:text-orange-400 " />
                  </a>
                  <a
                    href={project.linkgit}
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    <span className="text-lg">GitHub</span>

                    <FaGithub className="text-3xl hover:text-orange-400" />
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

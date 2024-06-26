import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home(props) {
  return (
    <main className="w-full flex flex-wrap animate-fadeIn duration-300 delay-300">
      <div className="place-content-center mx-auto sm:text-left text-center">
        <div className="tracking-widest font-bold xl:leading-[3rem] lg:leading-10 md:leading-9 sm:leading-3 leading-5 gap-4">
          <p className="text-3xl animate-fadeIn delay-1000">Hello,</p>
          <p className="text-6xl animate-fadeIn delay-1100">I Am Kiran Jojan</p>
          <ReactTyped
            className="text-3xl animate-fadeIn delay-1200"
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Web Developer",
            ]}
            typeSpeed={18}
            backSpeed={18}
            loop
          />
          <p className="text-xl animate-fadeIn delay-1300">
            I Look forward to working with You.
          </p>
          <button className=" mt-2 ">
            <Link
              to="https://drive.google.com/uc?export=download&id=14kfg982Z837l0kC-yaPau1zbz0cV2_Y1"
              className=" text-xl text-center px-8 py-2 duration-200 max-w-none animate-pulse
                 hover:text-white ring-2  hover:ring-blue-300 
               rounded-xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-400 "
            >
              Resume
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;

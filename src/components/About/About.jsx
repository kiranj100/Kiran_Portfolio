import { skillsData } from "../../Data/data";
function About() {
  return (
    <main className="flex flex-col justify-center w-full mx-auto text-white bg-center bg-cover item-center animate-fadeIn bg-about">
      <h1 className="mb-2 text-2xl font-bold text-center lg:text-4xl md:text-3xl sm:text-md animate-fadeIn lg:mb-5 md:mb-5 sm:mb-1 ">
        Skills
      </h1>
      <div>
        <div className="grid grid-cols-4 gap-2 font-bold sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 sm:gap-0 md:gap-6 lg:gap-6 xl:gap-8 sm:text-2xl text-md md:text-xl lg:text-xl drop-shadow-xl">
          {skillsData.map((sdata) => (
            <div key={sdata.id} className="flex flex-col items-center group">
              <span>{sdata.title}</span>
              <img
                src={sdata.images}
                alt={sdata.title}
                className="w-12 h-12 bg-white border-none rounded-md ring-1 sm:h-0 sm:w-0 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 animate__animated animate__flip "
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;

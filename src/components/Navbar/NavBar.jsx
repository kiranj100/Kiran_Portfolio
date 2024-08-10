import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
function NavBar() {
  const isActive = false;
  const [open, setOpen] = useState(false);
  function togglemenu() {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  }

  return (
    <>
      {/* desktop menu */}

      <nav>
        <div className="items-center justify-end hidden w-full h-20 px-16 font-bold list-none bg-transparent shadow-sm md:flex shadow-gray-700">
          <ul className="inline-flex gap-8 cursor-pointer lg:text-xl ">
            <li>
              <NavLink
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } transition duration-200 ease-in delay-200 
                `}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8  "
                      : "text-white"
                  } transition duration-300 ease-in-out
                `}
                to="/about"
              >
                Skill
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8 "
                      : "text-white"
                  } transition duration-300 ease-in-out
                `}
                to="/project"
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8 "
                      : "text-white"
                  } transition duration-300 ease-in-out
                `}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/*-----------------------------------------------------------------------------------------------------------------------------*/}

        {/* mobile nav bar */}
        <div className="font-bold list-none md:hidden bg-slate-800 ">
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-20 text-white shadow-sm shadow-gray-600">
            <span onClick={togglemenu} className="mr-5 text-3xl cursor-pointer">
              {!open ? <RiMenuFold2Fill /> : <RiMenuFoldFill />}
            </span>
          </div>

          <div
            className={`${open ? "block" : "hidden"} 
          fixed top-0 left-0 h-screen w-full bg-slate-800 z-40`}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-16">
              <li>
                <NavLink
                  onClick={togglemenu}
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl uppercase transition duration-300 ease-in-out
              `}
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={togglemenu}
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl uppercase transition duration-300 ease-in-out
              `}
                  to="/about"
                >
                  Skill
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={togglemenu}
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl uppercase transition duration-300 ease-in-out
                 `}
                  to="/project"
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={togglemenu}
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl uppercase transition duration-300 ease-in-out
              `}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

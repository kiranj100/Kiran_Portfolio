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
        <div
          className="hidden md:flex justify-around font-bold items-center h-20 w-full
         shadow-gray-700 shadow-sm  bg-transparent list-none"
        >
          <NavLink to="/">
            <p className=" text-white text-3xl font-bold  hover:text-orange-600 ">
              Kiran
            </p>
          </NavLink>
          <ul className="inline-flex gap-8  cursor-pointer lg:text-xl ">
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
                About
              </NavLink>
            </li>

            {/* <li>
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
            </li> */}

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
        <div className="md:hidden bg-slate-800 list-none font-bold ">
          <div
            className="relative flex flex-col items-end justify-center
          z-50 h-20 shadow-gray-600 shadow-sm w-full text-white"
          >
            <span onClick={togglemenu} className="text-3xl mr-5 cursor-pointer">
              {!open ? <RiMenuFoldFill /> : <RiMenuFold2Fill />}
            </span>
          </div>

          <div
            className={`${open ? "block" : "hidden"} 
          fixed top-0 left-0 h-screen w-full bg-slate-800 z-40`}
          >
            <ul className="flex flex-col justify-center h-full items-center gap-16">
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
                  About
                </NavLink>
              </li>

              {/* <li>
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
              </li> */}

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

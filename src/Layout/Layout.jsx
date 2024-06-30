import { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import SpinnerLoader from "../components/Spinner/SpinnerLoader";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className=" animate-fadeIn">
        {isLoading ? (
          <SpinnerLoader />
        ) : (
          <div className="flex flex-col min-h-screen text-white">
            <header>
              <nav>
                <NavBar />
              </nav>
            </header>
            <main className="flex flex-1">
              <Outlet />
              <ToastContainer />
            </main>
            <footer className=" h-20 w-full">
              <Footer />
            </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;

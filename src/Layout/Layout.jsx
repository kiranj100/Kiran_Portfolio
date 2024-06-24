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
    }, 500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-black">
        {isLoading ? (
          <SpinnerLoader />
        ) : (
          <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <header>
              <nav>
                <NavBar />
              </nav>
            </header>
            <main className="flex flex-1">
              <Outlet />
              <ToastContainer />
            </main>
            <footer className="bg-slate-800 h-28 w-full">
              <Footer />
            </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;

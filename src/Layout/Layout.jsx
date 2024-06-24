import NavBar from "../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
function Layout() {
  return (
    <>
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
    </>
  );
}

export default Layout;

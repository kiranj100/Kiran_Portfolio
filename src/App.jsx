import Layout from "./Layout/Layout";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

import "./app.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

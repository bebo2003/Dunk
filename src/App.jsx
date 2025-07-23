import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { tokenContext } from "./Context/tokenContext";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
;
import About from "./components/About/About";
import Location from "./components/Location/Location";
import Menue from "./components/Menue/Menue";
import Contact from "./components/Contact/Contact";



function App() {
  
  const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About/> },
      { path: "location", element: <Location/> },
      { path: "menu", element: <Menue/> },
      { path: "contact", element: <Contact/> },
      
    ],
  },
]);

  return (
    <>
      <ToastContainer /> {/* ✅ نقلها هنا حتى تعمل في جميع الصفحات */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "aos/dist/aos.css";

// Component import
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

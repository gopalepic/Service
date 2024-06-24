import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "aos/dist/aos.css";

// Component import
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
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

  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []); // Empty dependency array ensures it runs only once on mount


  return (
    
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

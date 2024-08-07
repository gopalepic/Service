import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Service from "../components/Services/Service.jsx";
import ProjectsComp from "../components/Blogs/ProjectsComp.jsx";
import Footer from "../components/Footer/Footer";


const Home = () => {
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
    <div >
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Service />
      <ProjectsComp />
      <Footer />
    </div>
  )
}

export default Home

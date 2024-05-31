import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Service from "../components/Services/Service.jsx";
import Testimonial from "../components/Testimonial/Testimonial";
import BlogsComp from "../components/Blogs/BlogsComp.jsx";
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
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  )
}

export default Home

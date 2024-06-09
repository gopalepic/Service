import React from "react";
import { SlNote } from "react-icons/sl";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { FaMobileButton } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { TbPasswordMobilePhone } from "react-icons/tb";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const skillsData = [
  {
    name: "Web Development",
    icon: <FaFirefoxBrowser className="text-4xl text-primary" />,
    link: "#",
    description:
      "A website or web application is made through a process called web development. It involves the development of the website or web applications front - end(client - side) and back - end(server - side).We provide complete web development services to assist companies in creating an online presence and achieving their digital objectives.Our teams of experts work closely with our clients to create custom websites that are user - friendly,attractive, and optimized for conversions.",
    aosDelay: "0",
  },
  {
    name: "Mobile App Development",
    icon: <FaMobileButton className="text-4xl text-primary" />,
    link: "#",
    description:
      "App development can be a valuable investment for businesses looking to improve customers engagement and to reach new markets.We develop Android and IOS applications for our clients,startups,and enterprises.Depending on your business needs,our experienced and dedicated developers can design and develop a creative,customer - focused mobile application that provides a distinctive and user - friendly experience for your users.",
    aosDelay: "300",
  },
  {
    name: "Software Development",
    icon: <MdOutlineDeveloperMode className="text-4xl text-primary" />,
    link: "#",
    description:
      "Software development is a multi-stage process that starts with planning and ends with maintenance. The aim of software development is to design and produce software applications that are user-friendly, dependable, and efficient. The process of planning, building, testing, and maintaining software applications is known as software development. Planning, analysis, design, execution, and maintenance are some of the processes involved.",
    aosDelay: "500",
  },
  {
    name: "Software Testing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      " In the fast-paced world of software development, ensuring the quality and reliability of software products is crucial for success. This is where Kanthariya Technologies steps in as a leading provider of exceptional software testing services. With a commitment to excellence and a team of highly skilled professionals,Kanthariya Technologies offers a unique and comprehensive testing solution that can revolutionize your software development process.",
    aosDelay: "700",
  },
  {
    name: "Word Press",
    icon: <FaWordpress className="text-4xl text-primary" />,
    link: "#",
    description:
      " When we create a website design for your company, we focus on creating an attractive and user-friendly website that effectively communicates company s brand and message.It reflects the company s commitment to sustainability,outdoor adventure.Web design is the process of creating a visually appealing and user - friendly experience for a website or web application.",
    aosDelay: "700",
  },{
    name: "Digital Marketing",
    icon: <TbPasswordMobilePhone className="text-4xl text-primary" />,
    link: "#",
    description:"We provide web design services that assist businesses in enhancing their online performance through digital marketing, numerous techniques. Your web audience can be found, expanded, and converted with the help of our devoted team of internet marketers. It relates to recent technologies like Social Media Optimisation, Search Engine Optimisation and Social Media Marketing. ",
    aosDelay: "700",
  }
];
const Services = () => {

  const navigate = useNavigate();
  return (
    <>
    <Navbar></Navbar>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" >
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4 "
              >
                <div className=" hover:bg-slate-900 p-5 rounded-lg" style={{height:"350px"}}>
                
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p></div>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            {/* <button className="primary-btn" onClick={()=> navigate('/Contact')}>Learn More</button> */}
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  );
};

export default Services;

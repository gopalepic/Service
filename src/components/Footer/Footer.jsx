import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const FooterLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/#project",
  }, 
  {
    title: "Contact us",
    link: "/contact",
  },
  
];
const HelpLinks = [
 
  {
    title: "Contact us",
    link: "/#delivery-details",
  },
 
];
const ResourcesLinks = [
  {
    title: "WHEA",
    link: "https://Whea.in",
  },
  {
    title: "C2C",
    link: "https://campus2career.in/",
  },
  {
    title: "Future inter",
    link: "https://Futureintern.in ",
  },
];
const Footer = () => {

  const navigate = useNavigate();
  
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
             Kanthariya technologies
            </h1>
            <p className="text-1xl">
            Kanthariya: The future of technologies <br /> Cloud-based solutions to streamline your success
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              
              <a href="https://www.linkedin.com/company/kanthariya-technologies/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      onClick={() => {
                          navigate(link.link)
                      }}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      onClick={() => {
                        navigate(link.link)
                    }}
                   >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Partners
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 " 
 >                       <a href={link.link} target="blank">  <span>{link.title}</span> </a> 
                     

                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden  lg:flex lg:w-50" >
              <div className=" py-8 px-4 bg-[#030712] rounded-2xl">
                
                  <h1 className="text-2xl text-[#6153cd] font-bold text-center"> 
                     Leave a message for Us...</h1> 
                   <input type="text" className=" rounded"/>
                  <div  className="text-center m-2 rounded-lg  bg-[#6153cd] text-black">send</div>
             
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
};

export default Footer;

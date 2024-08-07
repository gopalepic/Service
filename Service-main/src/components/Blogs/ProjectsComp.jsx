import React from "react";
import Card from "./Cards";
import Img1 from "../../assets/website/campus2career.jpg";
import Img2 from "../../assets/website/futrueInter.jpg";
import Img3 from "../../assets/website/whea.jpg";
const projects = [
  {
    id: 1,
    image: Img1,
    title: "Campus 2 Career",
    description:
      "“Campus2Carrer.in is a platform dedicated to bridging the gap between academic learning and professional careers. It provides resources, training, and opportunities for students and graduates to enhance their skills, connect with...",
    author: "Someone",
    date: "April 22, 2022",
    ulr: "https://campus2career.in/",
  },
  {
    id: 2,
    image: Img2,
    title: "Future Intern",
    description:
      "“FutureIntern.in is a platform that connects students with internship opportunities in various industries. It offers a wide range of internships, allowing students to gain practical experience and valuable skills to kick-start their...",
    author: "Someone",
    date: "April 22, 2022",
      ulr: "https://Futureintern.in ",
  },
  {
    id: 3,
    image: Img3,
    title: "Womens Health And Education Alliance",
    description:
      "“WHEA, or Women's Health and Education Association, is a non-governmental organization dedicated to improving the lives of women and girls. Through various programs and initiatives, WHEA...",
    author: "Someone",
    date: "April 22, 2022",
    ulr: "https://Whea.in",
  },
];

const ProjectsComp = () => {
 
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <Card  key={item.id} {...item} 
              
              />
            ))
            
            }
          </div>
         
        </section>
      </div>
    </>
  );
};

export default ProjectsComp;

import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/website/campus2career.jpg";
import Img2 from "../../assets/website/futrueInter.jpg";
import Img3 from "../../assets/website/whea.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Campus 2 Career",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 22, 2022",
    ulr: "https://campus2career.in/",
  },
  {
    id: 2,
    image: Img2,
    title: "Future Inter",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
      ulr: "https://Futureintern.in ",
  },
  {
    id: 4,
    image: Img3,
    title: "Womens Health And Education Alliance",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    ulr: "https://Whea.in",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
         
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

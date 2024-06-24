import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description ,ulr}) => {
  return (
    <>
      {/* <div className=" dark:text-white group">
        <div className="overflow-hidden ">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
          <h1 className="line-clamp-1 text-2xl font-semibold"></h1>
          <p className="line-clamp-4 text-gray-500 text-sm"></p>
          <div className="flex justify-end pr-4 text-gray-500">
            <a href={ulr} target="_blank"><FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" /></a>
          </div>
        </div>
      </div> */}



      

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={ulr}>
        <img class="rounded-t-lg px-16" src={image} alt="No image" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href={ulr} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  );
};

export default BlogCard;

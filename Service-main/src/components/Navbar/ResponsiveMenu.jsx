import React from "react";
import Logo from "../../assets/website/kanthariya.png";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
            <img src={Logo} width="80px" style={{borderRadius:"50%"}}/>
          <div>
            <h1>Hello User</h1>
            {/* <h1 className="text-sm text-slate-500">Premium user</h1> */}
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
                </li>
            ))}
             <a href="/Contact">Contact Us</a>
          </ul>
        </nav>
      </div>
     
    </div>

  );
};

export default ResponsiveMenu;

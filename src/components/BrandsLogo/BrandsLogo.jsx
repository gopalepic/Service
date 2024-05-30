import React from "react";
import Brand1 from "../../assets/website/whea.jpg";
import Brand2 from "../../assets/website/anjali.jpg";
import Brand3 from "../../assets/website/campus2career.jpg";
import Brand4 from "../../assets/website/futrueInter.jpg";
import Brand5 from "../../assets/website/vanshika.jpg";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0">
        <h1 className="text-center">Powering next-gen companies</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;

import React from "react";
import Link from "next/link";

function CategoryCarousel() {
  return (
    <div className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl font-bold  text-center text-[#0052D4] font-[Aclonica] leading-tight mb-4 sm:mb-8">
        Categories you may like
      </h2>
      <div className="flex flex-wrap justify-center">
        <Link href={"/category-page"} className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col items-center p-2">
          <img
            src="/category/download1.jpg"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg   mt-2 sm:mt-4 font-[Aclonica]">
            Lehenga Choli
          </p>
        </Link>
        <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col items-center p-2">
          <img
            src="/category/download2.jpg"
            alt="Saree"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg   mt-2 sm:mt-4 font-[Aclonica]">
            Saree
          </p>
        </div>
        <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col items-center p-2">
          <img
            src="/category/download3.png"
            alt="Salwar Kameez"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg   mt-2 sm:mt-4 font-[Aclonica]">
            Salwar Kameez
          </p>
        </div>
        <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col items-center p-2">
          <img
            src="/category/download4.png"
            alt="Kurtis"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg   mt-2 sm:mt-4 font-[Aclonica]">
            Kurtis
          </p>
        </div>
        <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full flex flex-col items-center p-2">
          <img
            src="/category/download5.png"
            alt="Gowns"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg   mt-2 sm:mt-4 font-[Aclonica]">
            Gowns
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;

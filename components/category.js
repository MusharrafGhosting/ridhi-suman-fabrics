import React from "react";
import Link from "next/link";

function CategoryCarousel() {
  return (
    <div className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-[Aclonica] leading-tight mb-4 sm:mb-8">
        Categories you may like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download1.jpg"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Kurti</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download2.jpg"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Suit</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download3.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Sarees</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download5.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Nighty</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download5.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Lehanga</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download5.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Gown</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download5.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Dupatta</p>
        </Link>

        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/category-image/bluses.jpg"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">Bluses</p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download4.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">
            Readymade Pakistani
          </p>
        </Link>
        <Link
          href={"/category-page"}
          className="flex flex-col items-center p-2"
        >
          <img
            src="/category/download5.png"
            alt="Lehenga Choli"
            className="rounded-full w-full object-cover aspect-square"
          />
          <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">
            Leggings & Plazzo
          </p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCarousel;

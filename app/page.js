"use client"
import Image from "next/image";
import Nav from "@/components/Nav";
import OffBanner from "@/components/OffBanner.jsx";
import { Carousel } from "@material-tailwind/react";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="overflow-x-hidden bg-[#FF512F] py-1 w-full">
        <div className=" animate-marquee whitespace-nowrap ">
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            2
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            3
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            4
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            5
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            6
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            7
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            8
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            9
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            10
          </span>
        </div>
      </div>
     
      <OffBanner />
    </main>
  );
}

import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
function Nav() {
  return (
    <nav className="block w-full   px-6 py-3 mx-auto text-white bg-black   shadow-md   border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex flex-col items-center justify-between text-blue-gray-900">
        <div className="flex items-center space-x-4">
          <a href="tel:+919334079737" className="flex items-center text-sm">
            <span className="flex gap-1 items-center">
              <IoCall color="green" fontSize={23} />
            </span>
            <span className="ml-1">+91 9334079737</span>
          </a>
          <a
            href="mailto:musharrafjamal92@gmail.com"
            className="flex items-center text-sm"
          >
            <span className="flex gap-1 items-center">
              <IoMailOutline color="orange" fontSize={23} />
            </span>
            <span className="ml-1">musharrafjamal92@gmail.com</span>
          </a>
        </div>

        <div className="hidden  lg:flex space-x-4">
          <span className="text-sm">Free shipping on orders &gt; INR 1499</span>
          <span className="border-l border-gray-300 h-4"></span>
          <span className="text-sm">25000+ Designs</span>
          <span className="border-l border-gray-300 h-4"></span>
          <span className="text-sm">Made To Measure</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

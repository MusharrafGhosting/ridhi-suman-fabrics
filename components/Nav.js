import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

function Nav() {
  return (
    <>
      <nav className="block w-full   px-6 py-3 mx-auto text-white bg-black   shadow-md   border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex lg:flex-row md:flex-row flex-col  items-center justify-between text-blue-gray-900">
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 ">
            <a href="tel:+919334079737" className="flex items-center text-sm">
              <span className="flex gap-1 items-center ">
                <IoCall color="green" fontSize={23} /> +91 9334079737
              </span>
            </a>
            <a
              href="mailto:musharrafjamal92@gmail.com"
              className="flex items-center text-sm"
            >
              <span className="flex gap-1 items-center">
                <IoMailOutline color="orange" fontSize={23} />{" "}
                musharrafjamal92@gmail.com
              </span>
            </a>
          </div>
          <span className="hidden">Privacy Policy</span>
          <span className="hidden">T&C</span>

          <div className="hidden  lg:flex space-x-4">
            <span className="text-sm">
              Free shipping on orders &gt; INR 1499
            </span>
            <span className="border-l border-gray-300 h-4"></span>
            <span className="text-sm">25000+ Designs</span>
            <span className="border-l border-gray-300 h-4"></span>
            <span className="text-sm">Made To Measure</span>
          </div>
        </div>
      </nav>
      <nav className="block w-full   px-4 py-2 mx-auto text-white  shadow-md   border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-blue-gray-900">
          <Link
            href={"/"}
            className="mr-4 cursor-pointer font-extrabold py-1.5 lg:ml-2"
          >
            <img
              src="/ridhi.png"
              alt="logo"
              className="cursor-pointer w-40 h-7 object-cover"
            />
          </Link>
          <div className="items-center hidden gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max">
              <div className="relative h-10 w-full min-w-[288px] flex">
                <input
                  type="search"
                  placeholder="Search"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pl-9 pr-12 font-sans text-sm font-normal text-black placeholder-blue-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-blue-gray-300 focus:!border-t-transparent focus:outline-none transition-all placeholder:text-blue-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 peer-focus:leading-tight peer-disabled:text-transparent"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-blue-gray-500"></label>
                <div className="absolute right-3 top-[8px]">
                  <IoIosSearch color="gray" fontSize={23} />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <IoHeartCircleSharp color="red" fontSize={23} />
                <Link href={"/"} className=" text-black">
                  {" "}
                  Wishlist
                </Link>
              </li>
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <CiShop color="blue" fontSize={23} />
                <Link href={"/"} className=" text-black">
                  {" "}
                  Shop
                </Link>
              </li>
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <IoCartOutline color="red" fontSize={23} />
                <Link href={"/"} className=" text-black">
                  {" "}
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-4">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
            />
            <div>
              <h6 class="block font-sans text-base text-black antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                Atul Kumar
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-green-400">
                Online
              </p>
            </div>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;

"use client";
import Nav from "@/components/Nav";
import Footer from "../components/footer";
import OffBanner from "@/components/OffBanner";
import Testimonial from "../components//testimonial";
import Category from "../components/category";
import { useState, useEffect } from "react";
import ProductCarousel from "../components/ProductCarousel";
import ProductList from "../components/ProductList";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(1);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const products = [
    {
      id: 1,
      image: "/category/download (1).jpg",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 2,
      image: "/category/download (2).jpg",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 3,
      image: "/category/image1.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 4,
      image: "/category/image2.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 5,
      image: "/category/image3.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
  ];
  return (
    <main>
      <Nav />
      
      <div className="flex">
        <div className="w-1/4 lg:pt-3 lg:pr-3 lg:pl-3 pt-2 pl-2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={98}
            totalSlides={products.length}
            visibleSlides={visibleSlides}
            isPlaying={true}
            interval={5000}
            infinite={true}
          >
            <Slider>
              {products.map((product, index) => (
                <Slide index={index} key={product.id}>
                  <div className="flex flex-col items-center bg-white rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full lg:h-[30rem] md:h-80   object-cover rounded-lg"
                    />
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <div className="w-3/4 p-3 ">
          <img
            src="/category/hero-banner.jpg" // Update the path here
            className="  rounded-lg"
            alt="Salwar Kameez Banner"
          />
        </div>
      </div>

      <Category />
      <ProductList />
      <OffBanner />

      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <div className="flex w-full">
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Salwar Kameez Banner"
        />
      </div>
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Saree Banner"
        />
      </div>
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Lehenga Banner"
        />
      </div>
    </div>
      <Testimonial />
      <Footer />
    </main>
  );
}

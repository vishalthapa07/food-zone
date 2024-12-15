"use client";

import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [mainImage, setMainImage] = useState("lg-4.png");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = (image: string) => {
    setIsAnimating(true); // Start animation
    setMainImage(image); // Immediately update the image
    setTimeout(() => setIsAnimating(false), 300); // End animation after the transition
  };

  const handleMouseLeave = () => {
    setMainImage("lg-1.png"); // Default image
    setIsAnimating(false);
  };
  return (
    <section>
      <Navbar />
      <section className="relative flex flex-col lg:flex-row h-[50rem] my-1 w-full">
        <div className="h-full grid grid-cols-1">
          <div className="flex items-end">
            <h1 className="text-darkBlack1 font-bold text-[4rem] lg:text-[9rem] leading-[4rem] lg:leading-[7.5rem]">
              <span className={playfairDisplay.className}>Food Zone</span>
            </h1>
          </div>
          <div className="flex ml-6 md:ml-12 pt-6">
            <div>
              <sup>
                <sup className="mr-2 text-lightGray2">___________</sup>
              </sup>
            </div>
            <div>
              <p className="text-lightGray2 text-xs md:text-lg uppercase w-80">
                Norem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="flex 2xl:hidden h-[60px] md:h-[80px] w-[258px] md:w-[358px] z-10 mt-2 rounded-full uppercase items-center justify-center bg-orange1 text-white1 font-bold text-base md:text-xl">
            $20{" "}
            <span className="px-2">
              <sup>___________</sup>
            </span>
            order now
          </div>
        </div>

        <div>
          <img
            src={mainImage}
            alt="food-item"
            className={`h-auto lg:absolute inset-0 m-auto  z-10 ml-0 lg:ml-60 transition-transform duration-300 ease-in-out ${
              isAnimating
                ? "transform scale-50 rotate-45 opacity-0"
                : "transform scale-100 rotate-0 opacity-100"
            }`}
          />
          <div className="hidden 2xl:flex h-[80px] w-[358px] z-20 rounded-full uppercase items-center justify-center absolute m-auto mb-4 bottom-96 md:bottom-36 lg:bottom-0 ml-20 md:ml-44 bg-orange1 text-white1 font-bold text-base md:text-xl">
            $20{" "}
            <span className="px-2">
              <sup>___________</sup>
            </span>
            order now
          </div>
        </div>

        <div className="h-full flex flex-col w-full justify-center gap-6 py-6">
          <Card
            image="sm-1.png"
            title="Caviar Express"
            description="Norem ipsum dolor sit amet, consectetur"
            onMouseEnter={() => handleMouseEnter("lg-1.png")}
            onMouseLeave={handleMouseLeave}
          />
          <Card
            image="sm-2.png"
            title="Blue Berry"
            description="Norem ipsum dolor sit amet, consectetur"
            onMouseEnter={() => handleMouseEnter("lg-2.png")}
            onMouseLeave={handleMouseLeave}
          />
          <Card
            image="sm-3.png"
            title="Beef Steak"
            description="Norem ipsum dolor sit amet, consectetur"
            onMouseEnter={() => handleMouseEnter("lg-3.png")}
            onMouseLeave={handleMouseLeave}
          />
          <Card
            image="sm-4.png"
            title="Strawberry Finx"
            description="Norem ipsum dolor sit amet, consectetur"
            onMouseEnter={() => handleMouseEnter("lg-4.png")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </section>
    </section>
  );
}

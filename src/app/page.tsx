"use client";

import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Navbar />
      <section className="absolute -z-10 top-16 lg:top-32 flex flex-col lg:flex-row h-[50rem]">
        <div className="h-full grid grid-cols-1">
          <div className="flex items-end">
            <h1 className="text-darkBlack1 font-bold text-[7rem] lg:text-[9rem] leading-[7.5rem]">
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
              <p className="text-lightGray2 text-lg uppercase w-80">
                Norem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-orange-500">2</div>
        <div className="h-full bg-yellow-500">3</div>
      </section>
    </section>
  );
}

"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />

      <section className="flex h-[50rem]">
        <div className="h-full grid grid-cols-1 bg-red-500">
          <div className="flex items-end">
            <h1 className="text-darkBlack1 font-bold text-[9rem]">Food Zone</h1>
          </div>
          <div>
            <p>
              <sup>
                <sup className="mr-2">____</sup>
              </sup>
              Norem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className="h-full w-full bg-orange-500">2</div>
        <div className="h-full bg-yellow-500">3</div>
      </section>
    </section>
  );
}

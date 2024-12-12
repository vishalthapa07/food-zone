"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Breakfast", "Lunch", "Dinner"];

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-4 md:py-6 lg:py-10 mr-4 md:mr-16 lg:mr-28">
      <div className="flex justify-between">
        <div>
          <img src="logo.png" alt="logo" />
        </div>

        <div className="hidden sm:flex items-center text-darkGray gap-24">
          <div>
            <Link color="foreground" href="#">
              Breakfast
            </Link>
          </div>
          <div>
            <Link
              className="text-darkBlack2 font-bold"
              href="#"
              aria-current="page"
            >
              Lunch
            </Link>
          </div>
          <div>
            <Link color="foreground" href="#">
              Dinner
            </Link>
          </div>
          <div>
            <img src="cart.png" alt="cart" />
          </div>
        </div>
        <div className="flex items-center md:hidden">
          {isMenuOpen ? (
            <IoCloseOutline
              onClick={closeMenu}
              className="text-darkBlack2 text-2xl cursor-pointer"
            />
          ) : (
            <CiMenuFries
              onClick={openMenu}
              className="text-darkBlack2 text-xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="grid grid-cols-1 gap-4 my-6 p-4 rounded-md shadow-xl bg-opacity-65 backdrop-blur-md bg-darkBlack2">
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`}>
              <Link className="w-full" href="#">
                <span className="text-white hover:opacity-60">{item}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

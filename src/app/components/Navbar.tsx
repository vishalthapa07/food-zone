import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const NavbarT = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Breakfast", "Lunch", "Dinner"];

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-4 md:py-6 lg:py-12 mr-4 md:mr-16 lg:mr-28">
      <div className="flex justify-between">
        <div>
          <img src="logo.png" alt="logo" />
        </div>

        <div className="hidden sm:flex items-center text-darkGray gap-20">
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

      {/* <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="min-h-full w-fll gap-0"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <img src="logo.png" alt="logo" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex text-darkGray gap-16"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" href="#">
              Breakfast
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className="text-darkBlack2" href="#" aria-current="page">
              Lunch
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Dinner
            </Link>
          </NavbarItem>
          <NavbarItem>
            <img src="cart.png" alt="cart" />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar> */}
    </nav>
  );
};

export default NavbarT;

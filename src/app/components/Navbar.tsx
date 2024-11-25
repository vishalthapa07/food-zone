import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const NavbarT = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Breakfast", "Lunch", "Dinner"];

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <nav className="py-4 md:py-6 lg:py-12 mr-4 md:mr-16 lg:mr-28">
      <div className="flex justify-between">
        <div>
          <img src="logo.png" alt="logo" />
        </div>

        <div className="hidden sm:flex text-darkGray gap-20">
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
        <div className="flex items-center md:hidden" onClick={handleMenu}>
          <CiMenuFries className="text-darkBlack2 text-xl cursor-pointer" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="grid grid-cols-1 gap-4 my-4">
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`}>
              <Link className="w-full" href="#">
                <span className=" hover:opacity-60 hover:scale-150">
                  {item}
                </span>
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

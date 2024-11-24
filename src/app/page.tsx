"use client";

import { NextUIProvider } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Breakfast", "Lunch", "Dinner"];
  return (
    <NextUIProvider>
      <nav className="pt-0 md:pt-4">
        <Navbar onMenuOpenChange={setIsMenuOpen} className="min-h-full gap-0">
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
        </Navbar>
      </nav>

      <section className="flex items-center h-[50rem]">
        <div className="h-full bg-red-500">1</div>
        <div className="h-full w-full bg-orange-500">2</div>
        <div className="h-full bg-yellow-500">3</div>
      </section>
    </NextUIProvider>
  );
}

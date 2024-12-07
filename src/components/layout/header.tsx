"use client";
import Link from "next/link";
import Container from "../ui/container";
import Logo from "../ui/logo";
import { useState } from "react";
import { MenuMobile, Shopping } from "../ui/icon";
import HeaderMobile from "./header-mobile";
import Button from "../ui/button";
import SearchInput from "../ui/search-input";
import { navBarList } from "@/assets/data";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="flex shadow-md sm:px-6 px-4 h-20 tracking-wide relative z-50">
        <Container className="flex w-full px-0">
          <div className="flex flex-wrap items-center lg:gap-y-2 w-full gap-5">
            <Logo />
            <div className="hidden md:inline-flex items-center">
              {navBarList?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-base font-semibold hover:text-primary duration-300 cursor-pointer px-4"
                >
                  {item?.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
              <SearchInput />
              <div className="flex items-center sm:space-x-8 space-x-6">
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative">
                    <Shopping />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </div>
                  <span className="text-[13px] font-semibold text-[#333]">
                    Wishlist
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative">
                    <Shopping />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </div>
                  <span className="text-[13px] font-semibold text-[#333]">
                    Cart
                  </span>
                </div>
                <Button className="max-lg:hidden">SignIn</Button>
                <MenuMobile
                  className="inline-flex md:hidden cursor-pointer text-2xl text-blue-600 hover:text-blue-500 duration-300 ease-out"
                  onClick={() => setShowMenu(true)}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
      <HeaderMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Header;

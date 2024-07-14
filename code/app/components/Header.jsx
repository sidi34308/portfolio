"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header className="">
      <nav className="z-50">
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center md:gap-8 ${
            isMenuOpen ? "block" : "hidden"
          } top-0 z-10 transition duration-1000 ${
            visible ? "translate-y-0" : "-translate-y-[10rem]"
          } md:block`}
        >
          <li className="">
            <a href="#work" className="">
              Work
            </a>
          </li>
          <li className="">
            <a href="#about" className="">
              About Me
            </a>
          </li>
          <li className="">
            <a href="#contact" className="">
              Contact Me
            </a>
          </li>
          <li className="p-2">
            <a href="#work-together" className="">
              Let’s Work Together
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

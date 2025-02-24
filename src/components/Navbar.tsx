import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[9999] top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-[#222b3a] backdrop-blur-md" : "bg-slate-900"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="logo-bg"></div> {/* Logo styling here */}
          <span className="self-center text-xl font-bold whitespace-nowrap text-white">
            CRICOS Marketing
          </span>
        </Link>

        {/* Buttons and menu toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="https://linkedin.com" target="_blank">
            <button
              type="button"
              className="text-white bg-[#161d24] focus:outline-none font-medium rounded-2xl text-sm px-4 py-3 text-center"
            >
              About Us
            </button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="menu-toggle text-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Links for desktop */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-center border text-white border-gray-300 rounded-lg w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col w-full p-2 mt-4 font-medium border border-gray-500 rounded-lg bg-slate-900 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent md:justify-center">
            {navItems.map((navItem, idx) => (
              <li key={idx} className="w-full">
                <Link
                  to={navItem.link}
                  className="block py-2 px-3 text-left rounded hover:bg-gray-100 md:hover:bg-[#192dac] md:hover:text-white md:text-white dark:hover:bg-blue-900"
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

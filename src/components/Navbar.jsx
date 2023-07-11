import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <header className="relative lg:fixed bg-[#18191B] lg:bg-transparent lg:top-0 h-[75px] lg:left-0 z-[1] ease-in duration-300 w-full lg:overflow-hidden ">
      <div
        className={
          color
            ? "bg-dark border-b h-full border-none flex justify-between items-center text-white md:px-28 px-5"
            : "lg:border-b h-full border-light flex justify-between items-center text-white md:px-28 px-5"
        }
      >
        <img src={logo} alt="Logo" />
        <ul className="hidden lg:flex gap-8 text-[18px] font-roboto">
          <li className="hover:text-brownie transition ease-in-out delay-300">
            <NavLink>Home</NavLink>
          </li>
          <li className="hover:text-brownie transition ease-in-out delay-300">
            <NavLink>Services</NavLink>
          </li>
          <li className="hover:text-brownie transition ease-in-out delay-300">
            <NavLink>Blog</NavLink>
          </li>
          <li className="hover:text-brownie transition ease-in-out delay-300">
            <NavLink>Contact</NavLink>
          </li>
        </ul>
        <button className="hidden transition ease-in-out group hover:bg-brownie hover:text-black hover:border-brownie lg:flex items-center py-1 px-4 border border-light tracking-[2px] rounded-[2px]">
          BOOKING
          <span>
            <MdOutlineKeyboardArrowRight className="text-brownie text-[25px] font-semibold group-hover:text-black" />
          </span>
        </button>

        {/* Hamburger toggle */}
        <div className="lg:hidden text-white" onClick={handleNav}>
          {nav ? <IoMdClose size={30} /> : <HiMenuAlt1 size={30} />}
        </div>

        {/* Mobile Dropdown */}
        <div
          className={
            nav
              ? "absolute transition ease-in-out left-0 top-[85%] w-full px-4 md:px-28 py-2 flex flex-col text-xl z-[1000] bg-[#18191B]"
              : "absolute left-[-100%]"
          }
        >
          <ul className="text-[15px] font-medium pb-10 pt-4">
            <li className="py-[10px] border-b text-[#eceff3] border-[#333]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-[10px] border-b text-[#eceff3] border-[#333]">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="py-[10px] border-b text-[#eceff3] border-[#333]">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="py-[10px] border-b text-[#eceff3] border-[#333]">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="border-b py-5 border-light flex justify-between items-center text-white md:px-28 px-5">
      <img src={logo} alt="Logo" />
      <ul className="flex gap-8 text-[18px] font-roboto">
        <li className="hover:text-brownie">
          <NavLink>Home</NavLink>
        </li>
        <li className="hover:text-brownie">
          <NavLink>Services</NavLink>
        </li>
        <li className="hover:text-brownie">
          <NavLink>Blog</NavLink>
        </li>
        <li className="hover:text-brownie">
          <NavLink>Contact</NavLink>
        </li>
      </ul>
      <button className="group hover:bg-brownie hover:text-black hover:border-brownie flex items-center py-1 px-4 border border-light tracking-[2px] rounded-[2px]">
        BOOKING
        <span>
          <MdOutlineKeyboardArrowRight className="text-brownie text-[25px] font-semibold group-hover:text-black" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;

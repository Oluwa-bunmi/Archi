import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="px-5 md:px-28 text-[16px] font-light grid gap-8 lg:grid-cols-4 bg-[#111] text-[#ccc] py-20">
        <div className="col-span-2">
          <img src={logo} alt="logo" className="mb-[20px]" />
          <p>
            We are team based in Los Angeles. Our expertise on Interior Design.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </p>
        </div>
        <ul>
          <li className="mb-[20px] text-[20px] font-garamond font-semibold">
            Our Rooms
          </li>
          <li className="border-b border-[#222] py-[2px]">
            <Link>Standart Room </Link>
          </li>
          <li className="border-b border-[#222] py-[2px]">
            <Link>Deluxe Room </Link>
          </li>
          <li className="border-b border-[#222] py-[2px]">
            <Link>Luxury Room </Link>
          </li>
          <li className="border-b border-[#222] py-[2px]">
            <Link>President Room </Link>
          </li>
        </ul>
        <ul>
          <li className="mb-[20px] text-[20px] font-garamond font-semibold">
            Contact Us
          </li>
          <li className="py-[2px] border-b border-[#222]">
            100 S Main St, Los Angeles, CA
          </li>
          <li className="py-[2px] border-b border-[#222]">
            <b className="text-[#bf9156] mr-4"> Phone: </b> (208) 000 0000
          </li>
          <li className="py-[2px] border-b border-[#222]">
            <b className="text-[#bf9156] mr-4"> Email: </b>
            contact@archi-interior.com
          </li>
        </ul>
      </footer>
      <div className="bg-[#0b0b0b] font-roboto text-[16px] font-light flex justify-between px-5 md:px-28 py-[30px] text-[#ccc]">
        <p>
          © Copyright 2023 - Archi by
          <span className="text-[#bf9156] "> Jummy</span>
        </p>
        <div className="flex items-center gap-4 text-xl">
            
          <Link className="hover:bg-[#bf9156] hover:text-black hover:py-[3px] smooth"><BiLogoFacebook /></Link>
          <Link className="hover:bg-[#bf9156] hover:text-black"><BiLogoTwitter /></Link>
          <Link className="hover:bg-[#bf9156] hover:text-black"><BiLogoInstagram /></Link>
          <Link className="hover:bg-[#bf9156] hover:text-black"><BiLogoWhatsapp /></Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

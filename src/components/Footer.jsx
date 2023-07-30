import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiSolidChevronUp,
} from "react-icons/bi";
import logo from "../assets/logo.png";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle the scroll behavior and update the button visibility state
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Show the button after scrolling down 300 pixels (you can adjust this value)
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="px-5 md:px-28 text-[16px] font-light grid gap-16 lg:gap-8 lg:grid-cols-4 bg-[#111] text-[#ccc] py-20">
        <div className="lg:col-span-2">
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
      </div>
      <div className="bg-[#0b0b0b] font-roboto text-[16px] font-light lg:flex justify-between px-5 md:px-28 py-[30px] text-[#ccc]">
        <p>
          © Copyright 2023 - Archi by
          <span className="text-[#bf9156] "> Jummy</span>
        </p>
        <div className="flex items-center gap-4 text-xl mt-4 sm:mt-7 lg:mt-0">
          <Link className="hover:bg-[#bf9156] hover:text-black transition-[0.5s] p-1">
            <BiLogoFacebook />
          </Link>
          <Link className="hover:bg-[#bf9156] hover:text-black transition-[0.5s] p-1">
            <BiLogoTwitter />
          </Link>
          <Link className="hover:bg-[#bf9156] hover:text-black transition-[0.5s] p-1">
            <BiLogoInstagram />
          </Link>
          <Link className="hover:bg-[#bf9156] hover:text-black transition-[0.5s] p-1">
            <BiLogoWhatsapp />
          </Link>
        </div>
      </div>
      <Link
        className={`scroll-to-top-button ${
          showButton ? "show" : "hidden"
        } ${`text-[#ccc] flex items-center text-[22px] bg-[#bf9156] w-[32px] h-[32px]
        rounded-sm bottom-[40px] right-[40px] fixed z-[999]`}`}
        onClick={scrollToTop}
      >
        {/* text-[#ccc] flex items-center text-[22px] bg-[#bf9156] w-[32px] h-[32px]
        rounded-sm bottom-[40px] right-[40px] fixed z-[999] */}
        <BiSolidChevronUp className="mx-[5px]" />
      </Link>
    </>
  );
};

export default Footer;

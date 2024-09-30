import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
const Carousel = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "../src/assets/HeroImageOne.jpg"
  );
  const [displayText, setDisplayText] = useState(
    "Enjoy a Luxury<br>Experience"
  );

  const handleClick = () => {
    if (
      backgroundImage ===
      "../src/assets/HeroImageOne.jpg"
    ) {
      setBackgroundImage("../src/assets/HeroImageTwo.jpg");
      setDisplayText("Your Perfect<br>Healing");
    } else {
      setBackgroundImage("../src/assets/HeroImageOne.jpg");
      setDisplayText("Enjoy a Luxury<br>Experience");
    }
  };
  return (
    <section
      className="bg-cover bg-center h-full duration-700"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />

      <div className="flex flex-col gap-9 items-center justify-center h-screen">
        <div className="absolute -translate-x-0 translate-y-[-50%] left-1 sm:left-5 text-2xl rounded-full sm:p-2 sm:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={handleClick} />
        </div>
        <div className="flex gap-2 text-[#ffa800]" onClick={handleClick}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p
          className="text-[41px] md:text-[55px] lg:text-[84px] text-white font-thin font-garamond leading-[38px] md:leading-[52px] lg:leading-[79px] text-center"
          dangerouslySetInnerHTML={{ __html: displayText }}
        />
        <button
          onClick={() => {
            window.location.href = "/booking";
          }}
          className="text-white transition ease-in-out flex items-center py-1 px-4 border border-light tracking-[2px] rounded-[2px] group hover:text-black hover:bg-white"
        >
          BOOK NOW
          <span>
            <MdOutlineKeyboardArrowRight className="text-brownie text-[25px] font-semibold group-hover:text-black" />
          </span>
        </button>
        <div className="absolute -translate-x-0 translate-y-[-50%] right-0.5 sm:right-5 text-2xl rounded-full sm:p-2 sm:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

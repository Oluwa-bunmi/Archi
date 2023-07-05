import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
const Carousel = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://www.madebydesignesia.com/themes/archi/images-hotel/slider/1.jpg"
  );
  const [displayText, setDisplayText] = useState(
    "Enjoy a Luxury<br>Experience"
  );

  const handleClick = () => {
    if (
      backgroundImage ===
      "https://www.madebydesignesia.com/themes/archi/images-hotel/slider/1.jpg"
    ) {
      setBackgroundImage(
        "https://www.madebydesignesia.com/themes/archi/images-hotel/slider/2.jpg"
      );
      setDisplayText("Your Perfect<br>Healing");
    } else {
      setBackgroundImage(
        "https://www.madebydesignesia.com/themes/archi/images-hotel/slider/1.jpg"
      );
      setDisplayText("Enjoy a Luxury<br>Experience");
    }
  };
  return (
    <section
      className="bg-cover bg-center duration-700"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />

      <div className="flex flex-col gap-9 items-center justify-center h-screen">
        <div className="absolute -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
          className="text-[84px] text-white font-thin font-garamond leading-[79px] text-center"
          dangerouslySetInnerHTML={{ __html: displayText }}
        />
        <button className="text-white flex items-center py-1 px-4 border border-light tracking-[2px] rounded-[2px] group hover:text-black hover:bg-white">
          BOOK NOW
          <span>
            <MdOutlineKeyboardArrowRight className="text-brownie text-[25px] font-semibold group-hover:text-black" />
          </span>
        </button>
        <div className="absolute -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

import { AiFillStar } from "react-icons/ai";
import videoBg from "../assets/frame.mp4";

const Vid = () => {
  return (
    <div className="w-full h-full relative md:px-28 px-5">
      <video
        src={videoBg}
        className="absolute top-0 left-0 object-cover h-full w-full"
        autoPlay
        loop
        muted
      />
      <div className="absolute z-[1] top-0 left-0 bg-overlay w-full h-full"></div>

      <div className="relative z-[1] flex flex-col justify-center items-center h-screen w-full md:w-[68%] lg:w-[54%] mx-auto">
        <h3 className="text-brownie font-garamond text-[20px] font-semibold">
          The Archi Hotel
        </h3>
        <h1 className="text-white text-center font-garamond text-[40px] sm:text-[48px] font-semibold leading-[1.2em]">
          Enjoy Luxury Hotel Experience Like Never Before
        </h1>
        <div className="flex gap-1 text-[#ffa800]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Vid;

import { BsDot } from "react-icons/bs";
import { TbPlaystationCircle } from "react-icons/tb";
import { PiCircleDashedFill } from "react-icons/pi";
import { BsRecordCircleFill } from "react-icons/bs";
import { BsRecordCircle } from "react-icons/bs";
// import { FaDotCircle } from "react-icons/fa";
// import { GrEmptyCircle } from "react-icons/gr";

const Feautures = () => {
  return (
    <div className="bg-creamy md:px-28 px-5 py-20">
      <h1 className="text-[48px] font-garamond font-semibold text-center">
        Features Highlight
      </h1>
      <div className="flex justify-center items-center gap-2 mt-2 mb-5">
        <hr className="w-[300px] border-borderHr " />
        <BsDot className="text-brownie text-2xl" />
        <hr className="w-[300px] border-borderHr" />
      </div>
      <div className="grid lg:grid-cols-3 ">
        <div className="flex items-start gap-3">
          <div className="w-[80px] h-[80px] rounded-full flex items-center p-5 bg-[#bf9156] text-white">
            <PiCircleDashedFill className="text-[50px]" />
          </div>
          <div>
            <h3 className="text-[#222] text-[24px] font-garamond font-semibold">
              Swimming Pool
            </h3>
            <p className="text-[#606060] leading-[1.8em] font-light font-roboto text-[17px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feautures;

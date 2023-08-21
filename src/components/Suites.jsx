import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { suitesInfo } from "../constants/data";
const Suites = () => {
  return (
    <section className="bg-[#F7F5F0] md:px-28 px-5 py-20">
      <h1 className="text-[45px] leading-[1.2em] sm:text-[48px] font-garamond font-semibold text-center">
        Rooms & Suites
      </h1>
      <div className="flex justify-center items-center gap-2 mt-2 mb-5">
        <hr className="w-[300px] border-borderHr " />
        <BsDot className="text-brownie text-2xl" />
        <hr className="w-[300px] border-borderHr" />
      </div>
      <div className="grid gap-7 lg:grid-cols-3">
        {suitesInfo.map((item, i) => (
          <div className="relative h-[350px] overflow-hidden group container" key={i}>
            <Link to={item.location} className="absolute w-full min-h-[100%] z-[1] bg-borderHr">
              <div className="slideIn m-[30px] w-[83%] text-white absolute bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-dark group-hover:m-0 group-hover:p-[30px]">
                <p className="font-garamond text-[24px] mt-6 lg:mt-0 xl:mt-6">{item.price}</p>
                <div className="flex gap-2 border-b items-center border-light pb-[10px]">
                  <BiCircle className="text-[#bf9156] text-[28px] group-hover:text-white" />
                  <h2 className="font-garamond text-[24px] font-semibold">
                    {item.room}
                  </h2>
                </div>
                <div className="hidden group-hover:block text-[17px] font-light leading-[30px] font-roboto">
                  <p className="mt-4">{item.details}</p>
                </div>
              </div>
            </Link>
            <div
              className="absolute w-[110%] h-[110%] ml-[-5%] suite group-hover:ml-0 smooth"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suites;

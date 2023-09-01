import { ImCheckmark } from "react-icons/im";
import { luxuryFacilities } from "../constants/data";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
const Luxury = () => {
  return (
    <>
      <Pagination />
      <section className="text-[#606060] text-[16px] font-roboto font-light leading-[1.8em] grid grid-cols-3 gap-14 items-center md:px-28 px-5 py-[90px] bg-[#F7F5F0]">
        <div className="col-span-2">
          <h3 className="text-brownie font-garamond text-[20px] font-semibold">
            The Archi Hotel
          </h3>
          <h1 className="text-[#222] font-garamond text-[40px] sm:text-[48px] font-semibold leading-[1.2em]">
            Luxury Room
          </h1>
          <p>
            Lorem ipsum dolore voluptate dolor consectetur qui magna veniam
            deserunt est dolor tempor ex esse tempor adipisicing ut et amet sed
            et est aliquip cupidatat quis dolor consectetur velit laboris
            pariatur nisi adipisicing adipisicing cillum dolore consectetur
            dolor ea velit dolor deserunt in dolore aute sed amet dolore ad
            aliqua cillum nisi irure culpa aliquip culpa culpa quis nisi dolore
            pariatur ullamco nostrud reprehenderit anim voluptate dolore aliquip
            est in magna minim officia proident officia ad consequat sint cillum
            et nisi incididunt duis non laborum occaecat.
          </p>
          <p className="my-[20px]">
            Lorem ipsum esse adipisicing eiusmod culpa sed reprehenderit ut
            cupidatat in sint sed officia in irure proident tempor duis in esse
            quis aute ex. Excepteur et commodo in incididunt quis cupidatat aute
            labore ea exercitation nulla elit elit pariatur non nisi
            reprehenderit officia sit adipisicing velit.
          </p>
          <Link className="tracking-[2px] text-white w-fit bg-brownie py-[10px] px-5 text-[12px] font-medium hover:bg-[#b89970]">
            BOOK NOW
          </Link>
        </div>
        <div>
          <div className="bg-lightBg text-center py-[30px] rounded-[2px]">
            <h1 className=" text-[64px] font-garamond font-semibold text-brownie">
              <span> $49</span>
              <span className="text-xl font-normal font-roboto">/night</span>
            </h1>
          </div>
          <h2 className="mt-[30px] mb-[15px] font-garamond text-[24px] text-[#222] font-semibold">
            Room Facilities
          </h2>
          <ul>
            {luxuryFacilities.map((item, i) => (
              <li className="flex items-center gap-3">
                <ImCheckmark className="text-brownie" />
                {item.point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Luxury;

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="px-5 md:px-28  text-[16px] font-light grid gap-8 lg:grid-cols-4 bg-[#111] text-[#ccc] pt-20 pb-9">
      <div className="col-span-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <br />
        <p>
          We are team based on Los Angeles. Our expertise on Interior Design.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
        </p>
      </div>
      {/* <div> */}
      <ul>
        <li className="mb-[20px] text-[20px] font-garamond font-semibold">
          Our Rooms
        </li>
        <li className="border-b border-[#222] py-[2px]">Standart Room</li>
        <li className="border-b border-[#222] py-[2px]">Deluxe Room</li>
        <li className="border-b border-[#222] py-[2px]">Luxury Room</li>
        <li className="border-b border-[#222] py-[2px]">President Room</li>
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
          <b className="text-[#bf9156] mr-4"> Email: </b> contact@archi-interior.com
        </li>
      </ul>
      {/* </div> */}
    </section>
  );
};

export default Footer;

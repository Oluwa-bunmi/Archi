import { useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { IoIosRadioButtonOn } from "react-icons/io";
const Pagination = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const getBackgroundImage = () => {
    if (activeButton === "button1") {
      return "url(../src/assets/deluxeOne.jpg)";
    } else if (activeButton === "button2") {
      return "url(../src/assets/deluxeTwo.jpg)";
    } else if (activeButton === "button3") {
      return "url(../src/assets/deluxeThree.jpg)";
    } else {
      return "url(../src/assets/deluxeOne.jpg)";
    }
  };
  const handleClick = () => {
    if (activeButton === "button1") {
      // Handle button 1 click
    } else if (activeButton === "button2") {
      // Handle button 2 click
    } else if (activeButton === "button3") {
      // Handle button 3 click
    }
  };
  return (
    <section
      className="bg-cover h-[297px] sm:h-[402px] lg:h-[550px] relative"
      style={{
        backgroundImage: getBackgroundImage(),
        animation: "slideFromRight 0.1s ease-in-out",
      }}
    >
      <div className="absolute z-[1] w-full h-full bg-roomsOverlay"></div>
      <Navbar />

      <div className="absolute w-full z-[1] bottom-[20px] flex justify-center gap-1 text-white">
        <button onClick={() => handleButtonClick("button1")}>
          {activeButton === "button1" ? (
            <IoIosRadioButtonOn />
          ) : (
            <BiRadioCircle size={20} />
          )}
        </button>
        <button onClick={() => handleButtonClick("button2")}>
          {activeButton === "button2" ? (
            <IoIosRadioButtonOn />
          ) : (
            <BiRadioCircle size={20} />
          )}
        </button>
        <button onClick={() => handleButtonClick("button3")}>
          {activeButton === "button3" ? (
            <IoIosRadioButtonOn />
          ) : (
            <BiRadioCircle size={20} />
          )}
        </button>
      </div>
    </section>
  );
};

export default Pagination;

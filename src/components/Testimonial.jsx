import React, { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [content, setContent] = useState({ heading: "", paragraph: "" });
  const contents = [
    {
      heading:
        "The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown, America",
      paragraph: "Benedict Mervine, Customer",
    },
    {
      heading:
        " They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there. staff",
      paragraph: "Doretta Mccourtney, Customer",
    },
    {
      heading:
        "I had a wonderful experience at the hotel. Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!",
      paragraph: "Carole Hunckler, Customer",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextButton = activeButton === 3 ? 1 : activeButton + 1;
      setActiveButton(nextButton);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeButton]);

  useEffect(() => {
    setContent(contents[activeButton - 1]);
  }, [activeButton]);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-20 lg:px-64">
      <FaQuoteLeft className="text-brownie text-2xl" />

      <h2
        className={`transition-opacity duration-500 text-[#f8f9fa] text-center leading-[1.5em] italic text-[32px] md:text-[35px] font-garamond tracking-normal  ${
          content ? "opacity-100" : "opacity-0"
        }`}
      >
        {content.heading}
      </h2>
      <p className="text-[16px] text-[#f8f9fa] font-roboto">
        {content.paragraph}
      </p>
      <div className="flex gap-[2px]">
        <BsDot
          className={`text-xl text-[#f8f9fa] cursor-pointer ${
            activeButton === 1 && "!text-brownie"
          }`}
          onClick={() => handleButtonClick(1)}
        />

        <BsDot
          className={`text-xl text-[#f8f9fa] cursor-pointer ${
            activeButton === 2 && "!text-brownie"
          }`}
          onClick={() => handleButtonClick(2)}
        />

        <BsDot
          className={`text-xl text-[#f8f9fa] cursor-pointer ${
            activeButton === 3 && "!text-brownie"
          }`}
          onClick={() => handleButtonClick(3)}
        />
      </div>
    </div>
  );
};

export default Testimonial;

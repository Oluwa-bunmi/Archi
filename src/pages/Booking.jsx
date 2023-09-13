import Header from "../components/Header";
import { suitesInfo } from "../constants/data";
import { useState } from "react";
const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const handleImageClick = (roomType) => {
    setSelectedRoom(roomType);
  };
  return (
    <>
      <Header />
      <div className="bg-bookingBg bg-cover bg-center">
        <h1 className="pt-[10rem] pb-[80px] text-[32px] text-[#eceff3] md:px-28 px-5 font-dosis tracking-[5px] font-light">
          BOOKING
        </h1>
      </div>
      <section className="bg-[#F7F5F0] py-[90px]">
        <section className="px-5 md:px-44">
          <h1>Choose room type</h1>
          <div className="grid grid-cols-3 text-center gap-5">
            {suitesInfo.map((item, i) => (
              <div
                key={i}
                onClick={() => handleImageClick(item.room)}
                className="transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.room}
                  className={`${
                    selectedRoom === item.room
                      ? "border-[12px] border-[#bf9156]"
                      : ""
                  }`}
                />
                <h3>{item.room}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </div>
          <div className="">
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="">Select a Room</option>
              {suitesInfo.map((item, i) => (
                <option key={i} value={item.room}>
                  {item.room}
                </option>
              ))}
            </select>
          </div>
        </section>
      </section>
    </>
  );
};

export default Booking;

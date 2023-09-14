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
          <h1 className="text-xl font-garamond font-semibold mb-5 text-[#222]">
            Choose room type
          </h1>
          <div className="grid grid-cols-3 text-center gap-5">
            {suitesInfo.map((item, i) => (
              <div
                key={i}
                onClick={() => handleImageClick(item.room)}
                className="transition-transform text-[#999] text-[18px]"
              >
                <img
                  src={item.image}
                  alt={item.room}
                  className={`${
                    selectedRoom === item.room
                      ? "border-[12px] border-[#bf9156]"
                      : "mb-[10px]"
                  }`}
                />
                <h3 className="font-normal font-roboto">{item.room}</h3>
                <h3
                  className={`${
                    selectedRoom === item.room
                      ? "text-[#333] font-bold"
                      : "font-bold"
                  }`}
                >
                  {item.price}
                </h3>
              </div>
            ))}
          </div>
          <form action="" className="mt-8">
            <section className="grid grid-cols-4 gap-5 text-base font-normal">
              <div>
                <label
                  htmlFor=""
                  className="text-[#222] text-xl font-garamond font-semibold"
                >
                  Check in
                </label>
                <br />
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full p-[10px] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#222] text-xl font-garamond font-semibold"
                >
                  Check Out
                </label>
                <br />
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#222] text-xl font-garamond font-semibold"
                >
                  Guests
                </label>
                <br />
                <select className="w-full p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr">
                  <option value="">1</option>
                  <option value="">1-3</option>
                  <option value="">1-6</option>
                </select>
              </div>

              <div className="">
                <label
                  htmlFor=""
                  className="text-[#222] text-xl font-garamond font-semibold"
                >
                  Room
                </label>
                <br />
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
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
            <section>
                
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default Booking;

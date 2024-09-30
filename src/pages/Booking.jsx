import { useFormik } from "formik";
// import { formSchema } from "./schemas";
import { bookingSchema } from "../schemas";
import Header from "../components/Header";
import { suitesInfo } from "../constants/data";
import { useState } from "react";
const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [roomPrice, setRoomPrice] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const handleImageClick = (roomType, price, guests) => {
    setSelectedRoom(roomType);
    // I used a regular expression to filter out non-numeric characters.parseInt is then used to convert the numeric part of the price to an integer
    const numericPrice = parseInt(price.replace(/\D/g, ""), 10);
    // Format the numeric price with commas
    setRoomPrice(numericPrice.toLocaleString());
    setNumberOfGuests(guests);
  };
  const initialValues = {
    full_name: "",
    email: "",
    phone_number: "",
  };
  const onSubmit = async (payload, actions) => {
    console.log(payload);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: bookingSchema,
    onSubmit,
  });
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
                onClick={() =>
                  handleImageClick(item.room, item.price, item.guests)
                }
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
          <form onSubmit={handleSubmit} className="mt-8">
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
                  className="w-full text-base font-roboto p-[10px] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
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
                  className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
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
                <select
                  value={numberOfGuests}
                  readOnly
                  className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                >
                  <option value="">Number of guests</option>
                  <option value="1">1</option>
                  <option value="1-3">1-3</option>
                  <option value="1-5">1-5</option>
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
                  readOnly
                  //   onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
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
            {/* <h3 className="mt-5">Enter your details</h3> */}
            <section className="grid grid-cols-2 gap-5">
              <div className="grid gap-5 mt-5">
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-[#222] text-xl font-garamond font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="Jane Doe"
                    value={values.full_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-[10px] text-base font-roboto text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr ${
                      errors.full_name && touched.full_name
                        ? "border border-red-500"
                        : ""
                    }`}
                  />
                  {errors.full_name && touched.full_name && (
                    <p className="text-red-500 text-right text-sm font-medium">
                      {errors.full_name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone_number"
                    className="text-[#222] text-xl font-garamond font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    placeholder="08012345678"
                    className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                  />
                  {errors.phone_number && touched.phone_number && (
                    <p className="text-red-500 text-right text-sm font-medium">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-5 mt-5">
                <div>
                  <label
                    htmlFor="price"
                    className="text-[#222] text-xl font-garamond font-semibold"
                  >
                    Price (in ₦):
                  </label>
                  <input
                    type="text"
                    id="price"
                    placeholder="Amount"
                    value={roomPrice}
                    readOnly
                    className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[#222] text-xl font-garamond font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className="w-full text-base font-roboto p-[10px] text-[#333] mt-5 bg-transparent outline-none rounded-[5px] border border-borderHr"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-right text-sm font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </section>
            <button
              type="submit"
              className="tracking-[2px] mt-5 text-white w-fit bg-brownie py-[10px] px-5 text-[12px] font-medium hover:bg-[#b89970]"
            >
              PROCEED TO PAY
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Booking;

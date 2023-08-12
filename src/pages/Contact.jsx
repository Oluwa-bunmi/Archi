import { useState } from "react";
import Header from "../components/Header";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../components/Footer";

const Contact = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCaptchaVerified) {
      // Process your form submission here
      alert("Submission succesful");
    } else {
      alert("Please verify that you are a human");
    }
  };
  const verifyCallback = (response) => {
    if (response) {
      setIsCaptchaVerified(true);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-contactBg bg-cover bg-center">
        <h1 className="pt-[10rem] pb-[80px] text-[32px] text-[#eceff3] md:px-28 px-5 font-dosis tracking-[5px] font-light">
          CONTACT
        </h1>
      </div>
      {/* Map iframe */}
      <div className="md:px-28 px-5 bg-[#18191B] py-[90px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.616080516037!2d-118.24522822527487!3d34.053718017654056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f3b01358f%3A0x5723556b26dfefac!2sLos%20Angeles%20City%20Hall!5e0!3m2!1sen!2sng!4v1690995846436!5m2!1sen!2sng"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Form with Recaptcha */}
      <section className="bg-[#18191B] text-[#eee] pt-4 pb-[90px] grid gap-12 lg:gap-7 lg:grid-cols-3 items-start md:px-28 px-5">
        <form onSubmit={handleSubmit}>
          <h1 className="font-dosis tracking-[3px] text-[18px] font-normal mb-[20px]">
            SEND US A MESSAGE
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-[10px] mb-[20px] border border-light bg-borderHr"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="w-full p-[10px] mb-[20px] border border-light bg-borderHr"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            className="w-full p-[10px] mb-[20px] border border-light bg-borderHr"
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="8"
            placeholder="Your Message"
            className="w-full mb-[20px] lg:hidden p-[10px] border border-light bg-borderHr resize-none"
          ></textarea>
          <ReCAPTCHA
            sitekey="6LcTn5snAAAAANBgMt2p4ymOp8zCDMiYfzkmFZkb"
            onChange={verifyCallback}
            style={{ width: "200px" }}
            // className="recaptchersize"
          />
          <button
            type="submit"
            className="text-[12px] mt-[20px] font-medium transition ease-in-out hover:bg-[#FAB702] hover:text-black hover:border-brownie lg:flex items-center py-2 px-5 border border-light tracking-[2px] rounded-[2px]"
          >
            SUBMIT FORM
          </button>
        </form>
        {/* <div> */}
        <textarea
          name=""
          id=""
          cols="10"
          rows="8"
          placeholder="Your Message"
          className="hidden lg:block h-[227px] p-[10px] border border-light bg-borderHr resize-none"
        ></textarea>
        {/* </div> */}
        <div>
          <h1 className="font-dosis tracking-[3px] text-[18px] font-normal mb-[20px]">
            CONTACT INFO
          </h1>
          <ul>
            <li className="py-[2px] border-b border-[#222] mb-2">
              <b className="text-[#FAB702] mr-2">Address:</b> 100 S Main St, Los
              Angeles, CA
            </li>
            <li className="py-[2px] border-b border-[#222] mb-2">
              <b className="text-[#FAB702] mr-2">Phone:</b>
              (208) 333 9296
            </li>
            <li className="py-[2px] border-b border-[#222] mb-2">
              <b className="text-[#FAB702] mr-2">Email:</b>
              contact@example.com
            </li>
            <li className="py-[2px] border-b border-[#222]">
              <b className="text-[#FAB702] mr-2">Open</b> Sunday - Friday 08:00
              - 18:00
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

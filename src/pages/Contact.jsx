import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bg-contactBg bg-cover bg-center">
        <h1 className="pt-[10rem] pb-[80px] text-[32px] text-[#eceff3] md:px-28 px-5 font-dosis tracking-[5px] font-light">
          CONTACT
        </h1>
      </div>
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
      <section className="grid grid-cols-3 items-center md:px-28 px-5">
        <div>
          <h1>SEND US A MESSAGE</h1>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;

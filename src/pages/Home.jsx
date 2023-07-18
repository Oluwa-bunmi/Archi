import Carousel from "../components/Carousel";
import decorOne from "../assets/decorOne.jpg";
import decorTwo from "../assets/decorTwo.jpg";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Carousel />
      <section className="bg-creamy grid gap-7 lg:grid-cols-4 items-center md:px-28 px-5 py-20">
        <div className="lg:mt-12">
          <img src={decorOne} alt="decorOne" />
        </div>
        <div>
          <img src={decorTwo} alt="decorTwo" />
        </div>
        <div className="flex flex-col col-span-2 lg:p-5">
          <h3 className="text-brownie font-garamond text-[20px] font-semibold">
            The Archi Hotel
          </h3>
          <h1 className="text-[#222] font-garamond text-[40px] sm:text-[48px] font-semibold leading-[1.2em]">
            The Luxury Experience You'll Remember
          </h1>
          <p className="text-[#bbb] my-5 leading-[1.8em] text-[16px]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <Link className="tracking-[2px] text-white w-fit bg-brownie py-[10px] px-5 text-[12px] font-medium hover:bg-[#b89970]">
            BOOK NOW
          </Link>
        </div>
      </section>
      <section className="bg-testimonialBg bg-cover bg-center py-20">
        <Testimonial />
      </section>
    </>
  );
};

export default Home;

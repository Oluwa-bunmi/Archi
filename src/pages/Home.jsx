import Carousel from "../components/Carousel";
import decorOne from "../assets/decorOne.jpg";
import decorTwo from "../assets/decorTwo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel />
      <section className="bg-creamy grid gap-7 grid-cols-4 md:px-28 px-5 py-20">
        <div className="mt-12">
          <img src={decorOne} alt="decorOne" className="" />
        </div>
        <div>
          <img src={decorTwo} alt="decorTwo" className="" />
        </div>
        <div className="flex flex-col col-span-2 p-5">
          <h3 className="text-brownie">The Archi Hotel</h3>
          <h1>The Luxury Experience You'll Remember</h1>
          <p className="text-[#bbb]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <Link className="tracking-[2px] text-white w-fit bg-brownie">
            BOOK NOW
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

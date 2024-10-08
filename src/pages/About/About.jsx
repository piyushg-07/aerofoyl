import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About"  />
      <div className="pb-10 flex flex-col items-center justify-center text-center gap-y-5">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Aerofoyl</span>{" "}
          NextGen Aviation Baggage Logistics<br />
          We are a team of talented engineers developing the future of baggage
          tracking & management infrastructure with AI.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>

    </div>
  );
};

export default About;

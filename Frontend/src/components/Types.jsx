import React, { useEffect } from "react";
import headphone from "../assets/banner1.jpg";
import earphone from "../assets/banner2.jpg";
import smartwatch from "../assets/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Types = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-cenetr p-10 rounded-lg" style={{backgroundImage: `url(${headphone})`}}>
          <h1 className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-lg">60% Off</h1>
          <h1 className="text-4xl text-end text-white font-semibold">Wireless <br />Devices</h1>
      <button className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-cenetr p-10 rounded-lg" style={{backgroundImage: `url(${earphone})`}}>
          <h1 className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-lg">60% Off</h1>
          <h1 className="text-4xl text-end text-white font-semibold">Wireless <br />Devices</h1>
      <button className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="flex flex-col justify-center items-end gap-6 bg-cover bg-cenetr p-10 rounded-lg" style={{backgroundImage: `url(${smartwatch})`}}>
          <h1 className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-lg">60% Off</h1>
          <h1 className="text-4xl text-end text-white font-semibold">Wireless <br />Devices</h1>
      <button className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Types;

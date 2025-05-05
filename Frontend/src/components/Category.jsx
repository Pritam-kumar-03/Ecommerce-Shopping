import React, { useEffect } from "react";
import btspeaker from "../assets/cat1.jpg";
import cooler from "../assets/cat2.jpg";
import cable from "../assets/cat3.jpg";
import cddriver from "../assets/cat4.jpg";
import camera from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-cenetr lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-purple-700 text-xl font-semibold text-center ">
          Favourites item
        </h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center">
          Popular Category
        </h1>
        <button className="bg-purple-700 hover:bg-yellow-300 text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]">
          VIEW ALL
        </button>
      </div>
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-centeritems-start gap-10 ">
        <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-6">
          <img src={btspeaker} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-purple-700 cursor-pointer">Portable Speakers</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-6">
          <img src={cooler} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-purple-700 cursor-pointer">Portable cooler</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col justify-center items-center gap-6">
          <img src={cable} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-purple-700 cursor-pointer">Portable Cable</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col justify-center items-center gap-6">
          <img src={cddriver} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-purple-700 cursor-pointer">Portable Driver</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col justify-center items-center gap-6">
          <img src={camera} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-purple-700 cursor-pointer">Portable Camera</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;

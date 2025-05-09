import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { products } from "../export.js";

import AOS from "aos";
import "aos/dist/aos.css";

const Productsgrid = () => {
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
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-purple-700 text-xl font-semibold"
      >
        Browse Collection
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center "
      >
        Trending Proucts
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10 "
      >
        {products.map((item, index) => (
          <div
            id="product-box"
            key={index}
            className="w-full flex flex-col justify-center items-center gap-2 bg-white  rounded-lg p-4 cursor-pointer relative"
          >
            <img src={item.img} alt="" />
            <div
              id="icons"
              className="flex justify-center items-center gap-3 absolute top-[20px]"
            >
              <div className="bg-purple-700 hover:bg-yellow-300 hover:text-black rounded-full p-3 text-white">
                <MdRemoveRedEye />
              </div>
              <div className="bg-purple-700 hover:bg-yellow-300 hover:text-black rounded-full p-3 text-white">
                <CiHeart />
              </div>
              <div className="bg-purple-700 hover:bg-yellow-300 hover:text-black rounded-full p-3 text-white">
                <FaShoppingCart />
              </div>
            </div>
            <h1 className="text-lg text-gray-400 font-semibold ">
              {item.category}
            </h1>
            <h1 className="text-xlo text-black font-semibold">{item.name}</h1>
            <h1 className="text-lg text-purple-700 font-semibold">
              {item.price}
            </h1>
            <div className="w-full mt-2">
              <hr />
              <div className="flex justify-between items-center gap-6 mt-5">
                <div className="flex justify-start items-center gap-1">
                  <FaRegStar className="text-purple-700" />
                  <FaRegStar className="text-purple-700" />
                  <FaRegStar className="text-purple-700" />
                  <FaRegStar className="text-purple-700" />
                  <FaRegStar className="text-purple-700" />
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold ">
                  SALE 14%
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-purple-700 hover:bg-yellow-300 text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8"
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default Productsgrid;

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import camera from "../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL:false
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        id="hero"
        className="w-full flex justify-center items-center lg:h-[700px] h-[600px]"
      >
        <Slider {...settings} className="w-full">
          <div>
            <div
              className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${camera})` }}
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-xl"
              >
                Get upto discounts 80%
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
              >
                DSLR 360 <br />
                Camera{" "}
              </h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className="text-white text-2xl ">
                100% trusted <span className="text-yellow-300 font-semibold">Electronics Gadgets</span>
              </h1>
              <button data-aos="zoom-in"
                data-aos-delay="200" className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
            </div>
          </div>
          <div>
            <div
              className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${headset})` }}
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-xl"
              >
                Get upto discounts 80%
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
              >
                 Wireless <br />
                Headphones{" "}
              </h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className="text-white text-2xl ">
                100% trusted <span className="text-yellow-300 font-semibold">Electronics Gadgets</span>
              </h1>
              <button data-aos="zoom-in"
                data-aos-delay="200" className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
            </div>
          </div>
          <div>
            <div
              className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${earbuds})` }}
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-yellow-300 border rounded-lg border-yellow-300 px-6 py-2 text-xl"
              >
                Get upto discounts 80%
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
              >
                 Wireless <br />
                Earbuds{" "}
              </h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className="text-white text-2xl ">
                100% trusted <span className="text-yellow-300 font-semibold">Electronics Gadgets</span>
              </h1>
              <button data-aos="zoom-in"
                data-aos-delay="200" className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

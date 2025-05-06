import React,{useEffect} from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Service = () => {
  useEffect(() => {
      AOS.init({
        duration: 500,
        offset: 100,
        easing: "ease-in-out",
      });
  
      AOS.refresh();
    }, []);
  return (
    <div className='w-full lg:px-20 px-5 pt-[0px] py-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 '>
      <div data-aos="zoom-in" data-aos-delay="100"className='flex flex-col justify-center items-center gap-2 ' >
        <img src={shipping} alt=""className='mb-[20px] w-[60px]' />
        <h1 className=' text-xl font-semibold text-black'>Worldwide Shipping</h1>
        <p className=' text-[18px] text-gray-500 '>24/7 fast shipping</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100"className='flex flex-col justify-center items-center gap-2 ' >
        <img src={payment} alt=""className='mb-[20px] w-[60px]' />
        <h1 className=' text-xl font-semibold text-black'>Secure Payment</h1>
        <p className=' text-[18px] text-gray-500 '>Safe&Secure payment</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100"className='flex flex-col justify-center items-center gap-2 ' >
        <img src={refund} alt=""className='mb-[20px] w-[60px]' />
        <h1 className=' text-xl font-semibold text-black'>Return/Refund</h1>
        <p className=' text-[18px] text-gray-500 '>Refund Policy Available 24/7</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100"className='flex flex-col justify-center items-center gap-2 ' >
        <img src={gift} alt=""className='mb-[20px] w-[60px]' />
        <h1 className=' text-xl font-semibold text-black'>Best Gift Voucher</h1>
        <p className=' text-[18px] text-gray-500 '> Free Gift vochers </p>
      </div>
     
    </div>
  )
}

export default Service

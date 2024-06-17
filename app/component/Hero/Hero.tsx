'use client'
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiCycling } from "react-icons/bi";

import vegItem1 from '@/public/images/hero/item1.png'
import vegItem2 from '@/public/images/hero/item2.png'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export const Hero = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            showDots={true}
        >
            <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 
                    md:clip_path">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1.2rem] mx-auto">
                    {/* Hero Images */}
                    <Image src={vegItem2} alt="paneer tika" className="hidden md:block"/>
                    {/* Item Information */}
                    <div>
                        <h1 className="text-[40px] font-semibold text-yellow-400">Paneer Tikka</h1>
                        <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
                            Best <br /> Paneer Tikka
                        </h1>
                        <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatem labore ab nulla perspiciatis architecto tempore provident, reprehenderit dolor similique voluptas quis magnam ullam quod?
                        </p>
                        <button className='px-8 mt-[2rem] py-3 text-[16px] sm:text-[16px] bg-green-500
                            transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
                            <span>
                                <BiCycling className='w-[1.7rem] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                            </span>
                            <span className='font-bold'>
                                Order Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* 2nd slide */}
            <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 
                    md:clip_path">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1.2rem] mx-auto">
                    {/* Hero Images */}
                    <Image src={vegItem1} alt="Gulab Jamun" className="hidden md:block" />
                    {/* Item Information */}
                    <div>
                        <h1 className="text-[40px] font-semibold text-yellow-400">Gulab Jamun</h1>
                        <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
                            Best <br /> Gulab Jamun
                        </h1>
                        <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatem labore ab nulla perspiciatis architecto tempore provident, reprehenderit dolor similique voluptas quis magnam ullam quod?
                        </p>
                        <button className='px-8 mt-[2rem] py-3 text-[16px] sm:text-[16px] bg-blue-500
                            transition-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white'>
                            <span>
                                <BiCycling className='w-[1.7rem] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                            </span>
                            <span className='font-bold'>
                                Order Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
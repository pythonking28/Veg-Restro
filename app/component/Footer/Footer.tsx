import Image from "next/image"
import Link from "next/link"
import logo from '@/public/images/logo.png'
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
export const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="w-[80%] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center">

                {/* 1st part */}
                <div>
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500 " src={logo} alt="logo" ></Image>
                        <h1 className='text-white text-[20px] sm:text-[30px] font-semibold'>
                            Veg Restro
                        </h1>
                    </div>
                    <p className="text-white text-opacity-60 mt-[0.4rem]">
                        Lorem ipsum, dolor sit amet consectetur adipisic.
                    </p>
                    <p className="mt-[1rem] text-white">
                        nirajthakur2828@gmail.com
                    </p>
                    <p className="text-red-300 text-[19px] font-bold">
                        +012 345 6789
                    </p>
                </div>
                {/* 2nd part */}
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
                        Products
                    </h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Paneer
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Mushroom
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        PauBhaji
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Samosa
                    </p>
                    <p className="mt-[0.7rem] mb-[1rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Dosa
                    </p>
                </div>

                {/* 3rd Part */}

                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
                        Quick Links
                    </h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Home
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        About
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Menu
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        Products
                    </p>
                    <p className="mt-[0.7rem] mb-[1rem] text-white opacity-60 hover:text-yellow-300 tranisition-all duration-200 cursor-pointer w-fit">
                        NewsLetter
                    </p>
                </div>
                {/* 4th part */}
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
                        Openings
                    </h1>
                    <p className="text-white text-[18px]">Monday-Friday : <span className="text-yellow-300">8am - 4pm</span></p>
                    <p className="text-white text-[18px]">Saturday : <span className="text-yellow-300">8am - 12pm</span></p>
                    {/* Social icons */}
                    <div className="flex mt-[2rem] items-center space-x-6 ">
                        <Link href="https://www.facebook.com/niraj.thakur.52498/" target="_blank">
                            <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
                        </Link>
                        <Link href="https://www.instagram.com/nirajthakur2828/" target="_blank">
                        <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
                        </Link>
                        <Link href="#">
                        <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-400" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Copyright text */}
            <p className="text-center text-white opacity-50 mt-[1.5rem]">
                Copyright © 2024
                <span className="text-yellow-300"> Niraj Kumar Thakur</span>.
                All rights reserved
            </p>

        </div>
    )
}
import { BiPhone } from "react-icons/bi"
import { ReservationForm } from "./ReservationForm"

export const Reservation = () => {
    return (
        <div className="pt-[5rem] relative mt-[2rem] pb-[5rem] mb-[3rem] bg-gray-700">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
            <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
                {/* Text Content */}
                <div>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] uppercase text-white font-bold leading-[3rem] md:leading-[4rem]">
                        Do you have any dinner plan today? Reserve your table
                    </h1>
                    <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda beatae quia illum consequuntur at inventore, mollitia aut iste debitis impedit nihil voluptates veniam doloremque!
                    </p>
                    <div className="flex mt-[2rem] items-center space-x-4">
                        <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center felx-cols">
                            <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
                        </div>
                        <div>
                            <h1 className="text-[25px] text-white font-semibold">Quick Order 24/7</h1>
                            <h1 className="text-yellpw-300 text-[30px] text-white">+012 345 6789</h1>
                        </div>

                    </div>
                </div>
                {/* Reservation Form */}
                <ReservationForm />
            </div>
        </div>
    )
}
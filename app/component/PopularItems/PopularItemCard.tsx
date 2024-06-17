import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
interface Props {
    title: string;
    image: string;
    price: string;
    review: string;
}

export const PopularItemCard = ({title, image, price, review}: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
        {/* Image Div */}
        <div className="w-[200px] mx-auto h-[200px]">
            <Image src={image} alt={title} width={200} height={200} className="w-[100%] h-[100%] object-cover rounded-lg" />
        </div>
        {/* Title */}
        <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">{title}</h1>
        <div className="flex items-center mt-[0.5rem] space-x-3">
            <div className="flex items-center">
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
            </div>
            <div className="text-black opacity-80">
                ({review})
            </div>
        </div>
        <p className="mt-[0.5rem] text-black text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi quidem eveniet inventore explicabo necessitatibus, pariatur sit nisi nam hic ducimus quisquam error cumque doloremque?
        </p>
        <div className="flex mt-[1.4rem] items-center justify-between">
            <h1 className="text-[25px] font-bold text-red-600">{price}</h1>
            <button className="px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-whtie">
                <BiShoppingBag className="w-[1.3rem] h-[1.3rem]" />
            </button>
        </div>
    </div>
  )
}
import vegImg1 from '@/public/images/special/item1.jpg'
import vegImg2 from '@/public/images/special/item2.jpg'
import vegImg3 from '@/public/images/special/item3.jpg'
import Image from 'next/image'

export const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* Heading */}
        <h1 className="heading">
            Special Menu with <br /> love and  
            <span className='text-red-600'> Care</span>
        </h1>
        {/* Cards Section */}
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {/* First Card */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={vegImg1} alt="Paneer Butter Masala" className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Paneer Butter Masala</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque consequatur aspernatur eveniet eos aliquid non tempore voluptatem minus facilis! Maxime tenetur a quia placeat.
                    </p>

                </div>
            </div>
            {/* 2nd Card */}
            <div data-aos="flip-left" data-aos-delay="200">
                <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
                    <Image src={vegImg2} alt="Mushroom Curry" className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Mushroom Curry</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque consequatur aspernatur eveniet eos aliquid non tempore voluptatem minus facilis! Maxime tenetur a quia placeat.
                    </p>

                </div>
            </div>
            {/* 3rd Card */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={vegImg3} alt="Mix Veg" className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Mix Veg</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque consequatur aspernatur eveniet eos aliquid non tempore voluptatem minus facilis! Maxime tenetur a quia placeat.
                    </p>

                </div>
            </div>

        </div>
        
    </div>
  )
}
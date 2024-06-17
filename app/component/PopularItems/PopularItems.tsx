'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PopularItemCard } from "./PopularItemCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export const PopularItems = () => {
    return (
        <div className="pt-[3rem] pb-[3rem]">
            <h1 className="heading">
                Our Popular <span className="text-red-600">Items</span>
            </h1>
            <div className='w-[80%] mx-auto mt-[4rem]'>
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    infinite
                    responsive={responsive}
                    itemClass='item'
                    showDots={false}

                >
                    <PopularItemCard title="Daal Tadka" image="/images/popular/item1.jpg" review="20" price="Nrs 150" />
                    <PopularItemCard title="Chana Masala" image="/images/popular/item2.jpg" review="10" price="Nrs 150" />
                    <PopularItemCard title="Nan Roti" image="/images/popular/item3.webp" review="30" price="Nrs 40 (per piece)" />
                    <PopularItemCard title="Aalo Cauli" image="/images/popular/item4.jpg" review="10" price="Nrs 80" />
                    <PopularItemCard title="Aalo Soya Curry" image="/images/popular/item5.jpg" review="10" price="Nrs 80" />
                    <PopularItemCard title="Paneer Chilli" image="/images/popular/item6.jpeg" review="60" price="Nrs 100" />
                    <PopularItemCard title="Samosa" image="/images/popular/item7.jpg" review="65" price="Nrs 40 (per piece)" />
                </Carousel>

            </div>

        </div>
    )
}
'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Hero } from "./Hero/Hero"
import { Feature } from "./Features/Feature"
import { PopularItems } from "./PopularItems/PopularItems"
import { Delivery } from "./Delivery/Delivery"
import { Team } from "./Team/Team"
import { Reservation } from "./Reservation/Reservation"
import { NewsLetter } from "./NewsLetter/NewsLetter"
import { useEffect } from 'react';
export const Homepage = () => {

  useEffect(()=>{
    const initAOS = async ()=>{
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: "top-center"
      })
    }
    initAOS();
  },[])

  return (
    <div className="overflow-hidden">
        <Hero />
        <Feature />
        <PopularItems />
        <Delivery />
        <Team />
        <Reservation />
        <NewsLetter />
    </div>
  )
}
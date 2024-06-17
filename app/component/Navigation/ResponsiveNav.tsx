'use client'
import { useState } from "react"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"

export const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
  return (
    <div>
        <Nav openNav = {openNavHandler}/>
        <MobileNav showNav={showNav} closeNav = {closeNavHandler} />
    </div>
  )
}
"use client"

import { useState } from "react"

import { navbarHeaderConfig } from "@/config/NavbarConfig"
import NavbarHeader from "./Header/NavbarHeader"
import NavbarItems from "./Items/NavbarItems"


const NavbarId = "portfolioNavbar"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex fixed top-0 w-full justify-between p-4 bg-gradient-to-b from-transparent to-white to-50%dark:from-transparent dark:from-10% dark:to-black dark:to-50%">
            <NavbarItems navbarId={NavbarId}/>
            
            <NavbarHeader mainTitle={navbarHeaderConfig.mainTitle} subTitle={navbarHeaderConfig.subTitle}/>
        </nav>
    );
}

export default Navbar;
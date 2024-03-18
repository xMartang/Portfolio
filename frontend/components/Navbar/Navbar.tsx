"use client"

import { useState } from "react"

import { navbarHeaderConfig } from "@/config/NavbarConfig"
import NavbarHeader from "./Header/NavbarHeader"
import NavbarItems from "./Items/NavbarItems"


const NavbarId = "portfolioNavbar"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between p-4">
            <NavbarItems navbarId={NavbarId}/>
            
            <NavbarHeader mainTitle={navbarHeaderConfig.mainTitle} subTitle={navbarHeaderConfig.subTitle}/>
        </nav>
    );
}

export default Navbar;
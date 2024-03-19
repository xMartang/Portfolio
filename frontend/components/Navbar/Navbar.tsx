"use client"

import { useState } from "react"

import { navbarHeaderConfig } from "@/config/NavbarConfig"
import NavbarHeader from "./Header/NavbarHeader"
import NavbarItems from "./Items/NavbarItems"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex fixed top-0 w-full p-4 bg-gradient-to-b from-transparent to-white to-90% dark:from-transparent dark:to-black border-b-2 border-black dark:border-white">
            <div className="mx-auto flex items-center justify-center w-full align-middle lg:w-[1024px]">
                <NavbarHeader mainTitle={navbarHeaderConfig.mainTitle} subTitle={navbarHeaderConfig.subTitle}/>
                
                <NavbarItems/>
            </div>
        </nav>
    );
}

export default Navbar;
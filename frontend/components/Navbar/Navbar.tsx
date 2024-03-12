"use client"

import { navbarHeaderConfig } from "@/config/NavbarConfig"

import NavbarHeader from "./Header/NavbarHeader"
import NavbarItems from "./Items/NavbarItems"

const NavbarId = "portfolioNavbar"

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row justify-between mx-auto p-4">
                <NavbarHeader mainTitle={navbarHeaderConfig.mainTitle} subTitle={navbarHeaderConfig.subTitle}/>
                
                <NavbarItems navbarId={NavbarId}/>
            </div>
        </nav>
    );
}

export default Navbar;
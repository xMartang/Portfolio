"use client"

import NavbarItems from "./Items/NavbarItems"
import NavbarHeader from "./Header/NavbarHeader"

const Navbar = () => {
    return (
        <nav className={"sticky flex justify-center items-center top-0 w-full p-4 bg-gradient-to-b from-transparent to-white to-90% dark:from-transparent dark:to-black border-b-2 border-black dark:border-white"}>
            <div className="flex justify-center items-center w-full lg:w-[1024px]">
                <NavbarHeader/>

                <NavbarItems/>
            </div>
        </nav>
    );
}

export default Navbar;
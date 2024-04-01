"use client"

import { useState} from "react"

import { RxHamburgerMenu, RxExit } from "react-icons/rx";

import { navbarItemsConfig } from "@/config/NavbarConfig";

const GENERAL_ITEM_CLASS_NAME = "block py-2 px-3 lg:p-2 lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:hover:text-white transition-all duration-300"
const DEFAULT_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME
const CLICKED_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME + " font-bold bg-zinc-300 dark:bg-zinc-700 lg:bg-inherit lg:dark:bg-inherit lg:border-b-2 border-b-black dark:border-b-white"

const NavbarItems = () => {
    const [clickedItemName, setClickedItem] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let navbarItems = Object.values(navbarItemsConfig).map(function(navbarItem) {
        let currItemName = navbarItem.name

        return (
            <li key={currItemName}>
                <a onClick={() => setClickedItem(currItemName)} href={"#" + navbarItem.id} id={currItemName} className={clickedItemName == currItemName ? CLICKED_ITEM_CLASS_NAME : DEFAULT_ITEM_CLASS_NAME}>
                    {currItemName}
                </a>
            </li>
        );
    })

    return (
        <>        
            {/* Regular Navigation */}
            <div className="mx-auto items-center hidden lg:flex lg:order-1">
                <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0">
                    {navbarItems}
                </ul>
            </div>

            {/* Menu Button */}
            <div className="flex justify-center items-center max-lg:block order-last lg:hidden">
                <RxHamburgerMenu size={42} className="cursor-pointer h-auto w-auto flex-1 hover:bg-zinc-300 hover:dark:bg-zinc-700 p-1 rounded" onClick={() => {setIsMenuOpen(!isMenuOpen);}}/>
            </div>

            {/* Darken background when menu is opened */}
            <div className={`fixed lg:hidden h-[100%] w-[100%] top-0 bg-opacity-70 bg-black transition-opacity duration-500 order-last ${isMenuOpen ? 'right-0' : 'right-[-100%] hidden'}`} onClick={() => {setIsMenuOpen(!isMenuOpen);}}/>

            {/* Menu Navigation */}
            <div className={
                `flex flex-col justify-normal bg-white dark:bg-black border-black dark:border-white fixed w-[30%] h-full duration-300 ease-in-out border-l-2 lg:hidden overflow-y-auto top-0 text-center '
                ${isMenuOpen ? 'right-0' : 'right-[-100%]'}`
                }>
                    <ul className="flex-col text-center justify-around items-center space-y-2 mt-2">
                        <RxExit size={30} className="cursor-pointer flex-1 ml-2 mt-2 hover:bg-zinc-300 hover:dark:bg-zinc-700 p-1 rounded" onClick={() => {setIsMenuOpen(!isMenuOpen);}}/>
                        {navbarItems}
                    </ul>
            </div>
        </>
    );
}

export default NavbarItems;
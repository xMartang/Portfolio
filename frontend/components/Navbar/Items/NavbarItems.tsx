import { useState} from "react"

import { RxHamburgerMenu } from "react-icons/rx";

import { navbarItemsConfig } from "@/config/NavbarConfig";

const GENERAL_ITEM_CLASS_NAME = "block py-2 px-3 md:p-2 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white transition-all duration-300"
const DEFAULT_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME
const CLICKED_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME + " font-bold bg-zinc-300 dark:bg-zinc-700 md:bg-inherit md:dark:bg-inherit md:border-b-2 border-b-black dark:border-b-white"

const NavbarItems = () => {
    const [clickedItemName, setClickedItem] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let navbarItems = navbarItemsConfig.map(function(navbarItem) {
        let currItemName = navbarItem.name

        return (
            <li key={currItemName}>
                <a onClick={() => setClickedItem(currItemName)} href={navbarItem.href} id={currItemName} className={clickedItemName == currItemName ? CLICKED_ITEM_CLASS_NAME : DEFAULT_ITEM_CLASS_NAME}>
                    {currItemName}
                </a>
            </li>
        );
    })

    return (
        <>        
            {/* Desktop Navigation */}
            <div className="mx-auto items-center hidden md:flex md:order-1">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0">
                    {navbarItems}
                </ul>
            </div>

            {/* Mobile Navigation*/}
            <div className="flex h-full justify-around max-lg:block order-last md:hidden">
                <RxHamburgerMenu size={42} className="cursor-pointer h-full flex-1" onClick={() => {setIsMenuOpen(!isMenuOpen);}}/>

                <div className={
                    `bg-white dark:bg-black border-black dark:border-white fixed w-[40%] max-h-screen duration-500 ease-in-out border-b-2 border-l-2 md:hidden mt-4 overflow-y-auto '
                    ${isMenuOpen ? 'right-0' : 'right-[-100%]'}`}
                    >

                    <ul className="flex-col text-center justify-around items-center space-y-2">
                        {navbarItems}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavbarItems;
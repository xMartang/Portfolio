import { useState} from "react"

import { RxHamburgerMenu } from "react-icons/rx";
import { GoSidebarCollapse } from "react-icons/go";

import { navbarItemsConfig } from "@/config/NavbarConfig";


interface NavbarItemsProps {
    navbarId?: string
}

const DEFAULT_MENU_HEIGHT = 28;

const GENERAL_ITEM_CLASS_NAME = "block py-2 px-3 md:p-1 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white transition-all duration-150"
const DEFAULT_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME
const CLICKED_ITEM_CLASS_NAME = GENERAL_ITEM_CLASS_NAME + " font-bold border-b-2 border-black dark:border-white"

const NavbarItems: React.FC<NavbarItemsProps> = ({
    navbarId
}) => {
    const [clickedItemName, setClickedItem] = useState(navbarItemsConfig[0].name);
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
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id={navbarId}>
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                    {navbarItems}
                </ul>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="flex flex-col max-lg:block order-last">
                    <RxHamburgerMenu size={42} className="md:hidden cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen);}}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </RxHamburgerMenu>

                    {/* Mobile Navigation*/}
                    <div className={
                        `bg-white dark:bg-black '
                        ${isMenuOpen ? 'fixed md:hidden right-0 w-[30%] h-full border-r border-r-gray-900 ease-in-out duration-500' : 'ease-in-out h-full w-[30%] duration-500 fixed right-[-100%]'}`}
                        >

                        <ul className="text-center mt-2">
                            {navbarItems}
                        </ul>
                    </div>
            </div>
        </>
    );
}

export default NavbarItems;
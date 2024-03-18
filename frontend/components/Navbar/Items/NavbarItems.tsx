import { useState} from "react"

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

import { navbarItemsConfig } from "@/config/NavbarConfig";


interface NavbarItemsProps {
    navbarId?: string
}

const generalItemClassName = "block py-2 px-3 md:p-1 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white transition-all duration-150"
const defaultItemClassName = generalItemClassName
const clickedItemClassName = generalItemClassName + " font-bold border-b-2 border-black dark:border-white"

const NavbarItems: React.FC<NavbarItemsProps> = ({
    navbarId
}) => {
    const [clickedItemName, setClickedItem] = useState(navbarItemsConfig[0].name);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let navbarItems = navbarItemsConfig.map(function(navbarItem) {
        let currItemName = navbarItem.name

        return (
            <li key={currItemName}>
                <a onClick={() => setClickedItem(currItemName)} href={navbarItem.href} id={currItemName} className={clickedItemName == currItemName ? clickedItemClassName : defaultItemClassName}>
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
            <div className="flex max-lg:block cursor-pointer order-last" onClick={() => {setIsMenuOpen(!isMenuOpen);}}>
                    <RxHamburgerMenu className="text-4xl md:hidden" />
            </div>

            {/* Mobile Navigation*/}
            
            <div className={
                isMenuOpen
                    ? 'fixed md:hidden right-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                    : 'ease-in-out w-[30%] duration-500 fixed top-0 bottom-0 right-[-100%]'
                }>
                
                <CgClose size={30} name="close-outline" className='mobile-nav-icon close-outline cursor-pointer mt-2 ml-2' onClick={() => {setIsMenuOpen(!isMenuOpen);}}/>

                <ul className="text-center mt-2">
                    {navbarItems}
                </ul>
            </div>
        </>
    );
}

export default NavbarItems;